

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
        <div key={i} className="flex flex-col items-center text-center">
          <f.icon className="w-8 h-8 text-blue-600 mb-2" />
          <h4 className="font-medium">{f.title}</h4>
          <p className="text-sm text-gray-500">{f.text}</p>
        </div>
      ))}
    </div>
  )
}
