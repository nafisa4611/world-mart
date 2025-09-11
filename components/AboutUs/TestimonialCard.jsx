"use client"
import { Star } from "lucide-react"

export function TestimonialCard({ rating, review, reviewer }) {
  return (
    <div className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl">
      {/* Inner glass card */}
      <div className="bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.03]">
        
        {/* Stars */}
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="text-gray-700 dark:text-gray-200 italic leading-relaxed mb-4">
          “{review}”
        </p>

        {/* Reviewer */}
        <p className="font-semibold text-gray-900 dark:text-white">
          {reviewer}
        </p>
      </div>
    </div>
  )
}
