"use client"

import Image from "next/image"

export default function ProductGallery({ images }) {
  return (
    <div>
      <div className="aspect-square relative border rounded-lg overflow-hidden mb-4">
        <Image src={images[0]} alt="Main Product" fill className="object-cover" />
      </div>
      <div className="flex gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-20 h-20 border rounded-lg overflow-hidden cursor-pointer"
          >
            <Image src={img} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
