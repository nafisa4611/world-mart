"use client";

import { useApp } from "@/context/AppContext";
import { Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function CartDropdown() {
  const { cart, removeFromCart, updateQuantity } = useApp();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrease = (item) => updateQuantity(item.id + '-' + item.category, item.quantity + 1);
  const handleDecrease = (item) => {
    if (item.quantity > 1) updateQuantity(item.id + '-' + item.category, item.quantity - 1);
    else removeFromCart(item.id + '-' + item.category);
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-200">
      <h4 className="font-semibold mb-3">Your Cart</h4>
      {cart.length > 0 ? (
        <>
          <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {cart.map(item => (
              <Link 
                key={item.id + item.category} 
                href={`/product/${item.id}`} 
                className="flex justify-between items-center mb-3 hover:bg-gray-50 rounded p-1 transition"
              >
                <div className="flex items-center gap-3">
                  <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={(e) => { e.preventDefault(); handleDecrease(item); }} className="p-1 rounded hover:bg-gray-200">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button onClick={(e) => { e.preventDefault(); handleIncrease(item); }} className="p-1 rounded hover:bg-gray-200">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">${item.price * item.quantity}</p>
                  <button 
                    onClick={(e) => { e.preventDefault(); removeFromCart(item.id + '-' + item.category); }}
                    className="p-1 hover:bg-gray-200 rounded transition"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-3 border-t pt-3">
            <div className="flex justify-between font-semibold mb-2">
              <span>Subtotal:</span>
              <span>${cartPrice}</span>
            </div>
            <Link href="/cart">
              <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700 transition">
                View Cart
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 py-4">Your cart is empty.</div>
      )}
    </div>
  );
}
