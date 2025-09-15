"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

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
      if (!session?.user?.email || cart.length === 0) return;

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
      if (existing) {
        return prev.map((p) =>
          p.id + "-" + p.category === key ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
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

  return (
    <AppContext.Provider
      value={{ user, cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
