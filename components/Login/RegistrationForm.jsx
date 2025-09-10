"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterForm() {
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // fake validation
    setError("This email is already registered.")
  }

  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <p className="text-sm text-gray-600 mb-4">
        Create an account to track orders, view history, and checkout faster. 
        We only ask for the information needed to process your order.
      </p>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
        </div>
        <Input type="email" placeholder="Email address *" required />
        <Input type="password" placeholder="Password *" required />
        <Input type="password" placeholder="Confirm password *" required />

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm">
            I agree to the Terms and Privacy Policy
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <label htmlFor="newsletter" className="text-sm">
            Subscribe to newsletter
          </label>
        </div>

        <Button type="submit" className="w-full">Register</Button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <a href="#" className="underline">Log in</a>
      </p>
    </div>
  )
}
