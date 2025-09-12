"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"

export default function CartTable({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-2xl shadow-md max-w-xl mx-auto">
        <p className="mb-6 text-gray-600 text-lg font-medium">Your cart is currently empty.</p>
        <Button asChild className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
          <a href="/shop">Return to Shop</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-lg p-6">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="border-b border-gray-200">
          <tr className="text-gray-500 text-sm uppercase">
            <th className="py-3"></th>
            <th className="py-3">Product</th>
            <th className="py-3">Price</th>
            <th className="py-3">Quantity</th>
            <th className="py-3">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
              <td className="py-4">
                <button className="text-red-500 hover:text-red-600">
                  <X size={18} />
                </button>
              </td>
              <td className="flex items-center gap-4 py-4">
                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-lg object-cover" />
                <span className="font-medium text-gray-700">{item.name}</span>
              </td>
              <td className="py-4 text-gray-700">${item.price.toFixed(2)}</td>
              <td className="py-4">
                <div className="flex items-center border rounded-full overflow-hidden w-max">
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center border-x border-gray-200 text-gray-700"
                  />
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">
                    <Plus size={16} />
                  </button>
                </div>
              </td>
              <td className="py-4 font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col md:flex-row gap-4 mt-6 items-center">
        <input
          type="text"
          placeholder="Coupon code"
          className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg transition">
          Apply Coupon
        </Button>
        <Button variant="outline" className="px-6 py-3 rounded-full">
          Update Cart
        </Button>
      </div>
    </div>
  )
}
