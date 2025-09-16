"use client";

import { useApp } from "@/context/AppContext";

export default function FreeShippingNotice({ goal = 100 }) {
  const { cart } = useApp();

  // ✅ calculate current cart subtotal
  const current = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const progress = Math.min((current / goal) * 100, 100);
  const remaining = goal - current;

  return (
    <div className="bg-gray-100 p-4 text-center rounded-lg shadow-sm">
      {remaining > 0 ? (
        <p className="text-sm">
          Add <span className="font-semibold text-primary">${remaining.toFixed(2)}</span> more to your cart and get free shipping!
        </p>
      ) : (
        <p className="text-sm font-semibold text-green-600">
          You’ve unlocked free shipping! 🎉
        </p>
      )}
      <div className="mt-2 h-2 w-full bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
