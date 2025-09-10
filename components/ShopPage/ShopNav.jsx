

import CategoryDropdown from "./CategoryDropdown"
import { ChevronDown } from "lucide-react"

export default function ShopNav() {
  return (
    <div className="border-b border-gray-200 bg-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 text-gray-800">
        
        {/* Left: Browse Categories */}
        <CategoryDropdown />

        {/* Center: Main Menu */}
        <nav className="flex flex-1 justify-center gap-10 font-medium text-sm uppercase tracking-wide">
          <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">Home <ChevronDown className="w-4 h-4" /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">Shop <ChevronDown className="w-4 h-4" /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">Blog <ChevronDown className="w-4 h-4" /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">Pages <ChevronDown className="w-4 h-4" /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">Elements <ChevronDown className="w-4 h-4" /></a>
          <a href="#" className="hover:text-blue-500 transition-colors">Buy</a>
        </nav>

        {/* Right: Extra Links */}
        <div className="flex gap-6 font-medium text-sm uppercase tracking-wide">
          <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">Special Offer</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Purchase Theme</a>
        </div>
      </div>
    </div>
  )
}
