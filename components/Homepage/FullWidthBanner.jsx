
import { Button } from "@/components/ui/button"

export default function FullWidthBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div
        className="relative max-w-7xl mx-auto  px-4 h-64 md:h-96 flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/ps4-controller.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
            Gaming Collection
          </h2>
          <p className="text-lg md:text-2xl text-white mb-4 drop-shadow-sm">
            Sony PlayStation 4 Dualshock Controller
          </p>
          <Button className="bg-blue-900 hover:bg-blue-700 py-2 px-6 text-white shadow-md hover:shadow-lg font-bold cursor-pointer transition duration-300">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  )
}
