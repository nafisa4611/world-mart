"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import ShopCategorySidebar from "./ShopCategorySidebar"

export default function ShopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 bg-white relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-0 text-gray-800">

        {/* LEFT — BROWSE CATEGORIES */}
        <div className="relative group">
          <button className="flex items-center bg-blue-500 text-white font-semibold h-16 w-64 md:w-72">
            <div className="flex items-center justify-between w-full px-5">
              <Menu className="w-5 h-5" />
              <span className="flex-1 text-left uppercase tracking-wide">
                Browse Categories
              </span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>

          {/* Show category sidebar on hover */}
          <div className="absolute left-0 top-full hidden group-hover:block">
            <ShopCategorySidebar />
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden ml-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* CENTER NAV (DESKTOP) */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 font-medium text-base uppercase tracking-wide">

          {/* HOME */}
          <div className="relative group cursor-pointer">
            <Link href={"/"} className="flex items-center gap-1 hover:text-blue-500 transition">
              Home <ChevronDown className="w-4 h-4" />
            </Link>

            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[500px]">
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:text-blue-500">Home Default</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Home Minimal</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Home Modern</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Home Fashion</Link></li>
              </ul>
            </div>
          </div>

          {/* SHOP */}
          <div className="relative group cursor-pointer">
            <Link href="/shop" className="flex items-center gap-1 hover:text-blue-500 transition">
              Shop <ChevronDown className="w-4 h-4" />
            </Link>

            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[700px]">
              <div className="grid grid-cols-3 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Men</h4>
                  <ul className="space-y-1">
                    <li><Link href="#" className="hover:text-blue-500">T-Shirts</Link></li>
                    <li><Link href="#" className="hover:text-blue-500">Shoes</Link></li>
                    <li><Link href="#" className="hover:text-blue-500">Accessories</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Women</h4>
                  <ul className="space-y-1">
                    <li><Link href="#" className="hover:text-blue-500">Dresses</Link></li>
                    <li><Link href="#" className="hover:text-blue-500">Bags</Link></li>
                    <li><Link href="#" className="hover:text-blue-500">Heels</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Electronics</h4>
                  <ul className="space-y-1">
                    <li><Link href="#" className="hover:text-blue-500">Mobile Phones</Link></li>
                    <li><Link href="#" className="hover:text-blue-500">Laptops</Link></li>
                    <li><Link href="#" className="hover:text-blue-500">Smart Watches</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* BLOG */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-500 transition">
              Blog <ChevronDown className="w-4 h-4" />
            </div>

            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[450px]">
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:text-blue-500">Tech Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Fashion Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Lifestyle Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Travel Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* PAGES */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-500 transition">
              Pages <ChevronDown className="w-4 h-4" />
            </div>

            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[400px]">
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:text-blue-500">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Contact</Link></li>
                <li><Link href="#" className="hover:text-blue-500">FAQ</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Careers</Link></li>
              </ul>
            </div>
          </div>

          {/* ELEMENTS */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-500 transition">
              Elements <ChevronDown className="w-4 h-4" />
            </div>

            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[550px]">
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li><Link href="#" className="hover:text-blue-500">Buttons</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Tabs</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Team Members</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Testimonials</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Modals</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Accordions</Link></li>
              </ul>
            </div>
          </div>

          {/* BUY */}
          <Link href="#" className="hover:text-blue-500 transition">
            Buy
          </Link>

        </nav>

        {/* RIGHT SIDE LINKS */}
        <div className="hidden md:flex gap-6 font-medium text-base uppercase tracking-wide">
          <Link href="#" className="text-blue-500 hover:text-blue-600">Special Offer</Link>
          <Link href="#" className="hover:text-blue-500">Purchase Theme</Link>
        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full border-t">
          <ul className="flex flex-col text-gray-700">

            <li className="px-5 py-3 border-b">Home</li>
            <li className="px-5 py-3 border-b">Shop</li>
            <li className="px-5 py-3 border-b">Blog</li>
            <li className="px-5 py-3 border-b">Pages</li>
            <li className="px-5 py-3 border-b">Elements</li>
            <li className="px-5 py-3 border-b">Buy</li>

          </ul>
        </div>
      )}

    </div>
  )
}
