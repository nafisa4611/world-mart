"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    tag: "Smart Watches",
    title: "Health Care Monitor",
    desc: "Track your health seamlessly with our latest smartwatches designed for performance and style.",
    img: "/banner-watch.png",
    cta: "Shop Now",
  },
  {
    id: 2,
    tag: "Laptops",
    title: "Next Gen Performance",
    desc: "Experience blazing-fast speed and power with our newest range of professional laptops.",
    img: "/banner-laptop.png",
    cta: "Explore Deals",
  },
]

export default function HeroBanner() {
  return (
    <section className="bg-gray-50">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        speed={1000}
        loop={true}
        className="max-w-5xl mx-auto bg-white shadow-2xl h-[520px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="flex flex-col md:flex-row items-center justify-between
                         px-8 py-12 md:py-20
                         bg-gradient-to-r from-blue-900 to-blue-950
                         h-full
                         shadow-2xl relative overflow-hidden m-4"
            >
              {/* Decorative gradient glows */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_50%)]" />

              {/* Text Section */}
              <div className="relative z-10 max-w-lg text-white space-y-5">
                <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                  {slide.tag}
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-200 text-base leading-relaxed">
                  {slide.desc}
                </p>
                <Button
                  size="lg"
                  className="rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {slide.cta}
                </Button>
              </div>

              {/* Image Section */}
              <div className="hidden md:flex relative z-10 h-full items-center">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={450}
                  height={360}
                  priority
                  className="object-contain drop-shadow-2xl max-h-[420px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}