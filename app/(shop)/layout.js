import BrandStrip from "@/components/ShopPage/BrandStrip";
import ShopNav from "@/components/ShopPage/ShopNavHero/ShopNav";

export default function Layout({ children }) {
  return (
    <>
      <ShopNav />
      <main className="min-h-screen">
        {children}
      </main>
      <BrandStrip />
    </>
  );
}
