"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function OrderSummary({ cart, subtotal, shipping, discount, total, placeOrder, loading, message }) {
  return (
    <Card className="border rounded-2xl shadow-lg p-6 bg-white">
      <CardHeader className="pb-4 border-b border-gray-200">
        <CardTitle className="text-xl font-bold text-gray-800">Your order</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Product List */}
        <div className="space-y-3">
          {cart.map((product) => (
            <div
              key={product.id + "-" + product.category}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50"
            >
              <Link href={`/product/${product.id}`} className="flex items-center gap-3">
                <img
                  src={product.img || "/placeholder.png"}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <span className="text-gray-700 hover:text-blue-600 transition">
                  {product.title} ×{product.quantity}
                </span>
              </Link>
              <span className="font-medium text-gray-900">
                ${product.price * product.quantity}
              </span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${subtotal}</span></div>
          <div className="flex justify-between text-gray-600"><span>Shipping</span><span>${shipping}</span></div>
          <div className="flex justify-between text-gray-600"><span>Discount</span><span>${(subtotal * discount) / 100}</span></div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200"><span>Total</span><span>${total}</span></div>
        </div>

        {/* Place Order Button */}
        <Button
          className="w-full mt-4 bg-blue-600 text-white"
          onClick={placeOrder}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </Button>
        {message && <p className="text-sm text-center mt-2 text-red-500">{message}</p>}

      </CardContent>
    </Card>
  )
}
