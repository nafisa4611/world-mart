import Link from "next/link"
import { signOut } from "next-auth/react"
import { Home, Package, Download, MapPin, User, ListChecks, Heart, LogOut } from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: <Home size={20} />, href: "/my-dashboard", active: true },
  { label: "Orders", icon: <Package size={20} /> },
  { label: "Downloads", icon: <Download size={20} /> },
  { label: "Addresses", icon: <MapPin size={20} /> },
  { label: "Account details", icon: <User size={20} /> },
  { label: "Waitlist", icon: <ListChecks size={20} /> },
  { label: "Wishlist", icon: <Heart size={20} /> },
]

export default function Sidebar() {
  return (
    <nav className="space-y-3 bg-white p-4 rounded-2xl shadow-lg">
      {navItems.map((item) =>
        item.href ? (
          <Link
            key={item.label}
            href={item.href}
            className={`
              group flex items-center gap-3 px-4 py-3 rounded-xl transition 
              ${item.active ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}
            `}
          >
            <span className={`transition-colors ${item.active ? "text-white" : "text-gray-400 group-hover:text-blue-600"}`}>
              {item.icon}
            </span>
            <span className={`font-medium transition-colors ${item.active ? "text-white" : "text-gray-700"}`}>
              {item.label}
            </span>
          </Link>
        ) : (
          // Not built yet — shown but disabled rather than linking to a 404 page.
          <div
            key={item.label}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 cursor-not-allowed"
            title="Coming soon"
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.label}</span>
            <span className="ml-auto text-xs uppercase tracking-wide">Soon</span>
          </div>
        )
      )}
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
      >
        <span className="text-gray-400 group-hover:text-blue-600"><LogOut size={20} /></span>
        <span className="font-medium">Logout</span>
      </button>
    </nav>
  )
}
