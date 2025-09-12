import Link from "next/link"
import { Home, Package, Download, MapPin, User, ListChecks, Heart, LogOut } from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: <Home size={20} />, href: "/my-account", active: true },
  { label: "Orders", icon: <Package size={20} />, href: "/my-account/orders" },
  { label: "Downloads", icon: <Download size={20} />, href: "/my-account/downloads" },
  { label: "Addresses", icon: <MapPin size={20} />, href: "/my-account/addresses" },
  { label: "Account details", icon: <User size={20} />, href: "/my-account/account-details" },
  { label: "Waitlist", icon: <ListChecks size={20} />, href: "/my-account/waitlist" },
  { label: "Wishlist", icon: <Heart size={20} />, href: "/my-account/wishlist" },
  { label: "Logout", icon: <LogOut size={20} />, href: "/logout" },
]

export default function Sidebar() {
  return (
    <nav className="space-y-3 bg-white p-4 rounded-2xl shadow-lg">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`
            group flex items-center gap-3 px-4 py-3 rounded-xl transition 
            ${item.active ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}
          `}
        >
          <span
            className={`transition-colors ${item.active ? "text-white" : "text-gray-400 group-hover:text-blue-600"}`}
          >
            {item.icon}
          </span>
          <span className={`font-medium transition-colors ${item.active ? "text-white" : "text-gray-700"}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}
