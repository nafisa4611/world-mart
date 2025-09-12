"use client"

import { Shield, RefreshCw, Truck, CreditCard } from "lucide-react"

const features = [
  { icon: Shield, title: "Secure Payments", text: "Your data is safe with us" },
  { icon: RefreshCw, title: "Free Returns", text: "Within 30 days" },
  { icon: Truck, title: "Fast Delivery", text: "2–5 business days" },
  { icon: CreditCard, title: "2-Year Warranty", text: "On all products" },
]

export default function ProductFeatures() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      {features.map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all">
            <f.icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">{f.title}</h4>
          <p className="text-sm text-gray-500">{f.text}</p>
        </div>
      ))}
    </div>
  )
}
