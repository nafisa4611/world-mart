"use client";

import CartHero from "@/components/Cart/CartHero";
import FreeShippingNotice from "@/components/Cart/FreeShippingNotice";
import CartTable from "@/components/Cart/CartTable";
import CartTotals from "@/components/Cart/CartTotals";
import SuggestedProducts from "@/components/Cart/SuggestedProducts";
import { useApp } from "@/context/AppContext";

export default function Cart() {
  const { cart } = useApp();

  // Calculate subtotal dynamically
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Example: Suggested products (can also fetch from API later)
  const suggested = [
    { id: 1, name: "Headphones", price: 45, image: "/headphones.jpg" },
    { id: 2, name: "Smart Phone", price: 299, image: "/smartphone.jpg" },
  ];

  return (
    <>
      <CartHero />
      <FreeShippingNotice goal={100} />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        <div className="lg:col-span-2">
          <CartTable items={cart} />  
          <SuggestedProducts products={suggested} />
        </div>

        <div>
          <CartTotals subtotal={subtotal} />
        </div>
      </div>
    </>
  );
}
