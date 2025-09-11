"use client"
import { motion } from "framer-motion"

export default function PhotoRow({ photos }) {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-xl group"
          >
            <img
              src={photo}
              alt={`Photo ${idx + 1}`}
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Optional caption */}
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-semibold">Premium Shot {idx + 1}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
