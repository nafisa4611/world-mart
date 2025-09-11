"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CartTotals({ subtotal = 100 }) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Cart Totals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">Shipping</p>
          <label className="flex items-center gap-2">
            <input type="radio" name="shipping" /> Flat rate $20.00
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="shipping" /> Local pickup $25.00
          </label>
          <p className="text-sm mt-2">Shipping to USA.</p>
          <button className="text-primary text-sm underline">Change address</button>
        </div>

        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span>${subtotal + 20}</span>
        </div>

        <Button className="w-full">Proceed to Checkout</Button>
        <p className="text-xs text-gray-500 mt-2">
          Taxes and shipping calculated at checkout.
        </p>
      </CardContent>
    </Card>
  )
}
