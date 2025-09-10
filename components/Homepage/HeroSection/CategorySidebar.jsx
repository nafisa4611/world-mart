"use client"

import { useState } from "react"
import {
  ChevronRight,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Gamepad2,
  Camera,
  Package,
  Sofa,
  ToyBrick,
  Book,
} from "lucide-react"

const categories = [
  { name: "Smartphones", icon: Smartphone, sub: ["Apple", "Samsung", "Xiaomi", "OnePlus", "Google Pixel"] },
  { name: "Laptops", icon: Laptop, sub: ["MacBook", "Dell", "HP", "Asus", "Lenovo"] },
  { name: "Headphones", icon: Headphones, sub: ["Sony", "Bose", "Beats", "Sennheiser"] },
  { name: "Smart Watches", icon: Watch, sub: ["Apple Watch", "Samsung Galaxy Watch", "Fitbit"] },
  { name: "Gaming", icon: Gamepad2, sub: ["PlayStation", "Xbox", "Nintendo Switch", "PC Gaming"] },
  { name: "Cameras", icon: Camera, sub: ["Canon", "Nikon", "Sony", "GoPro"] },
  { name: "Accessories", icon: Package, sub: ["Chargers", "Cables", "Power Banks", "Cases"] },
  { name: "Furniture", icon: Sofa, sub: ["Living Room", "Bedroom", "Office"] },
  { name: "Toys", icon: ToyBrick, sub: ["Lego", "Action Figures", "Board Games"] },
  { name: "Books", icon: Book, sub: ["Fiction", "Non-Fiction", "Comics", "Education"] },
]

export default function CategorySidebar() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="hidden md:block w-72 bg-white border-r shadow-sm relative">
      <ul className="divide-y divide-gray-100">
        {categories.map(({ name, icon: Icon, sub }) => (
          <li
            key={name}
            className="relative"
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Main Category */}
            <div
              className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-colors group ${
                hovered === name ? "bg-blue-600 text-white" : "hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    hovered === name ? "text-white" : "text-gray-500 group-hover:text-blue-600"
                  }`}
                />
                <span className="font-medium">{name}</span>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-200 ${
                  hovered === name ? "rotate-90 text-white" : "text-gray-400 group-hover:text-blue-600"
                }`}
              />
            </div>

            {/* Submenu (flyout to the right side) */}
            {hovered === name && sub && (
              <div className="absolute top-0 left-full w-64 bg-white border shadow-lg animate-fadeIn z-20 rounded-r-md">
                <ul className="divide-y divide-gray-100">
                  {sub.map((item) => (
                    <li
                      key={item}
                      className="px-4 py-3 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Animation keyframes */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}