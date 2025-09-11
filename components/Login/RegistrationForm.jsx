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
    <div className="max-w-md mx-auto p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Create Account</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Join us today and enjoy a personalized shopping experience.
      </p>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center bg-red-50 p-2 rounded-md">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="First name"
            className="rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <Input
            placeholder="Last name"
            className="rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <Input
          type="email"
          placeholder="Email address *"
          required
          className="rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        {/* Passwords */}
        <Input
          type="password"
          placeholder="Password *"
          required
          className="rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <Input
          type="password"
          placeholder="Confirm password *"
          required
          className="rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        {/* Checkboxes */}
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            Subscribe to newsletter
          </label>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full py-2.5 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition"
        >
          Register
        </Button>
      </form>

      {/* Footer link */}
      <p className="text-sm text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 font-medium hover:underline">
          Log in
        </a>
      </p>
    </div>
  )
}
