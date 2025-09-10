"use client"

import { Search, Heart, Repeat, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [cartCount] = useState(2);
  const [cartPrice] = useState(320);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="World-Mart Logo"
              width={50}
              height={50}
              className="rounded-full border border-gray-300"
            />

            <span className="text-2xl md:text-3xl font-bold text-primary hover:text-blue-600 cursor-pointer">
              World Mart
            </span>

          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 mx-6 max-w-2xl border border-gray-300 rounded-full h-12">
          <input type="text" placeholder="Search for products..."
            className="flex-1 px-3" />
          <select className="border px-2">
            <option>All Categories</option>
            <option>Smartphones</option>
            <option>Laptops</option>
            <option>Accessories</option>
          </select>
          <button className=" text-black px-4 flex items-center">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Account & Icons */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <a href="/login" className="hover:text-primary">Login / Register</a>
          <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition" />
          <Repeat className="w-5 h-5 cursor-pointer hover:text-green-500 transition" />
          {/* Cart */}
          <div className="relative flex items-center cursor-pointer hover:text-primary transition">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
            <span className="ml-2 hidden md:inline font-semibold">${cartPrice}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
