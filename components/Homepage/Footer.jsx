"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Left: Logo & About */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={50} height={40} />
            <h1 className="text-xl font-bold">World Mart</h1>
          </div>
          <p className="text-gray-400 text-sm max-w-sm">
            Your one-stop shop for electronics, home goods, and everyday
            essentials — quality products, straightforward pricing.
          </p>
          <ul className="space-y-1 text-sm">
            {/* TODO: replace with your real business address, phone, and support email */}
            <li>📍 123 Tech Street, Dhaka, Bangladesh</li>
            <li>📞 +880 123 456 789</li>
            <li>✉️ support@worldmart.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Your Account */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Your Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            <li><Link href="/checkout" className="hover:text-white transition-colors">Checkout</Link></li>
            <li><Link href="/my-dashboard" className="hover:text-white transition-colors">My Account</Link></li>
            <li><Link href="/login" className="hover:text-white transition-colors">Login / Register</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {year} World Mart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Image src="/visa.png" alt="Visa" width={30} height={25} className="object-contain" />
            <Image src="/mastercard.jpg" alt="MasterCard" width={30} height={25} className="object-contain" />
            <Image src="/paypal.png" alt="PayPal" width={40} height={25} className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  )
}
