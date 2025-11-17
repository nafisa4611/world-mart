"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CategoryHighlightMosaic() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="
        grid grid-cols-1 gap-4
        sm:grid-cols-2
        md:grid-cols-4
        md:gap-0
        md:h-[500px]
      ">
        
        {/* Left Big Block (Headphones) */}
        <div className="
          relative overflow-hidden group
          col-span-1 sm:col-span-2
          md:col-span-2 md:row-span-2
          h-60 sm:h-72 md:h-auto
        ">
          <Image
            src="/promo-headphone.jpg"
            alt="Monster Beats Headphones"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 text-white">
            <p className="text-xs sm:text-sm">High Tech News</p>
            <h3 className="text-lg sm:text-3xl font-bold leading-tight">Monster Beats Headphones</h3>
            <Button className="mt-3 sm:mt-4 bg-white text-black hover:bg-primary hover:text-white">
              Read More
            </Button>
          </div>
        </div>

        {/* Top Right (iPhone) */}
        <div className="
          relative overflow-hidden group
          col-span-1
          h-48 sm:h-60 md:h-auto
        ">
          <Image
            src="/promo-iphone-red.jpg"
            alt="Apple iPhone 7 Color Red"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 text-white">
            <p className="text-xs sm:text-sm">Play The Dream</p>
            <h3 className="text-lg sm:text-xl font-bold leading-snug">Apple iPhone 7 Color Red</h3>
          </div>
        </div>

        {/* Bottom Right (Speaker) */}
        <div className="
          relative overflow-hidden group
          col-span-1 md:row-span-2
          h-48 sm:h-72 md:h-auto
        ">
          <Image
            src="/promo-speaker.jpg"
            alt="Music Makes Feel Better"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 text-white">
            <p className="text-xs sm:text-sm">Minimalism Design</p>
            <h3 className="text-lg sm:text-xl font-bold leading-snug">Music Makes Feel Better</h3>
          </div>
        </div>

        {/* Right Top Block (iWatch) */}
        <div className="
          relative overflow-hidden group
          col-span-1
          h-48 sm:h-60 md:h-auto
        ">
          <Image
            src="/promo-iWatch.jpg"
            alt="Apple iWatch Nike Edition"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 text-white">
            <p className="text-xs sm:text-sm">Health & Fit</p>
            <h3 className="text-lg sm:text-xl font-bold leading-snug">Apple iWatch Nike Edition</h3>
          </div>
        </div>

      </div>
    </section>
  )
}
