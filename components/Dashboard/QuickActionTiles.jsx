import Link from "next/link"
import { Package, Download, MapPin, User, ListChecks, Heart, LogOut } from "lucide-react"

const tiles = [
  { label: "Orders", icon: <Package size={28} />, href: "/my-account/orders" },
  { label: "Downloads", icon: <Download size={28} />, href: "/my-account/downloads" },
  { label: "Addresses", icon: <MapPin size={28} />, href: "/my-account/addresses" },
  { label: "Account details", icon: <User size={28} />, href: "/my-account/account-details" },
  { label: "Waitlist", icon: <ListChecks size={28} />, href: "/my-account/waitlist" },
  { label: "Wishlist", icon: <Heart size={28} />, href: "/my-account/wishlist" },
  { label: "Logout", icon: <LogOut size={28} />, href: "/logout" },
]

export default function QuickActionTiles() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {tiles.map((tile, index) => (
        <Link
          key={tile.label}
          href={tile.href}
          className={`
            group relative flex flex-col items-center justify-center p-6 rounded-3xl 
            bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md 
            transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
            hover:shadow-2xl hover:border-transparent
          `}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {/* Gradient icon background */}
          <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full 
            bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
            group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 
            transition-all duration-300"
          >
            <div className="text-blue-600 group-hover:text-white transition-colors">
              {tile.icon}
            </div>
          </div>

          <span className="font-semibold text-gray-800 group-hover:text-gray-900 text-center text-lg transition-colors">
            {tile.label}
          </span>

          {/* Optional subtle floating shadow */}
          <div className="absolute inset-0 rounded-3xl shadow-inner opacity-0 group-hover:opacity-30 transition-opacity"></div>
        </Link>
      ))}
    </div>
  )
}
