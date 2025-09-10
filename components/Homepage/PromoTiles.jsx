import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PromoTiles() {
  return (
    <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-2">
      {/* Tile 1 */}
      <div className="relative h-72 overflow-hidden group shadow-lg">
        <Image
          src="/promo-webcam.jpg"
          alt="Webcams 2024"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition duration-500 group-hover:from-black/90" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-6 text-white">
          <h3 className="text-2xl font-extrabold tracking-tight drop-shadow-md group-hover:translate-y-[-2px] transition-transform duration-500">
            New Technologies — Webcams 2024
          </h3>
          <p className="mt-2 text-sm text-gray-200 max-w-sm leading-relaxed">
            Discover the latest webcams with crystal-clear video and audio for
            your meetings and streams.
          </p>
          <Button
            aria-label="Shop Webcams"
            className="mt-4 w-fit rounded-full bg-primary cursor-pointer text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Shop More
          </Button>
        </div>
      </div>

      {/* Tile 2 */}
      <div className="relative h-72 overflow-hidden group shadow-lg">
        <Image
          src="/promo-apple.jpg"
          alt="Apple Accessories"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition duration-500 group-hover:from-black/90" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-6 text-white">
          <h3 className="text-2xl font-extrabold tracking-tight drop-shadow-md group-hover:translate-y-[-2px] transition-transform duration-500">
            Apple Accessories — Leather Cases
          </h3>
          <p className="mt-2 text-sm text-gray-200 max-w-sm leading-relaxed">
            Premium leather cases designed to perfectly complement your Apple
            devices.
          </p>
          <Button
            aria-label="Shop Apple Accessories"
            className="mt-4 w-fit rounded-full bg-primary cursor-pointer text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Shop More
          </Button>
        </div>
      </div>
    </div>
  )
}
