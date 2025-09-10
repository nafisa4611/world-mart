"use client"

export default function ProductIntro({ title, brand }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="border px-3 py-1 rounded-full text-sm bg-gray-50">
        {brand}
      </div>
    </div>
  )
}
