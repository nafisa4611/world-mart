"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { FaFacebookF, FaGoogle } from "react-icons/fa"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // 🔑 Call NextAuth credentials provider
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (res?.error) {
      setError("Incorrect email or password.")
    } else {
      // Redirect to dashboard after successful login
      window.location.href = "/my-dashboard"
    }

    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Log in to continue shopping and manage your account.
      </p>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center bg-red-50 p-2 rounded-md">
          {error}
        </p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            type="email"
            placeholder="Email address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-gray-600">Remember me</label>
          </div>
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition"
        >
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </form>

      {/* Separator */}
      <div className="my-6">
        <Separator />
        <p className="text-center text-xs text-gray-500 mt-2">OR LOGIN WITH</p>
      </div>

      {/* Social logins */}
      <div className="flex gap-3">
        <Button
          onClick={() => signIn("facebook", { callbackUrl: "/my-dashboard" })}
          className="w-1/2 bg-blue-800 hover:bg-blue-600 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
        >
          <FaFacebookF size={16} /> Facebook
        </Button>
        <Button
          onClick={() => signIn("google", { callbackUrl: "/my-dashboard" })}
          className="w-1/2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
        >
          <FaGoogle size={16} /> Google
        </Button>
      </div>

      {/* Footer */}
      <p className="text-sm text-center mt-6 text-gray-600">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 font-medium hover:underline">
          Register
        </a>
      </p>
    </div>
  )
}
