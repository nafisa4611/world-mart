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
      <h2 className="text-2xl font-bold mb-6">Frequently Bought Together</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Products */}
        <div className="md:col-span-2 flex gap-4 overflow-x-auto">
          {bundle.map((item, i) => (
            <div
              key={i}
              className={`min-w-[150px] p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-lg ${
                selected[i] ? "bg-blue-50" : "bg-white"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-lg mb-3"
              />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selected[i]}
                  onChange={() =>
                    setSelected((prev) =>
                      prev.map((s, idx) => (idx === i ? !s : s))
                    )
                  }
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-sm font-medium">{item.title}</span>
              </label>
              <span className="mt-1 font-semibold text-gray-800">${item.price}</span>
            </div>
          ))}
        </div>

        {/* Bundle Summary */}
        <div className="border rounded-2xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-2">Bundle Summary</h3>
            <p className="text-gray-600 mb-1">
              {selected.filter(Boolean).length} item{selected.filter(Boolean).length > 1 ? "s" : ""} selected
            </p>
            <p className="font-bold text-xl mb-4">Total: ${total}</p>
          </div>
          <Button className="w-full py-3 cursor-pointer text-lg bg-teal-600 text-white hover:bg-teal-700">Add Selected to Cart</Button>
        </div>
      </div>
    </div>
  )
}
