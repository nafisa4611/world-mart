"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartDropdown from "./CartDropdown";
import { useApp } from "@/context/AppContext";

export default function CartIcon() {
  const { cart } = useApp();
  const [hover, setHover] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div 
      className="relative flex items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ShoppingCart className="w-6 h-6" />

      {cartCount > 0 && (
        <>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 min-w-[20px] h-5 flex items-center justify-center rounded-full shadow-md">
          {cartCount}
        </span>
        </>
      )}

      {hover && (
        <div className="absolute right-0 top-full mt-3 z-20">
          <CartDropdown />
        </div>
      )}
    </div>
  );
}
