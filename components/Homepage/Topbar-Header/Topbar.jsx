"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="bg-blue-950 text-white text-base md:text-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-14 px-4">

          {/* Left: Language & Country */}
          <div className="flex items-center gap-3">
            <select className="bg-blue-950 text-white px-2 h-10 flex items-center focus:outline-none appearance-none">
              <option>ENGLISH</option>
              <option>SPANISH</option>
            </select>

            <div className="h-6 border-l border-white" />

            <select className="bg-blue-950 text-white px-2 h-10 flex items-center focus:outline-none appearance-none">
              <option>United States</option>
              <option>Bangladesh</option>
            </select>
          </div>

          {/* Center: Free Shipping */}
          <div className="hidden md:flex font-semibold items-center">
            🚚 Free shipping on all orders over $200
          </div>

          {/* Right: Social + Links */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Facebook className="w-5 h-5 cursor-pointer" />
              <Twitter className="w-5 h-5 cursor-pointer" />
              <Instagram className="w-5 h-5 cursor-pointer" />
            </div>

            <div className="h-6 border-l border-white" />

            <a href="#" className="hover:text-blue-300">NEWSLETTER</a>
            <a href="#" className="hover:text-blue-300">CONTACT US</a>
            <a href="#" className="hover:text-blue-300">FAQS</a>
          </div>

          {/* Hamburger stays same */}
          <button
            className="md:hidden ml-3"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-950 text-white w-full">
          <div className="flex flex-col divide-y divide-white">
            <div className="flex flex-col p-4 space-y-2">
              <select className="bg-blue-900 text-white px-3 py-2 flex items-center focus:outline-none appearance-none">
                <option>ENGLISH</option>
                <option>SPANISH</option>
              </select>
              <select className="bg-blue-900 text-white px-3 py-2 flex items-center focus:outline-none appearance-none mt-2">
                <option>United States</option>
                <option>Bangladesh</option>
              </select>
            </div>

            <Link href="#" className="px-4 py-3 hover:bg-blue-800 transition">NEWSLETTER</Link>
            <Link href="#" className="px-4 py-3 hover:bg-blue-800 transition">CONTACT US</Link>
            <Link href="#" className="px-4 py-3 hover:bg-blue-800 transition">FAQS</Link>

            <div className="flex items-center justify-center gap-4 py-3">
              <Facebook className="w-5 h-5 cursor-pointer" />
              <Twitter className="w-5 h-5 cursor-pointer" />
              <Instagram className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
