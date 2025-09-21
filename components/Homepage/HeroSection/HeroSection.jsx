
import CategorySidebar from "./CategorySidebar"
import HeroBanner from "./HeroBanner"

export default function HeroSection() {
  return (
    <div className="flex">
      {/* Left: Browse Categories */}
      <div className="hidden md:block w-72">
        <CategorySidebar />
      </div>

      {/* Right: Hero Banner */}
      <div className="flex-1">
        <HeroBanner />
      </div>
    </div>
  )
}