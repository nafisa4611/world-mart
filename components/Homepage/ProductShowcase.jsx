"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Eye, Repeat } from "lucide-react"
import products from "@/data/products.json"
import { useApp } from "@/context/AppContext"
import { useRouter } from "next/navigation"

export default function ProductShowcase() {
  const tabs = ["NEW", "FEATURED", "TOPSELLERS"]
  const [activeTab, setActiveTab] = useState("NEW")

  const badgeColors = {
    "New": "bg-green-500",
    "Hot": "bg-red-500",
    "-15%": "bg-yellow-500",
    "-20%": "bg-yellow-600",
    "-25%": "bg-yellow-700",
  }

  const displayedProducts = products.filter(p => p.category === activeTab)

  const { addToCart, user } = useApp()
  const router = useRouter()

  const handleAddToCart = (p) => {
    if (!user) {
      router.push("/login")
      return
    }
    addToCart(p)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Tabs Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-6 mb-10">
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
          ✨ Electronics
        </h2>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar bg-gray-100 rounded-full p-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 whitespace-nowrap rounded-full text-sm font-semibold transition-all
                ${activeTab === tab
                  ? "bg-white shadow text-primary"
                  : "text-gray-500 hover:text-primary"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Container */}
      <div className="rounded-3xl p-4 sm:p-6 bg-white shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">

          {displayedProducts.map(p => (
            <div
              key={p.id}
              className="group relative rounded-xl bg-white border border-gray-100 shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              {p.label && (
                <span
                  className={`absolute top-2 left-2 z-10 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow ${badgeColors[p.label]}`}
                >
                  {p.label}
                </span>
              )}

              {/* Product Image */}
              <div className="relative h-40 sm:h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover opacity overlay (ignored on mobile) */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all lg:block hidden" />

                {/* Hover icons (desktop only) */}
                <div className="absolute top-3 right-3 flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden lg:flex">
                  <button className="p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-primary hover:text-white transition">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-primary hover:text-white transition">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-primary hover:text-white transition">
                    <Repeat className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
                  {p.title}
                </h3>

                <div className="flex items-center justify-center gap-2 mt-1">
                  <p className="text-base sm:text-lg text-primary font-bold">${p.price}</p>
                  {p.oldPrice && (
                    <p className="text-xs sm:text-sm text-gray-400 line-through">${p.oldPrice}</p>
                  )}
                </div>

                <Button
                  size="sm"
                  className="mt-3 w-full rounded-full bg-gradient-to-r from-blue-700 to-indigo-900 text-white shadow hover:scale-[1.03] transition"
                  onClick={() => handleAddToCart(p)}
                >
                  <ShoppingCart className="w-4 h-4 mr-1.5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
