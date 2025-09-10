

import { Clock, Lightbulb, Sofa, Package, CookingPot, ToyBrick } from "lucide-react"
import Link from "next/link"

const shortcuts = [
  { name: "Clocks", icon: Clock, count: 12 },
  { name: "Lighting", icon: Lightbulb, count: 17 },
  { name: "Furniture", icon: Sofa, count: 33 },
  { name: "Accessories", icon: Package, count: 12 },
  { name: "Cooking", icon: CookingPot, count: 12 },
  { name: "Toys", icon: ToyBrick, count: 12 },
]

export default function ShopHero({ title = "Shop", category }) {
  return (
    <section
      className="relative bg-black text-white py-20"
      style={{
        backgroundImage: `url('/shop-hero-bg.jpg')`, // replace with dynamic category bg
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-bold mb-10">{category || title}</h1>
        
        {/* Shortcuts */}
        <div className="flex flex-wrap justify-center gap-12">
          {shortcuts.map(({ name, icon: Icon, count }) => (
            <Link
              key={name}
              href={`/shop/${name.toLowerCase()}`}
              className="flex flex-col items-center text-center group"
            >
              <Icon className="w-10 h-10 mb-2 text-white group-hover:text-blue-400 transition-colors" />
              <span className="font-semibold uppercase">{name}</span>
              <span className="text-gray-300 text-sm">{count} Products</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
