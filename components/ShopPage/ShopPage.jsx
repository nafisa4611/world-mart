import ShopHero from "../ShopPage/ShopNavHero/ShopHero";
import ShopToolbarFilter from "./ShopToolbarFilter/ShopToolbarFilter";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsive top spacing */}
      <div className="py-4 sm:py-6 lg:py-8">
        <ShopHero />
      </div>

      {/* Filter Toolbar Wrapper */}
      <div className="py-2 sm:py-4 lg:py-6">
        <ShopToolbarFilter />
      </div>
    </div>
  );
}
