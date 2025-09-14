"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Eye, Repeat } from "lucide-react"
import products from "@/data/products.json"

export default function ProductShowcase() {
  // --- Tabs ---
  const tabs = ["NEW", "FEATURED", "TOPSELLERS"]
  const [activeTab, setActiveTab] = useState("NEW") // default to NEW

  // --- Dynamic badge colors ---
  const badgeColors = {
    "New": "bg-green-500",
    "Hot": "bg-red-500",
    "-15%": "bg-yellow-500",
    "-20%": "bg-yellow-600",
    "-25%": "bg-yellow-700",
  }

  // --- Filtered products based on active tab ---
  const displayedProducts = products.filter(p => p.category === activeTab)

  // --- Placeholder actions ---
  const handleFavorite = (p) => console.log("Favorite:", p.name)
  const handleView = (p) => console.log("View:", p.name)
  const handleCompare = (p) => console.log("Compare:", p.name)
  const handleAddToCart = (p) => console.log("Add to Cart:", p.name)

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* --- Tabs --- */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-6 mb-12">
        <div className="flex items-center gap-10">
          <h2 className="text-3xl font-bold tracking-wide">✨ Electronics</h2>
          <div className="flex gap-3 bg-gray-100 rounded-full p-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all 
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
      </div>

      {/* --- Product Grid --- */}
      <div className="rounded-3xl shadow-2xl p-6 bg-white/60 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map(p => (
            <div key={p.id + p.category} className="group relative rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden">

              {/* Badge */}
              {p.label && (
                <span className={`absolute top-3 left-3 z-10 text-white text-xs font-bold px-2 py-1 rounded-full shadow ${badgeColors[p.label] || "bg-gray-500"}`}>
                  {p.label}
                </span>
              )}

              {/* Image */}
              <div className="relative h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
                <Image src={p.img} alt={p.name} fill className="object-cover h-64 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all" />
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <button onClick={() => handleFavorite(p)} className="p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-primary hover:text-white transition"><Heart className="w-4 h-4" /></button>
                  <button onClick={() => handleView(p)} className="p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-primary hover:text-white transition"><Eye className="w-4 h-4" /></button>
                  <button onClick={() => handleCompare(p)} className="p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-primary hover:text-white transition"><Repeat className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-800 truncate">{p.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <p className="text-lg text-primary font-bold">${p.price}</p>
                  {p.oldPrice && <p className="text-gray-400 line-through text-sm">${p.oldPrice}</p>}
                </div>
                <Button size="sm" className="mt-4 w-full rounded-full bg-gradient-to-r from-blue-700 to-indigo-900 text-white hover:scale-105 hover:shadow-lg transition" onClick={() => handleAddToCart(p)}>
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
