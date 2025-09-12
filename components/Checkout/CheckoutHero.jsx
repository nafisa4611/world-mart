"use client"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutHero() {
    return (
        <section
            className="relative bg-black text-white py-20 md:py-28"
            style={{
                backgroundImage: `url('/shop-hero-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                    Checkout
                </h1>
                <div className="mt-6 flex justify-center items-center gap-2 text-sm md:text-base text-gray-300">
                    <span className="opacity-50">Shopping Cart</span>
                    <span className="opacity-50">→</span>
                    <span className="font-semibold text-white">Checkout</span>
                    <span className="opacity-50">→</span>
                    <span className="opacity-50">Order Complete</span>
                </div>
            </div>
        </section>
    )
}
