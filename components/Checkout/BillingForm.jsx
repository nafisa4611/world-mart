"use client"
import { useState } from "react"

export default function BillingForm() {
  const [shipDifferent, setShipDifferent] = useState(false)

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">Billing Details</h2>

      {/* Billing Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="First name *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Last name *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Company name (optional)"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition md:col-span-2"
        />
        <input
          type="text"
          placeholder="Country / Region *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Street address *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition md:col-span-2"
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition md:col-span-2"
        />
        <input
          type="text"
          placeholder="Town / City *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="State / Province / District *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Postcode / ZIP"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="tel"
          placeholder="Phone *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="email"
          placeholder="Email address *"
          required
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Ship to Different Address */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="ship"
          onChange={(e) => setShipDifferent(e.target.checked)}
          className="w-5 h-5 accent-blue-600 rounded transition"
        />
        <label htmlFor="ship" className="text-gray-700 font-medium">
          Ship to a different address?
        </label>
      </div>

      {shipDifferent && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First name *"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            placeholder="Last name *"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            placeholder="Company name (optional)"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition md:col-span-2"
          />
          <input
            type="text"
            placeholder="Country / Region *"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            placeholder="Street address *"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition md:col-span-2"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition md:col-span-2"
          />
          <input
            type="text"
            placeholder="Town / City *"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            placeholder="State / Province / District *"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            placeholder="Postcode / ZIP"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      )}

      {/* Order Notes */}
      <textarea
        placeholder="Order notes (optional)"
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none h-28"
      />
    </div>
  )
}
