"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CategoryHighlightMosaic() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 h-[500px]">
        
        {/* Left Big Block (Headphones) */}
        <div className="relative col-span-2 row-span-2 overflow-hidden group">
          <Image
            src="/promo-headphone.jpg"
            alt="Monster Beats Headphones"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
            <p className="text-sm">High Tech News</p>
            <h3 className="text-3xl font-bold leading-tight">Monster Beats Headphones</h3>
            <Button className="mt-4 bg-white text-black hover:bg-primary hover:text-white">
              Read More
            </Button>
          </div>
        </div>

        {/* Top Right (iPhone) */}
        <div className="relative col-span-1 overflow-hidden group">
          <Image
            src="/promo-iphone-red.jpg"
            alt="Apple iPhone 7 Color Red"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
            <p className="text-sm">Play The Dream</p>
            <h3 className="text-xl font-bold leading-snug">Apple iPhone 7 Color Red</h3>
          </div>
        </div>

        {/* Bottom Right (Speaker) – now vertical */}
        <div className="relative col-span-1 row-span-2 overflow-hidden group">
          <Image
            src="/promo-speaker.jpg"
            alt="Music Makes Feel Better"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
            <p className="text-sm">Minimalism Design</p>
            <h3 className="text-xl font-bold leading-snug">Music Makes Feel Better</h3>
          </div>
        </div>

        {/* Right Top Block (iWatch) */}
        <div className="relative col-span-1 overflow-hidden group">
          <Image
            src="/promo-iWatch.jpg"
            alt="Apple iWatch Nike Edition"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
            <p className="text-sm">Health & Fit</p>
            <h3 className="text-xl font-bold leading-snug">Apple iWatch Nike Edition</h3>
          </div>
        </div>

      </div>
    </section>
  )
}
