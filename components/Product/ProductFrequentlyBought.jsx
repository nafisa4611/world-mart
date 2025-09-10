"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProductFrequentlyBought({ bundle }) {
  const [selected, setSelected] = useState(bundle.map(() => true))

  const total = bundle.reduce(
    (acc, item, i) => acc + (selected[i] ? item.price : 0),
    0
  )

  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold mb-6">Frequently Bought Together</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex gap-4 overflow-x-auto">
          {bundle.map((item, i) => (
            <div key={i} className="min-w-[150px] text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-lg mb-2"
              />
              <input
                type="checkbox"
                checked={selected[i]}
                onChange={() =>
                  setSelected((prev) =>
                    prev.map((s, idx) => (idx === i ? !s : s))
                  )
                }
              />{" "}
              {item.title} – ${item.price}
            </div>
          ))}
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-medium mb-2">Bundle Summary</h3>
          <p className="mb-2 text-gray-600">
            {selected.filter(Boolean).length} items selected
          </p>
          <p className="font-bold text-lg mb-4">Total: ${total}</p>
          <Button className="w-full">Add Selected to Cart</Button>
        </div>
      </div>
    </div>
  )
}
