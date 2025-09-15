"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]); // each item: { ...product, quantity }

  useEffect(() => {
    if (session?.user) setUser(session.user);
    else setUser(null);
  }, [session]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateQuantity = (productId, qty) => {
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity: qty } : p))
    );
  };

  return (
    <AppContext.Provider
      value={{ user, cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
