"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  // Sync user with session
  useEffect(() => {
    if (session?.user) setUser(session.user);
    else setUser(null);
  }, [session]);

  // Load cart from MongoDB when user logs in
  useEffect(() => {
    const loadCart = async () => {
      if (!session?.user?.email) return;

      try {
        const res = await axios.get(`/api/cart?userEmail=${session.user.email}`);
        if (res.data?.cartItems) {
          setCart(res.data.cartItems);
        }
      } catch (err) {
        console.error("Failed to load cart", err);
      }
    };

    loadCart();
  }, [session]);

  // Save cart to MongoDB whenever cart changes
  useEffect(() => {
    const saveCart = async () => {
      if (!session?.user?.email) return;

      try {
        await axios.post("/api/cart", {
          userEmail: session.user.email,
          cartItems: cart,
        });
        console.log("Cart saved successfully");
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
        img: product.img || "/placeholder.png", // ✅ use img from JSON
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
