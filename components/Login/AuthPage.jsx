"use client"
import { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegistrationForm"
import { motion } from "framer-motion"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border border-gray-200 bg-white/80">
      {/* Left Column */}
      <motion.div
        key={isLogin ? "login" : "register"}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="p-10"
      >
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </motion.div>

      {/* Right Column */}
      <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-blue-600 to-blue-950 text-white text-center relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          {isLogin ? (
            <>
              <h2 className="text-3xl font-extrabold mb-4 tracking-wide">WELCOME NEW USER</h2>
              <p className="mb-6 text-base leading-relaxed opacity-90">
                Register now to access your order history, manage purchases, and enjoy a faster checkout experience.
              </p>
              <button
                onClick={() => setIsLogin(false)}
                className="px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-md hover:shadow-lg transition duration-300"
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold mb-4 tracking-wide">WELCOME BACK</h2>
              <p className="mb-6 text-base leading-relaxed opacity-90">
                Already registered? Log in to manage your profile, orders, and get the best shopping experience.
              </p>
              <button
                onClick={() => setIsLogin(true)}
                className="px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-md hover:shadow-lg transition duration-300"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
