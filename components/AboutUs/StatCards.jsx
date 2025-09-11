
"use client"
import { motion } from "framer-motion"

export default function StatCards({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="relative group rounded-2xl overflow-hidden p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-950 shadow-xl"
        >
          {/* Inner card with glass effect */}
          <div className="bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col items-center text-center">
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-900">
              {stat.number}
            </p>
            <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
              {stat.label}
            </p>
            <p className="mt-1 text-gray-500 text-sm max-w-[80%]">
              {stat.note}
            </p>
          </div>

          {/* Glow hover effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        </motion.div>
      ))}
    </div>
  )
}
