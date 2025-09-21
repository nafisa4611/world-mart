"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import CheckoutHero from "./CheckoutHero";
import CouponNotice from "./CouponNotice";
import FreeShippingBar from "./FreeShippingBar";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  const router = useRouter();
  const { cart, discount, user, placeOrder } = useApp();
  const [formData, setFormData] = useState({ billing: {}, shipping: {} });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // --- Cart Calculations ---
  const subtotal = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const shipping = subtotal > 100 ? 10 : 20;
  const total = subtotal - subtotal * (discount / 100) + shipping;

  // --- Handle Order Placement ---
  const handlePlaceOrder = async () => {
    if (!user?.email) {
      setMessage("⚠ Please login to place your order.");
      return;
    }

    // Check required billing fields
    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "address",
      "city",
      "state",
      "phone",
      "email",
    ];
    const missing = requiredFields.filter(
      (field) => !formData.billing?.[field]
    );
    if (missing.length > 0) {
      setMessage("⚠ Please fill in all required billing details.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // 1️⃣ Save order in MongoDB
      const res = await placeOrder({
        cart,
        subtotal,
        discount,
        shipping,
        total,
        billing: formData.billing,
        shippingAddress: formData.shipping,
      });

      if (res.success) {
        // 2️⃣ Create Stripe Checkout session
        const stripeRes = await fetch("/api/checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: res.orderId, total }),
        });

        const data = await stripeRes.json();
        if (data.url) {
          window.location.href = data.url; // Redirect to Stripe
        } else {
          setMessage(`❌ ${res.message || "Failed to place order."}`);
        }
      } else {
        setMessage(`❌ ${res.message || "Order could not be created."}`);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setMessage("❌ Error placing order or initiating payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CheckoutHero />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <CouponNotice />
          <FreeShippingBar current={subtotal} goal={200} />
          <BillingForm onChange={setFormData} />
        </div>

        {/* Right Column - Order Summary */}
        <OrderSummary
          cart={cart}
          subtotal={subtotal}
          shipping={shipping}
          discount={discount}
          total={total}
          placeOrder={handlePlaceOrder}
          loading={loading}
          message={message}
        />
      </div>
    </div>
  );
}
