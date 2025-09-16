"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartDropdown from "./CartDropdown";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function CartIcon() {
  const { cart, user } = useApp();
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleClick = () => {
    if (user) {
      router.push("/cart"); // ✅ logged in → go to cart
    } else {
      router.push("/login"); // ❌ not logged in → go to login
    }
  };

  return (
    <div
      className="relative flex items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick} // 👈 redirect logic here
    >
      <ShoppingCart className="w-6 h-6" />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 min-w-[20px] h-5 flex items-center justify-center rounded-full shadow-md">
          {cartCount}
        </span>
      )}

      {hover && (
        <div className="absolute right-0 top-full mt-3 z-20">
          <CartDropdown />
        </div>
      )}
    </div>
  );
}
