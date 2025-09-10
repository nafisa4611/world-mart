"use client"

import { useState } from "react"
import { ShoppingCart, Eye, Heart, Repeat, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = {
  NEW: [
    { id: 1, name: "Smartphone X", price: 799, oldPrice: 899, label: "New", img: "/prod-phone.jpg" },
    { id: 2, name: "Laptop Pro", price: 1299, oldPrice: 1499, label: "-15%", img: "/prod-laptop.jpg" },
    { id: 3, name: "Wireless Headphones", price: 199, label: "Hot", img: "/prod-headphone.jpg" },
    { id: 4, name: "Smart Watch", price: 299, label: "New", img: "/prod-watch.jpg" },
    { id: 5, name: "Gaming Console", price: 499, oldPrice: 599, label: "-20%", img: "/prod-console.jpg" },
    { id: 6, name: "4K Camera", price: 899, img: "/prod-camera.jpg" },
    { id: 7, name: "VR Headset", price: 399, label: "Hot", img: "/prod-vr.jpg" },
    { id: 8, name: "Bluetooth Speaker", price: 149, oldPrice: 199, label: "-25%", img: "/prod-speaker.jpg" },
  ],
  FEATURED: [
    { id: 2, name: "Laptop Pro", price: 1299, oldPrice: 1499, label: "-15%", img: "/prod-laptop.jpg" },
    { id: 3, name: "Wireless Headphones", price: 199, label: "Hot", img: "/prod-headphone.jpg" },
    { id: 4, name: "Smart Watch", price: 299, label: "New", img: "/prod-watch.jpg" },
    { id: 6, name: "4K Camera", price: 899, img: "/prod-camera.jpg" },
    { id: 7, name: "VR Headset", price: 399, label: "Hot", img: "/prod-vr.jpg" },
    { id: 8, name: "Bluetooth Speaker", price: 149, oldPrice: 199, label: "-25%", img: "/prod-speaker.jpg" },
    { id: 1, name: "Smartphone X", price: 799, oldPrice: 899, label: "New", img: "/prod-phone.jpg" },
    { id: 5, name: "Gaming Console", price: 499, oldPrice: 599, label: "-20%", img: "/prod-console.jpg" },
  ],
  TOPSELLERS: [
    { id: 4, name: "Smart Watch", price: 299, label: "New", img: "/prod-watch.jpg" },
    { id: 6, name: "4K Camera", price: 899, img: "/prod-camera.jpg" },
    { id: 7, name: "VR Headset", price: 399, label: "Hot", img: "/prod-vr.jpg" },
    { id: 2, name: "Laptop Pro", price: 1299, oldPrice: 1499, label: "-15%", img: "/prod-laptop.jpg" },
    { id: 3, name: "Wireless Headphones", price: 199, label: "Hot", img: "/prod-headphone.jpg" },
    { id: 8, name: "Bluetooth Speaker", price: 149, oldPrice: 199, label: "-25%", img: "/prod-speaker.jpg" },
    { id: 1, name: "Smartphone X", price: 799, oldPrice: 899, label: "New", img: "/prod-phone.jpg" },
    { id: 5, name: "Gaming Console", price: 499, oldPrice: 599, label: "-20%", img: "/prod-console.jpg" },
  ],
}

export default function ProductShowcase() {
  const tabs = ["NEW", "FEATURED", "TOPSELLERS"]
  const [activeTab, setActiveTab] = useState("NEW")

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-6 mb-12">
        <div className="flex items-center gap-10">
          <h2 className="text-3xl font-bold tracking-wide">✨ Electronics</h2>
          <div className="flex gap-3 bg-gray-100 rounded-full p-1">
            {tabs.map((tab) => (
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

        {/* Nav Arrows */}
        <div className="flex gap-3">
          {[ChevronLeft, ChevronRight].map((Icon, i) => (
            <button
              key={i}
              className="p-2 rounded-full backdrop-blur-md bg-white/70 border 
                         shadow hover:bg-primary hover:text-white transition"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="rounded-3xl shadow-2xl p-6 bg-white/60 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ">
          {products[activeTab].map((p) => (
            <div
              key={p.id}
              className="group relative rounded-2xl bg-white border border-gray-100 
                   shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                   transition-all duration-500 overflow-hidden"
            >

              {/* Badge */}
              {p.label && (
                <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                  {p.label}
                </span>
              )}

              {/* Product Image */}
              <div className="relative h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover h-64 transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all" />
                {/* Hover Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 translate-x-4 
                              group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  {[Heart, Eye, Repeat].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="p-2 bg-white/80 backdrop-blur rounded-full shadow 
                               hover:bg-primary hover:text-white transition"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-800 truncate">{p.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <p className="text-lg text-primary font-bold">${p.price}</p>
                  {p.oldPrice && (
                    <p className="text-gray-400 line-through text-sm">${p.oldPrice}</p>
                  )}
                </div>

                {/* Add to Cart */}
                <Button
                  size="sm"
                  className="mt-4 w-full rounded-full bg-gradient-to-r from-blue-700 to-indigo-900 
                           text-white hover:scale-105 hover:shadow-lg transition"
                >
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
