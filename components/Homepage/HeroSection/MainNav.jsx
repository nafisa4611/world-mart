"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="border-b border-gray-200 bg-white relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-0 text-gray-800">

        {/* LEFT: Browse Categories */}
        <button className="flex items-center bg-blue-500 text-white font-semibold h-12 w-full md:w-72 md:h-16 rounded md:rounded-none focus:outline-none hover:bg-blue-600 transition-colors">
          <div className="flex items-center justify-between w-full px-4">
            <Menu className="w-5 h-5" />
            <span className="flex-1 text-left uppercase tracking-wide text-xs sm:text-sm">
              Browse Categories
            </span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden ml-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* CENTER NAV (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center gap-8 font-semibold text-base lg:text-lg uppercase tracking-wide">
          <Link href="/" className="hover:text-blue-500 transition">Home</Link>
          <Link href="/shop" className="hover:text-blue-500 transition">Shop</Link>
          <Link href="/about-us" className="hover:text-blue-500 transition">About Us</Link>
          <Link href="/contact-us" className="hover:text-blue-500 transition">Contact Us</Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute top-16 left-0 z-40">
          <div className="flex flex-col divide-y">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 w-full text-left font-medium hover:bg-gray-100 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
