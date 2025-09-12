"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col">
      {/* Main Image */}
      <div className="aspect-square relative rounded-2xl overflow-hidden shadow-md mb-4 border border-gray-200">
        <Image
          src={images[selected]}
          alt={`Product Image ${selected + 1}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-transform duration-200
              ${selected === i ? "border-blue-600 scale-105 shadow-lg" : "border-gray-200 hover:scale-105"}
            `}
            onClick={() => setSelected(i)}
          >
            <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
