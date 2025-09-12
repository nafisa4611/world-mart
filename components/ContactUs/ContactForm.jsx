"use client"
import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("success") // simulate submission
  }

  return (
    <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      {/* Eyebrow + Heading */}
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Information About Us
      </p>
      <h2 className="text-3xl font-bold mt-2 mb-8 text-gray-900">
        Contact us for any questions
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          placeholder="Your Name*"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <input
          type="email"
          placeholder="Your Email*"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Company"
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <textarea
          placeholder="Your Message*"
          required
          rows="5"
          className="border border-gray-300 rounded-lg p-3 md:col-span-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        ></textarea>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition md:col-span-2"
        >
          Ask a Question
        </button>
      </form>

      {/* Microcopy */}
      <div className="mt-6 space-y-1">
        <p className="text-xs text-gray-500">* Required fields</p>
        <p className="text-xs text-gray-500">
          We’ll only use your details to reply to your message.{" "}
          <a href="/privacy" className="underline hover:text-blue-600">
            Privacy Policy
          </a>
        </p>
      </div>

      {/* Success Message */}
      {status === "success" && (
        <div className="mt-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          <p className="font-medium">
            Thanks! Your message has been sent. We’ll get back to you within
            1–2 business days.
          </p>
        </div>
      )}
    </div>
  )
}
