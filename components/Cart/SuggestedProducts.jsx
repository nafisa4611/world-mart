"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SuggestedProducts({ products }) {
  if (!products || products.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="text-lg font-bold mb-4">You may also like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 text-center rounded">
            <Image src={p.image} alt={p.name} width={96} height={96} className="mx-auto" />
            <p className="mt-2">{p.name}</p>
            <p className="font-semibold">${p.price}</p>
            <Button size="sm" className="mt-2">Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
