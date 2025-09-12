"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductUpsell({ products }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900">
        You may also like…
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="relative bg-white bg-opacity-80 backdrop-blur-md border border-gray-100 rounded-3xl p-5 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-52 mb-4 rounded-2xl overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-semibold text-gray-900 text-lg">{p.title}</h3>
            <p className="text-gray-500 text-sm">{p.category}</p>
            <p className="text-blue-600 font-bold mt-2 text-xl">${p.price}</p>
            <Button
              size="sm"
              className="mt-4 cursor-pointer w-full bg-teal-600 text-white hover:bg-teal-700 transition-all"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
