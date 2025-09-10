"use client"

import Image from "next/image"

const partners = [
  { id: 1, logo: "/brands/brand1.png", name: "Brand 1" },
  { id: 2, logo: "/brands/brand2.png", name: "Brand 2" },
  { id: 3, logo: "/brands/brand3.png", name: "Brand 3" },
  { id: 4, logo: "/brands/brand4.png", name: "Brand 4" },
  { id: 5, logo: "/brands/brand5.png", name: "Brand 5" },
  { id: 6, logo: "/brands/brand6.png", name: "Brand 6" },
  { id: 7, logo: "/brands/brand7.png", name: "Brand 7" },
  { id: 8, logo: "/brands/brand8.png", name: "Brand 8" },
  { id: 9, logo: "/brands/brand9.png", name: "Brand 9" },
  { id: 10, logo: "/brands/brand10.png", name: "Brand 10" },
  { id: 11, logo: "/brands/brand11.png", name: "Brand 11" },
  { id: 12, logo: "/brands/brand12.png", name: "Brand 12" },
]

export default function PartnersSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title with Bars */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">Our Partners</h2>
        <div className="h-[2px] w-24 bg-blue-600 mx-auto mt-3"></div>
        <div className="border-t border-b border-gray-200 "></div>
      </div>

      {/* Two-column Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: YouTube Video */}
        <div className="w-full lg:w-1/2 h-64">
          <div className="w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right: Partner Logos Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-4 grid-rows-3 gap-6 items-center justify-items-center pb-4 h-64">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center items-center shadow-xl grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}