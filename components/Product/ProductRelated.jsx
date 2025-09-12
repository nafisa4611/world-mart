"use client"

import Image from "next/image"

export default function ProductRelated({ products }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Related Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-100 rounded-3xl p-5 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
          >
            {/* Badge */}
            {p.badge && (
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {p.badge}
                </span>
              </div>
            )}

            {/* Product Image */}
            <div className="relative w-full h-44 mb-4 rounded-2xl overflow-hidden">
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
          </div>
        ))}
      </div>
    </div>
  )
}
