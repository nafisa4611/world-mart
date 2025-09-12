"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  { q: "Will I receive the same product as in the picture?", a: "Yes, all items match the product photos unless otherwise stated. We ensure high-quality standards." },
  { q: "Where can I view my sales receipt?", a: "You can access your sales receipts anytime in your account under 'Orders'." },
  { q: "How can I return an item?", a: "Items can be returned within 30 days of delivery. Please visit our Returns & Refunds page for details." },
  { q: "Will you restock items marked ‘out of stock’?", a: "Yes, we frequently restock popular items. Sign up for notifications on the product page." },
  { q: "Where can I ship my order?", a: "We currently ship across the United States. International shipping options will be available soon." },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="max-w-2xl">
      {/* Eyebrow + Heading */}
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Information & Questions
      </p>
      <h2 className="text-3xl font-bold mt-2 mb-8 text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition hover:shadow-md"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{faq.q}</span>
              <span
                className={`transition-transform duration-300 ${
                  openIndex === i ? "rotate-180 text-blue-600" : "rotate-0 text-gray-500"
                }`}
              >
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
