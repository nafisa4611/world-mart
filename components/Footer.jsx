"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Left: Logo & About */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={50} height={40} />
            <h1 className="text-xl font-bold">World Mart</h1>
          </div>
          <p>
            Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis
            nam parturient.
          </p>
          <ul className="space-y-1 text-sm">
            <li>📍 123 Tech Street, Dhaka, Bangladesh</li>
            <li>📞 +880 123 456 789</li>
            <li>✉️ info@yourcompany.com</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="hover:text-white font-medium">A companion for extra sleeping</Link>
              <p className="text-gray-400 text-xs">July 23, 2016 • 1 Comment</p>
            </li>
            <li>
              <Link href="#" className="hover:text-white font-medium">Outdoor seating collection inspiration</Link>
              <p className="text-gray-400 text-xs">July 23, 2016 • 1 Comment</p>
            </li>
          </ul>
        </div>

        {/* Our Stores */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Stores</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">New York</Link></li>
            <li><Link href="#" className="hover:text-white">London SF</Link></li>
            <li><Link href="#" className="hover:text-white">Edinburgh</Link></li>
            <li><Link href="#" className="hover:text-white">Los Angeles</Link></li>
            <li><Link href="#" className="hover:text-white">Chicago</Link></li>
            <li><Link href="#" className="hover:text-white">Las Vegas</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Returns</Link></li>
            <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white">Latest News</Link></li>
            <li><Link href="#" className="hover:text-white">Our Sitemap</Link></li>
          </ul>
        </div>

        {/* Footer Menu */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Footer Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Instagram Profile</Link></li>
            <li><Link href="#" className="hover:text-white">New Collection</Link></li>
            <li><Link href="#" className="hover:text-white">Women Dress</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white">Latest News</Link></li>
            <li><Link href="#" className="hover:text-white">Purchase Theme</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>

          <div className="flex gap-4">
            <Image src="/visa.png" alt="Visa" width={30} height={25} className="object-contain" />
            <Image src="/mastercard.jpg" alt="MasterCard" width={30} height={25} className="object-contain" />
            <Image src="/paypal.png" alt="PayPal" width={40} height={25} className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  )
}
