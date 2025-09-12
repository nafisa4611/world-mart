"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SuggestedProducts({ products }) {
  if (!products || products.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">You may also like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <p className="text-gray-700 font-medium truncate">{p.name}</p>
            <p className="text-gray-900 font-semibold mt-1">${p.price}</p>
            <Button
              size="sm"
              className="mt-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg transition"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
