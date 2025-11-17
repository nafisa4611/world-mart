"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import ShopCategorySidebar from "./ShopCategorySidebar"

export default function ShopNav() {
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
    <div className="border-b border-gray-200 bg-white relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-0 text-gray-800">

        {/* LEFT: Browse Categories */}
        <div className="relative group hidden md:block">
          <button className="flex items-center bg-blue-500 text-white font-semibold h-16 w-72">
            <div className="flex items-center justify-between w-full px-5">
              <Menu className="w-5 h-5" />
              <span className="flex-1 text-left uppercase tracking-wide">
                Browse Categories
              </span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>

          {/* Hover Sidebar */}
          <div className="absolute left-0 top-full hidden group-hover:block z-50">
            <ShopCategorySidebar />
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* CENTER NAV (DESKTOP ONLY) */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 font-medium text-base uppercase tracking-wide">
          {["Home", "Shop", "Blog", "Pages", "Elements", "Buy"].map((item) => (
            <div key={item} className="relative group cursor-pointer">
              {item !== "Buy" ? (
                <div className="flex items-center gap-1 hover:text-blue-500 transition">
                  {item} <ChevronDown className="w-4 h-4" />
                </div>
              ) : (
                <Link href="#" className="hover:text-blue-500 transition">
                  Buy
                </Link>
              )}

              {/* Placeholder drop (kept for desktop structure) */}
              {item !== "Buy" && (
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[400px]">
                  <div className="text-gray-700">Mega Menu Content</div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex gap-6 font-medium text-base uppercase tracking-wide">
          <Link href="#" className="text-blue-500 hover:text-blue-600 transition">
            Special Offer
          </Link>
          <Link href="#" className="hover:text-blue-500 transition">
            Purchase Theme
          </Link>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 absolute left-0 top-16 w-full">
          <div className="flex flex-col divide-y">

            {[
              "Home",
              "Shop",
              "Blog",
              "Pages",
              "Elements",
              "Buy",
            ].map((item) => (
              <div key={item} className="flex flex-col">
                <button
                  className="flex items-center justify-between py-3 w-full text-left font-semibold"
                  onClick={() => item !== "Buy" && toggleMobileDropdown(item)}
                >
                  {item}

                  {item !== "Buy" && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileDropdownOpen === item ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile submenu */}
                {mobileDropdownOpen === item && item !== "Buy" && (
                  <div className="bg-gray-50 px-4 py-2 flex flex-col gap-2">
                    <Link href="#" onClick={closeMobileMenu} className="hover:text-blue-500">Option 1</Link>
                    <Link href="#" onClick={closeMobileMenu} className="hover:text-blue-500">Option 2</Link>
                    <Link href="#" onClick={closeMobileMenu} className="hover:text-blue-500">Option 3</Link>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom links */}
            <Link href="#" className="py-3 text-blue-600 font-semibold" onClick={closeMobileMenu}>
              Special Offer
            </Link>
            <Link href="#" className="py-3 font-semibold" onClick={closeMobileMenu}>
              Purchase Theme
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
