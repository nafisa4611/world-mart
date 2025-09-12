"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Heart, Repeat, Ruler, Share2 } from "lucide-react"

export default function ProductBuyBox({ product, imageHeight = 400 }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div
      className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col justify-between"
      style={{ height: imageHeight }}
    >
      <div className="space-y-3">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-teal-600">${product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
          )}
        </div>

        {/* Short Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{product.shortDesc}</p>

        {/* Product Attributes */}
        {product.attributes?.length > 0 && (
          <ul className="text-xs text-gray-600 space-y-1">
            {product.attributes.map((attr, i) => (
              <li
                key={i}
                className="flex items-center before:content-['•'] before:text-teal-600 before:mr-1"
              >
                {attr}
              </li>
            ))}
          </ul>
        )}

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="hover:bg-gray-100 transition"
            >
              <Minus className="w-3 h-3 text-gray-600" />
            </Button>
            <Input
              value={quantity}
              readOnly
              className="w-10 text-center border-none text-gray-700 font-medium text-sm"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="hover:bg-gray-100 transition"
            >
              <Plus className="w-3 h-3 text-gray-600" />
            </Button>
          </div>
          <Button className="flex-1 cursor-pointer bg-teal-600 text-white hover:bg-teal-700 rounded-lg py-2 text-sm font-medium shadow-sm">
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Secondary Actions & Meta */}
      <div className="space-y-3 mt-4">
        <div className="flex flex-wrap gap-3 text-gray-500 text-xs">
          <button className="flex items-center cursor-pointer gap-1 hover:text-teal-600 transition">
            <Repeat className="w-4 h-4" /> Compare
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition">
            <Heart className="w-4 h-4" /> Wishlist
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition">
            <Ruler className="w-4 h-4" /> Size Guide
          </button>
        </div>

        <div className="text-xs text-gray-500 space-y-1 border-t border-gray-100 pt-2">
          <p><span className="font-medium">SKU:</span> {product.sku}</p>
          <p><span className="font-medium">Category:</span> {product.category}</p>
          <p><span className="font-medium">Tags:</span> {product.tags.join(", ")}</p>
        </div>

        <div className="flex gap-3 text-gray-400 pt-1">
          <Share2 className="w-4 h-4 cursor-pointer hover:text-teal-600 transition" />
        </div>
      </div>
    </div>
  )
}
