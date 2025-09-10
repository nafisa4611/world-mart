"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function LoginForm() {
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // fake validation
    setError("Incorrect username or password.")
  }

  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Username or email address *</label>
          <Input required />
        </div>
        <div>
          <label className="text-sm">Password *</label>
          <Input type="password" required />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm underline">Lost your password?</a>
        </div>
        <Button type="submit" className="w-full">Log in</Button>
      </form>

      {/* Social login */}
      <div className="my-6">
        <Separator />
        <p className="text-center text-xs text-gray-500 mt-2">OR LOGIN WITH</p>
      </div>
      <div className="flex space-x-3">
        <Button className="w-1/2 bg-blue-600 text-white">Facebook</Button>
        <Button className="w-1/2 bg-red-600 text-white">Google</Button>
      </div>
    </div>
  )
}
