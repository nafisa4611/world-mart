"use client"

export default function CartHero() {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <div className="mt-4 flex justify-center gap-4 text-sm">
          <span className="font-bold text-primary">Shopping Cart</span>
          <span>→</span>
          <span>Checkout</span>
          <span>→</span>
          <span>Order Complete</span>
        </div>
      </div>
    </section>
  )
}
