"use client"
import { useState, useEffect } from "react"

export default function BillingForm({ onChange }) {
  const [shipDifferent, setShipDifferent] = useState(false)
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  })
  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  })

  // Notify parent of changes
  useEffect(() => {
    if (onChange) onChange({ billing, shipping: shipDifferent ? shipping : billing })
  }, [billing, shipping, shipDifferent, onChange])

  const handleBillingChange = (e) => {
    const { name, value } = e.target
    setBilling(prev => ({ ...prev, [name]: value }))
  }

  const handleShippingChange = (e) => {
    const { name, value } = e.target
    setShipping(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">Billing Details</h2>

      {/* Billing Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="firstName" placeholder="First name *" required className="p-3 border rounded" onChange={handleBillingChange} />
        <input type="text" name="lastName" placeholder="Last name *" required className="p-3 border rounded" onChange={handleBillingChange} />
        <input type="text" name="company" placeholder="Company (optional)" className="p-3 border rounded md:col-span-2" onChange={handleBillingChange} />
        <input type="text" name="country" placeholder="Country / Region *" required className="p-3 border rounded" onChange={handleBillingChange} />
        <input type="text" name="address" placeholder="Street address *" required className="p-3 border rounded md:col-span-2" onChange={handleBillingChange} />
        <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" className="p-3 border rounded md:col-span-2" onChange={handleBillingChange} />
        <input type="text" name="city" placeholder="Town / City *" required className="p-3 border rounded" onChange={handleBillingChange} />
        <input type="text" name="state" placeholder="State / Province / District *" required className="p-3 border rounded" onChange={handleBillingChange} />
        <input type="text" name="zip" placeholder="Postcode / ZIP" className="p-3 border rounded" onChange={handleBillingChange} />
        <input type="tel" name="phone" placeholder="Phone *" required className="p-3 border rounded" onChange={handleBillingChange} />
        <input type="email" name="email" placeholder="Email *" required className="p-3 border rounded" onChange={handleBillingChange} />
      </div>

      {/* Ship to Different Address */}
      <div className="flex items-center space-x-3">
        <input type="checkbox" id="ship" onChange={(e) => setShipDifferent(e.target.checked)} className="w-5 h-5 accent-blue-600" />
        <label htmlFor="ship" className="text-gray-700 font-medium">Ship to a different address?</label>
      </div>

      {shipDifferent && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="firstName" placeholder="First name *" required className="p-3 border rounded" onChange={handleShippingChange} />
          <input type="text" name="lastName" placeholder="Last name *" required className="p-3 border rounded" onChange={handleShippingChange} />
          <input type="text" name="company" placeholder="Company (optional)" className="p-3 border rounded md:col-span-2" onChange={handleShippingChange} />
          <input type="text" name="country" placeholder="Country / Region *" required className="p-3 border rounded" onChange={handleShippingChange} />
          <input type="text" name="address" placeholder="Street address *" required className="p-3 border rounded md:col-span-2" onChange={handleShippingChange} />
          <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" className="p-3 border rounded md:col-span-2" onChange={handleShippingChange} />
          <input type="text" name="city" placeholder="Town / City *" required className="p-3 border rounded" onChange={handleShippingChange} />
          <input type="text" name="state" placeholder="State / Province / District *" required className="p-3 border rounded" onChange={handleShippingChange} />
          <input type="text" name="zip" placeholder="Postcode / ZIP" className="p-3 border rounded" onChange={handleShippingChange} />
        </div>
      )}

      {/* Order Notes */}
      <textarea placeholder="Order notes (optional)" className="w-full p-3 border rounded h-28" />
    </div>
  )
}
