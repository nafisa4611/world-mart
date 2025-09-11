import ProductBreadcrumbs from "@/components/Product/ProductBreadcrumbs"
import ProductIntro from "@/components/Product/ProductIntro"
import ProductGallery from "@/components/Product/ProductGallery"
import ProductBuyBox from "@/components/Product/ProductBuyBox"
import ProductTabs from "@/components/Product/ProductTabs"
import ProductFeatures from "@/components/Product/ProductFeatures"
import ProductFrequentlyBought from "@/components/Product/ProductFrequentlyBought"
import ProductUpsell from "@/components/Product/ProductUpsell"
import ProductRelated from "@/components/Product/ProductRelated"


export default function SingleProduct() {
    const product = {
        title: "Smart Watches Wood Edition",
        brand: "Eva Solo",
        price: 599,
        oldPrice: 699,
        shortDesc: "Minimal wooden smartwatch with timeless design.",
        attributes: ["Color: Beige", "Brand: Eva Solo", "Thickness: 8mm"],
        sku: "SKU1234",
        category: "Accessories",
        tags: ["wood", "watch"],
    }

    return (
        <>
            
            <div className="container mx-auto px-6 py-12">

                {/* 1. Breadcrumbs + Title */}
                <ProductBreadcrumbs
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label: "Shop", link: "/shop" },
                        { label: "Accessories", link: "/shop/accessories" },
                        { label: "Smart Watches Wood Edition" },
                    ]}
                />
                <ProductIntro title={product.title} brand={product.brand} />

                {/* 2 & 3. Gallery + Buy Box */}
                <div className="grid md:grid-cols-2 gap-12">
                    <ProductGallery images={["/shop/watch.jpg", "/shop/watch2.jpg", "/shop/watch3.jpg"]} />
                    <ProductBuyBox product={product} />
                </div>

                {/* 4. Info Tabs */}
                <ProductTabs
                    description="This smartwatch combines Scandinavian design with premium materials..."
                    reviews={[]}
                    brand="Eva Solo is a Danish design brand known for craftsmanship."
                    shipping={["Ships in 1-2 days", "Free returns within 30 days", "Delivered by DHL"]}
                />

                {/* 5. Features */}
                <ProductFeatures />

                {/* 6. Frequently Bought */}
                <ProductFrequentlyBought
                    bundle={[
                        { title: "Wooden Bow Tie", price: 129, image: "/shop/bowtie.jpg" },
                        { title: "Designer Chair", price: 899, image: "/shop/chair.jpg" },
                    ]}
                />

                {/* 7. Upsell */}
                <ProductUpsell
                    products={[
                        { title: "Wall Clock", category: "Accessories", price: 249, image: "/shop/wallclock.jpg" },
                        { title: "Floor Lamp", category: "Lighting", price: 499, image: "/shop/floorlamp.jpg" },
                    ]}
                />

                {/* 8. Related */}
                <ProductRelated
                    products={[
                        { title: "Toy Car", category: "Toys", price: 79, image: "/shop/toycar.jpg", badge: "HOT" },
                        { title: "Wallet", category: "Accessories", price: 199, image: "/shop/wallet.jpg", badge: "-20%" },
                    ]}
                />
            </div>
        </>
    )
}
