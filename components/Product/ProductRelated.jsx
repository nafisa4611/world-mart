

import Image from "next/image"

export default function ProductRelated({ products }) {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold mb-6">Related Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map((p, i) => (
          <div key={i} className="border rounded-lg p-3 text-center relative hover:shadow-md transition">
            {p.badge && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {p.badge}
              </span>
            )}
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
