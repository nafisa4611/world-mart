import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-blue-950 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12 px-4">

        {/* Left: Language & Country */}
        <div className="flex items-center h-full">
          <div className="flex items-center">
            <select className="bg-blue-950 text-white px-3 h-12 flex items-center focus:outline-none">
              <option>ENGLISH</option>
              <option>SPANISH</option>
            </select>
            <span className="mx-2 border-l border-white h-12"></span> {/* vertical bar with spacing */}
            <select className="bg-blue-950 text-white px-3 h-12 flex items-center focus:outline-none">
              <option>United States</option>
              <option>Bangladesh</option>
            </select>
            <span className="mx-2 border-l border-white h-12"></span> {/* vertical bar after country */}
          </div>
        </div>

        {/* Center: Free Shipping */}
        <div className="hidden md:flex font-bold text-white h-full items-center">
          🚚 Free shipping on all orders over $200
        </div>

        {/* Right: Social + Links */}
        <div className="flex items-center h-full">
          <div className="flex items-center gap-3 px-3 h-full">
            <Facebook className="w-4 h-4 cursor-pointer" />
            <Twitter className="w-4 h-4 cursor-pointer" />
            <Instagram className="w-4 h-4 cursor-pointer" />
          </div>

          <a href="#" className="px-3 flex items-center border-l border-white h-12">NEWSLETTER</a>
          <a href="#" className="px-3 flex items-center border-l border-white h-12">CONTACT US</a>
          <a href="#" className="px-3 flex items-center border-l border-white h-12">FAQS</a>

          <span className="mx-2 border-l border-white h-12"></span> {/* vertical bar after FAQs */}
        </div>

      </div>
    </div>
  )
}
