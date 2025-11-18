import { Clock, Lightbulb, Sofa, Package, CookingPot, ToyBrick } from "lucide-react";
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
      className="relative bg-black text-white py-16 md:py-24"
      style={{
        backgroundImage: `url('/shop-hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
          {category || title}
        </h1>

        {/* Shortcuts */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 overflow-x-auto md:overflow-visible py-2">
          {shortcuts.map(({ name, icon: Icon, count }) => (
            <Link
              key={name}
              href={`/shop/${name.toLowerCase()}`}
              className="flex flex-col items-center text-center min-w-[100px] sm:min-w-[120px] group"
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2 text-white group-hover:text-blue-400 transition-colors" />
              <span className="font-semibold uppercase text-sm sm:text-base">{name}</span>
              <span className="text-gray-300 text-xs sm:text-sm">{count} Products</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
