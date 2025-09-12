"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PaymentMethods from "./PaymentMethods"

export default function OrderSummary() {
  const products = [
    { name: "iPhone 15 Pro", qty: 1, price: 999 },
    { name: "AirPods Pro", qty: 2, price: 499 },
  ]

  const subtotal = products.reduce((acc, p) => acc + p.price * p.qty, 0)
  const shipping = 20
  const total = subtotal + shipping

  return (
    <Card className="border rounded-2xl shadow-lg hover:shadow-2xl transition p-6 bg-white">
      <CardHeader className="pb-4 border-b border-gray-200">
        <CardTitle className="text-xl font-bold text-gray-800">Your order</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Product List */}
        <div className="space-y-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition"
            >
              <span className="text-gray-700">{product.name} x{product.qty}</span>
              <span className="font-medium text-gray-900">${product.price * product.qty}</span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="pt-4 border-t border-gray-200">
          <PaymentMethods />
        </div>

        {/* Place Order Button */}
        <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 shadow-md transition rounded-lg py-3 text-lg font-semibold">
          Place Order
        </Button>
      </CardContent>
    </Card>
  )
}
