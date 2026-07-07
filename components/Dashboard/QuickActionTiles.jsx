"use client"

import { signOut } from "next-auth/react"
import { Package, Download, MapPin, User, ListChecks, Heart, LogOut } from "lucide-react"

const tiles = [
  { label: "Orders", icon: <Package size={28} /> },
  { label: "Downloads", icon: <Download size={28} /> },
  { label: "Addresses", icon: <MapPin size={28} /> },
  { label: "Account details", icon: <User size={28} /> },
  { label: "Waitlist", icon: <ListChecks size={28} /> },
  { label: "Wishlist", icon: <Heart size={28} /> },
  { label: "Logout", icon: <LogOut size={28} />, action: "logout" },
]

export default function QuickActionTiles() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {tiles.map((tile, index) =>
        tile.action === "logout" ? (
          <button
            key={tile.label}
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="
              group relative flex flex-col items-center justify-center p-6 rounded-3xl 
              bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md 
              transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
              hover:shadow-2xl hover:border-transparent
            "
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center mb-3 rounded-full 
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
            <div className="absolute inset-0 rounded-3xl shadow-inner opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </button>
        ) : (
          // Not built yet — shown but disabled rather than linking to a 404 page.
          <div
            key={tile.label}
            title="Coming soon"
            className="relative flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50 border border-gray-200 cursor-not-allowed"
          >
            <span className="absolute top-3 right-4 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Soon
            </span>
            <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full bg-gray-100">
              <div className="text-gray-400">{tile.icon}</div>
            </div>
            <span className="font-semibold text-gray-400 text-center text-lg">
              {tile.label}
            </span>
          </div>
        )
      )}
    </div>
  )
}
