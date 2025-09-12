"use client"
import { useState } from "react"

export default function PaymentMethods() {
  const [payment, setPayment] = useState("bank")
  const [termsAccepted, setTermsAccepted] = useState(false)

  const options = [
    {
      value: "bank",
      label: "Direct bank transfer",
      description:
        "Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared.",
    },
    { value: "cheque", label: "Cheque Payment", description: "" },
    { value: "cod", label: "Cash on delivery", description: "" },
    {
      value: "paypal",
      label: "PayPal",
      description: "Secure payment via PayPal.",
      helpLink: { text: "What is PayPal?", href: "#" },
    },
  ]

  return (
    <div className="space-y-6">
      {/* Payment Options */}
      <div className="space-y-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`block p-4 border rounded-xl cursor-pointer transition hover:shadow-md ${
              payment === opt.value ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                value={opt.value}
                checked={payment === opt.value}
                onChange={() => setPayment(opt.value)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-800 font-medium">{opt.label}</span>
            </div>
            {opt.description && (
              <p className="text-gray-600 text-sm mt-1">
                {opt.description}{" "}
                {opt.helpLink && (
                  <a href={opt.helpLink.href} className="text-blue-600 underline ml-1">
                    {opt.helpLink.text}
                  </a>
                )}
              </p>
            )}
          </label>
        ))}
      </div>

      {/* Terms Checkbox */}
      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="w-5 h-5 accent-blue-600 rounded"
        />
        <span className="text-gray-700">
          I have read and agree to the{" "}
          <a href="/terms" className="underline text-blue-600">
            terms and conditions
          </a>
        </span>
      </label>
    </div>
  )
}
