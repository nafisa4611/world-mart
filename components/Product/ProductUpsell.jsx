"use client"

import Image from "next/image"

export default function ProductUpsell({ products }) {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold mb-6">You may also like…</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="border rounded-lg p-3 text-center hover:shadow-md transition">
            <Image
              src={p.image}
              alt={p.title}
              width={200}
              height={200}
              className="mx-auto rounded-lg"
            />
            <h3 className="mt-3 font-medium">{p.title}</h3>
            <p className="text-gray-500 text-sm">{p.category}</p>
            <p className="text-blue-600 font-bold mt-1">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
