import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PromoTiles() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      
      {/* Tile 1 */}
      <div className="relative h-64 sm:h-72 overflow-hidden group shadow-lg rounded-xl">
        <Image
          src="/promo-webcam.jpg"
          alt="Webcams 2024"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition duration-500" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 pb-4 sm:pb-6 text-white">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md group-hover:translate-y-[-2px] transition-transform duration-500">
            New Technologies — Webcams 2024
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-200 max-w-sm leading-relaxed">
            Discover the latest webcams with crystal-clear video and audio for your meetings and streams.
          </p>
          <Button
            aria-label="Shop Webcams"
            className="mt-3 sm:mt-4 w-fit rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Shop More
          </Button>
        </div>
      </div>

      {/* Tile 2 */}
      <div className="relative h-64 sm:h-72 overflow-hidden group shadow-lg rounded-xl">
        <Image
          src="/promo-apple.jpg"
          alt="Apple Accessories"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 pb-4 sm:pb-6 text-white">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md group-hover:translate-y-[-2px] transition-transform duration-500">
            Apple Accessories — Leather Cases
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-200 max-w-sm leading-relaxed">
            Premium leather cases designed to perfectly complement your Apple devices.
          </p>
          <Button
            aria-label="Shop Apple Accessories"
            className="mt-3 sm:mt-4 w-fit rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Shop More
          </Button>
        </div>
      </div>
    </div>
  )
}
