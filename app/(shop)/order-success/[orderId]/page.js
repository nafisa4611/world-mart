"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams, useRouter } from "next/navigation";

export default function OrderSuccess() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = params.orderId;

  const paid = searchParams.get("paid");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`/api/orders/${orderId}`);
        if (res.data?.order) {
          setOrder(res.data.order);
          setMessage("✅ Your order has been placed successfully!");
        } else {
          setMessage("❌ Failed to fetch order details.");
        }
      } catch (err) {
        setMessage(`❌ ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  // Mark order as paid if redirected from Stripe
  useEffect(() => {
    const markOrderPaid = async () => {
      if (!paid) return;

      try {
        setLoading(true);
        const res = await axios.post("/api/mark-order-paid", { orderId });
        if (res.data.success) {
          setMessage("✅ Payment successful! Your order is now marked as paid.");
          setOrder(prev => ({ ...prev, status: "paid" }));
        } else {
          setMessage(`❌ ${res.data.error || "Failed to mark order paid."}`);
        }
      } catch (err) {
        setMessage(`❌ ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    markOrderPaid();
  }, [orderId, paid]);

  if (loading) return <div className="text-center py-20">Loading your order...</div>;

  if (!order) return <div className="text-center py-20">{message}</div>;

  const { cart, subtotal, shipping, discount, total, status, billing } = order;

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12">
      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h1 className="text-2xl font-bold text-green-800 mb-2">Thank you for your order!</h1>
        <p className="text-green-700">{message}</p>
        <p className="mt-2 text-gray-600">Order ID: <span className="font-mono">{orderId}</span></p>
        <p className="mt-1 text-gray-600">Status: <span className="font-semibold">{status}</span></p>
      </div>

      {/* Order Items */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {cart.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.img || "/placeholder.png"} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Discount</span>
            <span>${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Billing Info */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
        <p>{billing.firstName} {billing.lastName}</p>
        <p>{billing.address}, {billing.city}, {billing.state}, {billing.country}</p>
        <p>{billing.phone}</p>
        <p>{billing.email}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => router.push("/shop")}
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => router.push("/shop/orders")}
          className="bg-gray-200 text-gray-800 py-3 px-6 rounded hover:bg-gray-300 transition"
        >
          View My Orders
        </button>
      </div>
    </div>
  );
}
