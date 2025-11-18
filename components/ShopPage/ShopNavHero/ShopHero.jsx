import {
  Clock,
  Lightbulb,
  Sofa,
  Package,
  CookingPot,
  ToyBrick,
} from "lucide-react";
import Link from "next/link";

const shortcuts = [
  { name: "Clocks", icon: Clock, count: 12 },
  { name: "Lighting", icon: Lightbulb, count: 17 },
  { name: "Furniture", icon: Sofa, count: 33 },
  { name: "Accessories", icon: Package, count: 12 },
  { name: "Cooking", icon: CookingPot, count: 12 },
  { name: "Toys", icon: ToyBrick, count: 12 },
];

export default function ShopHero({ title = "Shop", category }) {
  return (
    <section
      className="relative bg-black text-white py-14 sm:py-20 md:py-24"
      style={{
        backgroundImage: `url('/shop-hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
          {category || title}
        </h1>

        {/* Shortcuts */}
        <div
          className="
            flex 
            flex-wrap 
            justify-center 
            gap-4 sm:gap-6 md:gap-10 
            overflow-x-auto 
            scrollbar-none 
            px-2 py-2
          "
        >
          {shortcuts.map(({ name, icon: Icon, count }) => (
            <Link
              key={name}
              href={`/shop/${name.toLowerCase()}`}
              className="
                flex flex-col items-center text-center 
                min-w-[80px] sm:min-w-[100px] md:min-w-[120px] 
                group
              "
            >
              <Icon
                className="
                  w-7 h-7 
                  sm:w-9 sm:h-9 
                  md:w-10 md:h-10 
                  mb-1 sm:mb-2 
                  text-white 
                  group-hover:text-blue-400 
                  transition-colors
                "
              />

              <span className="font-semibold uppercase text-xs sm:text-sm md:text-base">
                {name}
              </span>

              <span className="text-gray-300 text-[10px] sm:text-xs md:text-sm">
                {count} Products
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
