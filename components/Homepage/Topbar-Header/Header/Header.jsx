"use client";

import { Heart, Repeat, LogOut, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { signOut } from "next-auth/react";
import CartIcon from "./CartIcon";

export default function Header() {
  const { user } = useApp();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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

        <div className="flex flex-1 mx-6 max-w-2xl border border-gray-300 rounded-full h-12">
          <input type="text" placeholder="Search for products..." className="flex-1 px-3" />
          <select className="border px-2">
            <option>All Categories</option>
            <option>Smartphones</option>
            <option>Laptops</option>
            <option>Accessories</option>
          </select>
          <button className="text-black px-4 flex items-center">
            <Search className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-6 text-gray-700 font-medium">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="font-semibold text-primary">Hello, {user.name}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium transition"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="hover:text-primary cursor-pointer">
              Login / Register
            </Link>
          )}

          <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition" />
          <Repeat className="w-5 h-5 cursor-pointer hover:text-green-500 transition" />

          <CartIcon />
        </div>
      </div>
    </header>
  );
}
