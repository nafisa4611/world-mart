"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileDropdownOpen(null)
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
          <Link href="#" className="hover:text-blue-500 transition">Home</Link>
          <Link href="#" className="hover:text-blue-500 transition">Shop</Link>
          <Link href="#" className="hover:text-blue-500 transition">Blog</Link>
          <Link href="#" className="hover:text-blue-500 transition">Buy</Link>
        </div>

        {/* RIGHT SIDE LINKS */}
        <div className="hidden md:flex gap-6 font-semibold text-base lg:text-lg uppercase tracking-wide px-2">
          <Link href="#" className="text-blue-500 hover:text-blue-600 transition">Special Offer</Link>
          <Link href="#" className="hover:text-blue-500 transition">Purchase Theme</Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute top-16 left-0 z-40">
          <div className="flex flex-col divide-y">
            {["Home", "Shop", "Blog", "Buy"].map((item) => (
              <div key={item} className="flex flex-col">
                <button
                  className="flex items-center justify-between px-4 py-3 w-full text-left font-medium hover:bg-gray-100 transition"
                  onClick={() => item !== "Buy" && toggleMobileDropdown(item)}
                >
                  {item}
                  {item !== "Buy" && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileDropdownOpen === item ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {mobileDropdownOpen === item && item !== "Buy" && (
                  <div className="bg-gray-50 px-4 py-2 flex flex-col gap-2">
                    <Link href="#" className="py-1 hover:text-blue-500" onClick={closeMobileMenu}>Sub Item 1</Link>
                    <Link href="#" className="py-1 hover:text-blue-500" onClick={closeMobileMenu}>Sub Item 2</Link>
                    <Link href="#" className="py-1 hover:text-blue-500" onClick={closeMobileMenu}>Sub Item 3</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
