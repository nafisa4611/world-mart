"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"


export default function CategoryItem({ name, Icon, sub }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-gray-700" />
          <span>{name}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isHovered && (
        <div className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg rounded-md py-2 z-50">
          {sub.map((s) => (
            <a key={s} href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
              {s}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
