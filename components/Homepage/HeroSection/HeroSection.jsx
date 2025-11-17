

import CategorySidebar from "./CategorySidebar"
import HeroBanner from "./HeroBanner"

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar */}
      <div className="w-full md:w-72 mb-4 md:mb-0">
        <CategorySidebar />
      </div>

      {/* Hero Banner */}
      <div className="flex-1 overflow-hidden">
        <HeroBanner />
      </div>
    </div>
  )
}
