"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CartTotals({ subtotal = 100 }) {
  const shippingOptions = [
    { label: "Flat rate", amount: 20 },
    { label: "Local pickup", amount: 25 },
  ]

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

        {/* Shipping */}
        <div className="space-y-3">
          <p className="font-semibold text-gray-800">Shipping</p>
          <div className="space-y-2">
            {shippingOptions.map((option, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 cursor-pointer p-3 border rounded-lg hover:border-blue-400 transition"
              >
                <input
                  type="radio"
                  name="shipping"
                  className="accent-blue-600 w-5 h-5"
                  defaultChecked={idx === 0}
                />
                <span className="text-gray-700">{option.label} — ${option.amount.toFixed(2)}</span>
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500">Shipping to USA.</p>
          <button className="text-blue-600 font-medium text-sm hover:underline">
            Change address
          </button>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center font-bold text-2xl text-gray-900 border-t border-gray-200 pt-4">
          <span>Total</span>
          <span>${(subtotal + shippingOptions[0].amount).toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <Button className="w-full py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          Proceed to Checkout
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Taxes and shipping calculated at checkout.
        </p>
      </CardContent>
    </Card>
  )
}
