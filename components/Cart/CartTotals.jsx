"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useApp } from "@/context/AppContext";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartTotals() {
  const { cart, discount, applyCoupon } = useApp();
  const [couponCode, setCouponCode] = useState("");
  const [shipping, setShipping] = useState(10); // default shipping
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(sum);
  }, [cart]);

  const discountedSubtotal = subtotal - (subtotal * discount) / 100;
  const total = discountedSubtotal + shipping;

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponCode);
    if (!result.success) alert("Invalid coupon code");
  };

  return (
    <Card className="shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-xl font-semibold text-gray-800">Cart Totals</CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Subtotal */}
        <div className="flex justify-between text-gray-700 font-medium text-lg">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* Coupon */}
        <div className="space-y-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
          <Button
            onClick={handleApplyCoupon}
            className="w-full bg-blue-600 text-white rounded-lg"
          >
            Apply Coupon
          </Button>
          {discount > 0 && (
            <p className="text-green-600 text-sm">Coupon applied: {discount}% OFF</p>
          )}
        </div>
        

        {/* Total */}
        <div className="flex justify-between items-center font-bold text-2xl text-gray-900 border-t border-gray-200 pt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <Link href="/checkout">
          <Button className="w-full py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            Proceed to Checkout
          </Button>
        </Link>

        <p className="text-xs text-gray-400 text-center">
          Taxes and shipping calculated at checkout.
        </p>
      </CardContent>
    </Card>
  );
}
