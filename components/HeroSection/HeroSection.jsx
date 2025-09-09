import CategorySidebar from "./CategorySidebar"
import HeroBanner from "./HeroBanner"

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto flex">
      <CategorySidebar />
      <HeroBanner />
    </div>
  )
}
