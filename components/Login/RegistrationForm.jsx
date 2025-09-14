"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterForm() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.target)
    const user = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    }

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Something went wrong")

      alert("Account created! Please log in.")
      window.location.href = "/login"
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Create Account</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Join us today and enjoy a personalized shopping experience.
      </p>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center bg-red-50 p-2 rounded-md">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <Input name="firstName" placeholder="First name" required />
          <Input name="lastName" placeholder="Last name" required />
        </div>

        {/* Email */}
        <Input type="email" name="email" placeholder="Email address *" required />

        {/* Passwords */}
        <Input type="password" name="password" placeholder="Password *" required />
        <Input type="password" name="confirmPassword" placeholder="Confirm password *" required />

        {/* Checkboxes */}
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" required />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">Terms</a> and{" "}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </label>
        </div>

        {/* Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition"
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      {/* Footer link */}
      <p className="text-sm text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 font-medium hover:underline">Log in</a>
      </p>
    </div>
  )
}
