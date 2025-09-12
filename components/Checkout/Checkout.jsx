import CheckoutHero from "./CheckoutHero"
import CouponNotice from "./CouponNotice"
import FreeShippingBar from "./FreeShippingBar"
import BillingForm from "./BillingForm"
import OrderSummary from "./OrderSummary"

export default function Checkout() {
  return (
    <div>
      <CheckoutHero />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <CouponNotice />
          <FreeShippingBar current={50} goal={200} />
          <BillingForm />
        </div>
        <OrderSummary />
      </div>
    </div>
  )
}
