

import { Menu, ChevronDown, Smartphone, Laptop, Headphones, Watch, Gamepad2, Camera, Package, Sofa, ToyBrick, Book } from "lucide-react"
import CategoryItem from "./CategoryItem"

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

export default function CategoryDropdown() {
  return (
    <div className="relative group">
      <button className="flex items-center bg-blue-500 text-white font-semibold h-16 w-64">
        <div className="flex items-center justify-between w-full px-5">
          <Menu className="w-5 h-5" />
          <span className="flex-1 text-left uppercase tracking-wide">Browse Categories</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <div className="absolute left-0 mt-2 hidden group-hover:block w-64 bg-white shadow-lg rounded-md py-2 z-50">
        {categories.map((category) => (
          <CategoryItem 
            key={category.name} 
            name={category.name} 
            Icon={category.icon} 
            sub={category.sub} 
          />
        ))}
      </div>
    </div>
  )
}
