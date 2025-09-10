import CategoryHighlightMosaic from "@/components/CategoryHighlightMosaic";
import FullWidthBanner from "@/components/FullWidthBanner";
import HeroSection from "@/components/HeroSection/HeroSection";
import InnovativeGadgets from "@/components/InnovativeGadgets";
import PartnersSection from "@/components/PartnerSection";
import ProductShowcase from "@/components/ProductShowcase";
import PromoTiles from "@/components/PromoTiles";
import SecondaryProductZone from "@/components/SecondaryProductZone";
import TodayHotDeals from "@/components/TodayHotDeals";


export default function HomePage() {
  return (
    <div>
        <HeroSection />
        <PromoTiles />
        <ProductShowcase />
        <CategoryHighlightMosaic />
        <TodayHotDeals />
        <SecondaryProductZone />
        <FullWidthBanner />
        <InnovativeGadgets />
        <PartnersSection />
    </div>
  )
}
