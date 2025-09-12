import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const emptyStates = {
  orders: { text: "You haven’t placed any orders yet.", cta: "Start Shopping", href: "/" },
  downloads: { text: "No available downloads yet.", cta: "Browse Products", href: "/shop" },
  wishlist: { text: "Nothing here yet.", cta: "Add items", href: "/shop" },
  waitlist: { text: "Nothing here yet.", cta: "Add items", href: "/shop" },
}

export default function EmptyState({ type }) {
  const state = emptyStates[type] || { text: "No items", cta: "Go Shopping", href: "/" }

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-md flex flex-col items-center justify-center text-center space-y-4">
      <div className="text-blue-500 mb-2">
        <ShoppingCart size={48} />
      </div>
      <p className="text-gray-600 text-lg font-medium">{state.text}</p>
      <Link 
        href={state.href} 
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-300"
      >
        {state.cta}
      </Link>
    </div>
  )
}
