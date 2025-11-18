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
  Menu,
  X,
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

export default function ShopCategorySidebar() {
  const [hovered, setHovered] = useState(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        className="md:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 text-white"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-5 h-5" />
        Browse Categories
      </button>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block w-72 bg-white border-r shadow-sm relative">
        <SidebarContent hovered={hovered} setHovered={setHovered} />
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* DARK BACKDROP */}
          <div
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>

          {/* SLIDE PANEL */}
          <div className="w-72 min-w-[70%] bg-white h-full shadow-xl border-r animate-slideIn">
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="font-semibold text-gray-800 uppercase">Categories</span>
              <X className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)} />
            </div>

            <SidebarContent hovered={hovered} setHovered={setHovered} mobile />
          </div>

          <style jsx>{`
            .animate-slideIn {
              animation: slideIn 0.3s ease-out;
            }
            @keyframes slideIn {
              from {
                transform: translateX(-100%);
              }
              to {
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  )
}

/* Shared Component */
function SidebarContent({ hovered, setHovered, mobile }) {
  return (
    <ul className="divide-y divide-gray-100">
      {categories.map(({ name, icon: Icon, sub }) => (
        <li
          key={name}
          className="relative"
          onMouseEnter={!mobile ? () => setHovered(name) : undefined}
          onMouseLeave={!mobile ? () => setHovered(null) : undefined}
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

          {/* Desktop hover flyout */}
          {!mobile && hovered === name && sub && (
            <div className="absolute top-0 left-full w-64 bg-white border shadow-lg animate-fadeIn z-50 rounded-r-md">
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

          {/* Mobile sub category list */}
          {mobile && (
            <ul className="bg-gray-50">
              {sub.map((item) => (
                <li
                  key={item}
                  className="px-6 py-3 border-b hover:bg-blue-600 hover:text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
