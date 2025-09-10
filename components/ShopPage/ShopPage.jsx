import ShopHero from "../ShopPage/ShopNavHero/ShopHero";
import ShopNav from "../ShopPage/ShopNavHero/ShopNav";
import BrandStrip from "./BrandStrip";
import ShopToolbarFilter from "./ShopToolbarFilter/ShopToolbarFilter";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto">
        <ShopNav />
        <ShopHero />
        <ShopToolbarFilter />
        <BrandStrip />
    </div>
  )
}
