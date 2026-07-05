"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [freeShippingGoal] = useState(200);

  // Tracks whether the saved cart has finished loading for the current
  // session, so we don't accidentally overwrite it with an empty cart
  // before it has arrived (see saveCart effect below).
  const cartLoadedRef = useRef(false);
  const loadedForEmailRef = useRef(null);

  // Sync user with session
  useEffect(() => {
    if (session?.user) setUser(session.user);
    else setUser(null);
  }, [session]);

  // Load cart from MongoDB when user logs in
  useEffect(() => {
    const email = session?.user?.email;

    if (!email) {
      // Logged out: reset so a future login loads fresh instead of
      // reusing a stale "loaded" flag from a previous user.
      cartLoadedRef.current = false;
      loadedForEmailRef.current = null;
      return;
    }

    const loadCart = async () => {
      cartLoadedRef.current = false;
      try {
        const res = await axios.get(`/api/cart?userEmail=${email}`);
        if (res.data?.cartItems) {
          setCart(res.data.cartItems);
        }
      } catch (err) {
        console.error("Failed to load cart", err);
      } finally {
        // Mark loading complete only after the request settles, so the
        // save effect below knows it's now safe to persist changes.
        loadedForEmailRef.current = email;
        cartLoadedRef.current = true;
      }
    };

    loadCart();
  }, [session]);

  // Save cart to MongoDB whenever cart changes
  useEffect(() => {
    const email = session?.user?.email;
    if (!email) return;

    // Don't save until the initial cart for this user has finished
    // loading — otherwise the empty starting cart gets written to the
    // database first and wipes out whatever was saved previously.
    if (!cartLoadedRef.current || loadedForEmailRef.current !== email) return;

    const saveCart = async () => {
      try {
        await axios.post("/api/cart", {
          userEmail: email,
          cartItems: cart,
        });
      } catch (err) {
        console.error("Failed to save cart", err);
      }
    };

    saveCart();
  }, [cart, session]);

  // --- Cart actions ---
  const addToCart = (product) => {
    setCart((prev) => {
      const key = product.id + "-" + product.category;
      const existing = prev.find((p) => p.id + "-" + p.category === key);

      const cartItem = {
        ...product,
        quantity: 1,
        img: product.img || "/placeholder.png", 
      };

      if (existing) {
        return prev.map((p) =>
          p.id + "-" + p.category === key
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      } else {
        return [...prev, cartItem];
      }
    });
  };

  const removeFromCart = (key) =>
    setCart((prev) => prev.filter((p) => p.id + "-" + p.category !== key));

  const updateQuantity = (key, quantity) =>
    setCart((prev) =>
      prev.map((p) =>
        p.id + "-" + p.category === key ? { ...p, quantity } : p
      )
    );

  // --- Coupon logic ---
  const applyCoupon = (code) => {
    const coupons = {
      SAVE10: 10, // 10% off
      SAVE20: 20, // 20% off
      FREESHIP: 0, // handled separately if needed
    };

    if (coupons[code]) {
      setDiscount(coupons[code]);
      return { success: true, discount: coupons[code] };
    } else {
      setDiscount(0);
      return { success: false };
    }
  };

  // --- Place order function ---
const placeOrder = async (orderData) => {
  if (!cart?.length) 
    return { success: false, message: "Cart is empty" }
  if (!orderData?.billing || !orderData?.shippingAddress) {
    return { success: false, message: "Billing and shipping addresses are required" }
  }

  try {
    const res = await axios.post("/api/orders", {
      userEmail: user.email,
      cart,
      subtotal: orderData.subtotal,
      shipping: orderData.shipping,
      discount: orderData.discount,
      total: orderData.total,
      billing: orderData.billing,
      shippingAddress: orderData.shippingAddress,
      ...orderData
    })

    if (res.data?.success) {
      setCart([])
      setDiscount(0)
    }

    return res.data
  } catch (err) {
    console.error("Order error", err)
    return { success: false, message: err.response?.data?.error || err.message }
  }
}



  return (
    <AppContext.Provider
      value={{
        user,
        cart,
        discount,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyCoupon,
        freeShippingGoal,
        placeOrder
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
