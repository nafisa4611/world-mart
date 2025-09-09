
import CategoryHighlightMosaic from "@/components/CategoryHighlightMosaic";
import Footer from "@/components/Footer";
import FullWidthBanner from "@/components/FullWidthBanner";
import HeroSection from "@/components/HeroSection/HeroSection";
import InnovativeGadgets from "@/components/InnovativeGadgets";
import PartnersSection from "@/components/PertnerSection";
import ProductShowcase from "@/components/ProductShowcase";
import PromoTiles from "@/components/PromoTiles";
import SecondaryProductZone from "@/components/SecondaryProductZone";
import TodayHotDeals from "@/components/TodayHotDeals";
import TopbarHeader from "@/components/Topbar-Header/TopbarHeader";

export default function Home() {
  return (
    <div>
      <TopbarHeader />
      <HeroSection />
      <PromoTiles />
      <ProductShowcase />
      <CategoryHighlightMosaic />
      <TodayHotDeals />
      <SecondaryProductZone />
      <FullWidthBanner />
      <InnovativeGadgets />
      <PartnersSection />
      <Footer />
    </div>
  );
}
