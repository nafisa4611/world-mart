"use client"

import { ChevronDown, Menu } from "lucide-react"

export default function MainNav() {
  return (
    <div className="border-b border-gray-200 bg-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 text-gray-800">
        
        {/* Left: Browse Categories */}
        <button className="flex items-center bg-blue-500 text-white font-semibold h-16 w-64">
          <div className="flex items-center justify-between w-full px-5">
            <Menu className="w-5 h-5" />
            <span className="flex-1 text-left uppercase tracking-wide">
              Browse Categories
            </span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>

        {/* Center: Main Menu */}
        <nav className="flex flex-1 justify-center gap-10 font-medium text-sm uppercase tracking-wide">
          
          {/* Home */}
          <div className="relative group">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              Home <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[600px]">
              <div className="grid grid-cols-3 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Layouts</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Default</a></li>
                    <li><a href="#" className="hover:text-blue-500">Minimal</a></li>
                    <li><a href="#" className="hover:text-blue-500">Creative</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Headers</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Sticky</a></li>
                    <li><a href="#" className="hover:text-blue-500">Transparent</a></li>
                    <li><a href="#" className="hover:text-blue-500">Centered</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Footers</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Simple</a></li>
                    <li><a href="#" className="hover:text-blue-500">Extended</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div className="relative group">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              Shop <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[800px]">
              <div className="grid grid-cols-4 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Men</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">T-Shirts</a></li>
                    <li><a href="#" className="hover:text-blue-500">Shoes</a></li>
                    <li><a href="#" className="hover:text-blue-500">Accessories</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Women</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Dresses</a></li>
                    <li><a href="#" className="hover:text-blue-500">Bags</a></li>
                    <li><a href="#" className="hover:text-blue-500">Heels</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Electronics</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Smartphones</a></li>
                    <li><a href="#" className="hover:text-blue-500">Laptops</a></li>
                    <li><a href="#" className="hover:text-blue-500">Headphones</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specials</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-blue-500">Best Sellers</a></li>
                    <li><a href="#" className="hover:text-blue-500">Sale</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Blog */}
          <div className="relative group">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              Blog <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[500px]">
              <div className="grid grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Categories</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Fashion</a></li>
                    <li><a href="#" className="hover:text-blue-500">Tech</a></li>
                    <li><a href="#" className="hover:text-blue-500">Lifestyle</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Post Types</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Standard</a></li>
                    <li><a href="#" className="hover:text-blue-500">Video</a></li>
                    <li><a href="#" className="hover:text-blue-500">Gallery</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="relative group">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              Pages <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[500px]">
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Elements */}
          <div className="relative group">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              Elements <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-6 w-[600px]">
              <div className="grid grid-cols-3 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">UI</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Buttons</a></li>
                    <li><a href="#" className="hover:text-blue-500">Tabs</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Shop</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Product Card</a></li>
                    <li><a href="#" className="hover:text-blue-500">Cart</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Content</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-blue-500">Testimonials</a></li>
                    <li><a href="#" className="hover:text-blue-500">Team</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Buy */}
          <a href="#" className="hover:text-blue-500 transition-colors">
            Buy
          </a>
        </nav>

        {/* Right: Extra Links */}
        <div className="flex gap-6 font-medium text-sm uppercase tracking-wide">
          <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
            Special Offer
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Purchase Theme
          </a>
        </div>
      </div>
    </div>
  )
}