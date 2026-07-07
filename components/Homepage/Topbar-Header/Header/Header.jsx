"use client";

import { Heart, Repeat, LogOut, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { signOut } from "next-auth/react";
import CartIcon from "./CartIcon";

export default function Header() {
  const { user } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

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

        {/* Search (Desktop) */}
        <div className="hidden md:flex flex-1 mx-6 max-w-2xl border border-gray-300 rounded-full h-12">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-3 rounded-l-full"
          />
          <select className="border-l border-gray-300 px-2 rounded-none">
            <option>All Categories</option>
            <option>Smartphones</option>
            <option>Laptops</option>
            <option>Accessories</option>
          </select>
          <button className="text-black px-4 flex items-center rounded-r-full">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Icons / Actions */}
        <div className="flex items-center gap-4 md:gap-6 text-gray-700 font-medium">
          {/* Mobile search toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>

          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <Link href="/my-dashboard" className="font-semibold text-primary hover:text-blue-600 transition">
                Hello, {user.name}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium transition"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="hidden md:block hover:text-primary cursor-pointer">
              Login / Register
            </Link>
          )}

          <Heart
            className="w-5 h-5 text-gray-300 cursor-not-allowed"
            title="Wishlist (coming soon)"
          />
          <Link href="/checkout">
            <Repeat className="w-5 h-5 cursor-pointer hover:text-green-500 transition" />
          </Link>
          <CartIcon />

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex border border-gray-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-3 py-2"
            />
            <select className="border-l border-gray-300 px-2">
              <option>All Categories</option>
              <option>Smartphones</option>
              <option>Laptops</option>
              <option>Accessories</option>
            </select>
            <button className="px-3 flex items-center">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full px-4 py-2">
          <div className="flex flex-col divide-y">
            {user ? (
              <div className="py-2 flex flex-col gap-2">
                <span className="font-semibold text-primary">Hello, {user.name}</span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="py-2 hover:text-primary cursor-pointer">
                Login / Register
              </Link>
            )}
            <Link href="#" className="py-2 text-gray-400 cursor-not-allowed" onClick={(e) => e.preventDefault()}>
              Wishlist <span className="text-xs">(coming soon)</span>
            </Link>
            <Link href="/my-dashboard" className="py-2 hover:text-green-500">Orders</Link>
            <Link href="/cart" className="py-2 hover:text-primary">Cart</Link>
          </div>
        </div>
      )}
    </header>
  );
}
