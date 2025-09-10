"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/hot-headphones.jpg",
    oldPrice: 199,
    discountedPrice: 129,
    dealEnd: "2025-09-15T23:59:59",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/hot-smartwatch.jpg",
    oldPrice: 249,
    discountedPrice: 179,
    dealEnd: "2025-09-15T23:59:59",
  },
  {
    id: 3,
    name: "Portable Speaker",
    image: "/hot-speaker.jpg",
    oldPrice: 99,
    discountedPrice: 59,
    dealEnd: "2025-09-15T23:59:59",
  },
]

export default function TodayHotDeals() {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = {}
      products.forEach((product) => {
        const distance = new Date(product.dealEnd).getTime() - new Date().getTime()
        if (distance > 0) {
          const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
          const minutes = Math.floor((distance / (1000 * 60)) % 60)
          const seconds = Math.floor((distance / 1000) % 60)
          updated[product.id] = { h: hours, m: minutes, s: seconds }
        } else {
          updated[product.id] = { h: 0, m: 0, s: 0 }
        }
      })
      setTimeLeft(updated)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (num) => String(num).padStart(2, "0")

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 border-b pb-2">Today Hot Deals</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div key={product.id} className="border shadow-2xl overflow-hidden rounded-lg group flex flex-col items-center text-center">
            {/* Product Image with hover */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Add to Cart full-width button */}
              <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button className="w-full bg-blue-600 text-white py-2 rounded-none">
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-center items-center gap-2 my-2">
                <span className="text-red-600 font-bold">${product.discountedPrice}</span>
                <span className="line-through text-gray-400">${product.oldPrice}</span>
              </div>

              {/* Fancy Timer centered */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="bg-gray-200 text-black px-3 py-1 rounded-md text-center shadow-md">
                  {formatTime(timeLeft[product.id]?.h || 0)}h
                </div>
                <div className="bg-gray-200 text-black px-3 py-1 rounded-md text-center shadow-md">
                  {formatTime(timeLeft[product.id]?.m || 0)}m
                </div>
                <div className="bg-gray-200 text-black px-3 py-1 rounded-md text-center shadow-md">
                  {formatTime(timeLeft[product.id]?.s || 0)}s
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Deals Button */}
      <div className="flex justify-center mt-10">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg">
          View All Deals
        </Button>
      </div>
    </section>
  )
}
