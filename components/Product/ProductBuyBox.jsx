"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Heart, Repeat, Ruler, Share2 } from "lucide-react"

export default function ProductBuyBox({ product }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      {/* Price */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-bold text-blue-600">${product.price}</span>
        {product.oldPrice && (
          <span className="line-through text-gray-400">${product.oldPrice}</span>
        )}
      </div>

      {/* Short Desc */}
      <p className="text-gray-600 mb-4">{product.shortDesc}</p>

      {/* Attributes */}
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {product.attributes.map((attr, i) => (
          <li key={i}>{attr}</li>
        ))}
      </ul>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center border rounded-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <Input value={quantity} readOnly className="w-12 text-center border-none" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <Button className="flex-1">Add to Cart</Button>
      </div>

      {/* Secondary Actions */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <button className="flex items-center gap-1 hover:text-blue-600">
          <Repeat className="w-4 h-4" /> Compare
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <Heart className="w-4 h-4" /> Wishlist
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <Ruler className="w-4 h-4" /> Size Guide
        </button>
      </div>

      {/* Meta */}
      <div className="text-sm text-gray-500 space-y-1 mb-4">
        <p><span className="font-medium">SKU:</span> {product.sku}</p>
        <p><span className="font-medium">Category:</span> {product.category}</p>
        <p><span className="font-medium">Tags:</span> {product.tags.join(", ")}</p>
      </div>

      {/* Share */}
      <div className="flex gap-3 text-gray-500">
        <Share2 className="w-5 h-5 cursor-pointer hover:text-blue-600" />
      </div>
    </div>
  )
}
