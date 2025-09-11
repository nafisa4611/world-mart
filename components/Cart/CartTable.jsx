"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CartTable({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="mb-4">Your cart is currently empty.</p>
        <Button asChild>
          <a href="/shop">Return to Shop</a>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <table className="w-full text-left border-collapse">
        <thead className="border-b">
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td>
                <button className="text-red-500">×</button>
              </td>
              <td className="flex items-center gap-2 py-4">
                <Image src={item.image} alt={item.name} width={48} height={48} className="rounded" />
                <span>{item.name}</span>
              </td>
              <td>${item.price}</td>
              <td>
                <div className="flex items-center border rounded">
                  <button className="px-2">−</button>
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center border-x"
                  />
                  <button className="px-2">+</button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-4 mt-4">
        <input type="text" placeholder="Coupon code" className="border p-2 flex-1 rounded" />
        <Button>Apply Coupon</Button>
        <Button variant="outline">Update Cart</Button>
      </div>
    </div>
  )
}
