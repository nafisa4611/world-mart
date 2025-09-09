"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Heart, Search } from "lucide-react"

// Featured products for left column
const featuredProducts = [
  { id: 1, name: "Smart Lamp", image: "/products/lamp.jpg", price: 49, description: "Energy saving LED lamp" },
  { id: 2, name: "Robot Vacuum", image: "/products/vacuum.jpg", price: 299, description: "Automatic floor cleaning" },
  { id: 3, name: "Smart Door Lock", image: "/products/doorlock.jpg", price: 149, description: "Secure your home" },
  { id: 4, name: "Smart Speaker", image: "/products/speaker2.jpg", price: 79, description: "High-quality audio" },
]

// Tabbed products for right column
const tabProducts = [
  { id: 1, name: "Smart Watch", image: "/products/watch.jpg", price: 199, description: "Track your fitness" },
  { id: 2, name: "Headphones", image: "/products/headphones2.jpg", price: 129, description: "Wireless high-quality sound" },
  { id: 3, name: "Smart Thermostat", image: "/products/thermostat.jpg", price: 129, description: "Control your home temperature" },
  { id: 4, name: "Smart Plug", image: "/products/plug.jpg", price: 19, description: "Remote control your appliances" },
  { id: 5, name: "Security Camera", image: "/products/camera.jpg", price: 99, description: "Monitor your home" },
  { id: 6, name: "Smart Lamp", image: "/products/lamp.jpg", price: 49, description: "Energy saving LED lamp" },
]

export default function SecondaryProductZone() {
  const [activeTab, setActiveTab] = useState("NEW")

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left Column */}
      <div className="lg:col-span-4 shadow-xl flex flex-col gap-4 w-full h-150">
        {/* Google Smart Home Banner */}
        <div
          className="h-64 relative flex flex-col justify-center items-center shadow-2xl text-center text-white overflow-hidden w-full rounded-lg"
          style={{
            backgroundImage: "url('/google-smart-home.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="relative z-10 px-4">
            <h3 className="text-3xl font-bold mb-2 drop-shadow-md">Google Smart Home 2024</h3>
            <p className="mb-4 text-lg drop-shadow-sm">Upgrade your home with the latest smart devices.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-white shadow-md">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-white rounded-lg p-4 shadow-2xl w-full flex-1 flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 text-center">Featured Products</h4>
          <div className="grid grid-cols-1 divide-y divide-gray-200 border border-gray-200 rounded h-full">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center text-center">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-red-600 font-bold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-8 flex flex-col shadow-xl gap-2 w-full">
        {/* Tabs */}
        <div className="flex gap-4 mt-2 mb-4 border-b">
          {["NEW", "FEATURED", "SALES"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {tabProducts.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-lg overflow-hidden shadow-2xl group bg-white hover:shadow-lg transition-shadow duration-300 w-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4">
                  <div className="text-white text-center">
                    <h4 className="font-bold text-lg">{product.name}</h4>
                    <p className="text-sm mt-1">{product.description}</p>
                    <p className="text-red-500 font-bold mt-1">${product.price}</p>
                  </div>
                  <div className="flex gap-2 mt-4 justify-center">
                    <Button className="bg-blue-600 text-white py-2 px-4 text-sm rounded">Add to Cart</Button>
                    <button className="bg-white text-red-600 p-2 rounded hover:bg-red-600 hover:text-white transition-colors">
                      <Heart size={16} />
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded hover:bg-gray-800 hover:text-white transition-colors">
                      <Search size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
