import CategoryHighlightMosaic from "@/components/Homepage/CategoryHighlightMosaic";
import FullWidthBanner from "@/components/Homepage/FullWidthBanner";
import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import InnovativeGadgets from "@/components/Homepage/InnovativeGadgets";
import PartnersSection from "@/components/Homepage/PartnerSection";
import ProductShowcase from "@/components/Homepage/ProductShowcase";
import PromoTiles from "@/components/Homepage/PromoTiles";
import SecondaryProductZone from "@/components/Homepage/SecondaryProductZone";
import TodayHotDeals from "@/components/Homepage/TodayHotDeals";
import MainNav from "./HeroSection/MainNav";
import productsData from "@/data/products.json";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <HeroSection />
      <PromoTiles />
      <ProductShowcase products={productsData} />
      <CategoryHighlightMosaic />
      <TodayHotDeals />
      <SecondaryProductZone />
      <FullWidthBanner />
      <InnovativeGadgets />
      <PartnersSection />
    </>
  );
}
