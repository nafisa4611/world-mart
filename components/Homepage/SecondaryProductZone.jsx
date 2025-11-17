"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Heart, Search } from "lucide-react"

const featuredProducts = [
  { id: 1, name: "Smart Lamp", image: "/products/lamp.jpg", price: 49 },
  { id: 2, name: "Robot Vacuum", image: "/products/vacuum.jpg", price: 299 },
  { id: 3, name: "Smart Door Lock", image: "/products/doorlock.jpg", price: 149 },
  { id: 4, name: "Smart Speaker", image: "/products/speaker2.jpg", price: 79 },
]

const tabProducts = [
  { id: 1, name: "Smart Watch", image: "/products/watch.jpg", price: 199 },
  { id: 2, name: "Headphones", image: "/products/headphones2.jpg", price: 129 },
  { id: 3, name: "Smart Thermostat", image: "/products/thermostat.jpg", price: 129 },
  { id: 4, name: "Smart Plug", image: "/products/plug.jpg", price: 19 },
  { id: 5, name: "Security Camera", image: "/products/camera.jpg", price: 99 },
  { id: 6, name: "Smart Lamp", image: "/products/lamp.jpg", price: 49 },
]

export default function SecondaryProductZone() {
  const [activeTab, setActiveTab] = useState("NEW")

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 py-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
      
      {/* LEFT COLUMN */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        
        {/* Google Smart Banner */}
        <div
          className="relative h-48 sm:h-64 rounded-lg shadow-xl flex items-center justify-center overflow-hidden text-white"
          style={{
            backgroundImage: "url('/google-smart-home.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="relative text-center px-3 sm:px-6 max-w-xs">
            <h3 className="text-lg sm:text-2xl font-bold leading-tight">
              Google Smart Home 2024
            </h3>
            <p className="text-xs sm:text-sm mt-2 opacity-90">
              Upgrade your home with the latest smart devices.
            </p>
            <Button className="mt-3 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-4 py-1.5">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-white rounded-lg p-4 sm:p-5 shadow-xl">
          <h4 className="text-lg sm:text-xl font-semibold text-center mb-4">Featured Products</h4>
          <div className="grid divide-y rounded border">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-3 py-2 px-1 hover:bg-gray-50">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image src={product.image} alt={product.name} fill className="rounded object-cover" />
                </div>

                <div className="flex-1 text-center">
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-red-600 font-bold text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="lg:col-span-8 flex flex-col shadow-xl rounded-lg p-3 sm:p-4 bg-white">
        
        {/* Tabs */}
        <div className="flex gap-4 border-b mb-4">
          {["NEW", "FEATURED", "SALES"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 text-sm sm:text-base font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4">
          {tabProducts.map((product) => (
            <div
              key={product.id}
              className="relative rounded-lg overflow-hidden border shadow-md group bg-white"
            >
              <div className="relative h-40 sm:h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Hover overlay for desktop only */}
                <div className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex-col p-3 justify-between">
                  <div className="text-white text-center">
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <p className="text-red-400 font-bold mt-1 text-sm">${product.price}</p>
                  </div>

                  <div className="flex gap-2 justify-center">
                    <Button size="sm" className="bg-blue-600 text-white px-3 py-1 text-xs">
                      Add to Cart
                    </Button>
                    <button className="bg-white p-1 rounded text-red-600 hover:bg-red-600 hover:text-white">
                      <Heart size={14} />
                    </button>
                    <button className="bg-white p-1 rounded hover:bg-gray-800 hover:text-white">
                      <Search size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile product info */}
              <div className="p-2 sm:hidden text-center">
                <p className="text-sm font-medium truncate">{product.name}</p>
                <p className="text-red-600 text-sm font-bold mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
