import CartHero from "@/components/cart/CartHero"
import FreeShippingNotice from "@/components/cart/FreeShippingNotice"
import CartTable from "@/components/cart/CartTable"
import CartTotals from "@/components/cart/CartTotals"
import SuggestedProducts from "@/components/cart/SuggestedProducts"

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Smartphone X", price: 50, quantity: 2, image: "/item.jpg" },
  ]
  const suggested = [
    { id: 1, name: "Headphones", price: 45, image: "/suggested.jpg" },
  ]

  return (
    <>
      <CartHero />
      <FreeShippingNotice goal={100} current={50} />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        <div className="lg:col-span-2">
          <CartTable items={cartItems} />
          <SuggestedProducts products={suggested} />
        </div>
        <div>
          <CartTotals subtotal={100} />
        </div>
      </div>
    </>
  )
}
