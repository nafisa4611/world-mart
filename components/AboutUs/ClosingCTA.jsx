"use client"
import { motion } from "framer-motion"

export default function ClosingCTA({ headline, subline, ctaText, ctaLink, bgImage }) {
  return (
    <section className="relative py-32 text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Content */}
      <div className="relative container mx-auto text-center px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          {subline}
        </motion.p>

        <motion.a
          href={ctaLink}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 inline-block px-10 py-4 rounded-2xl font-semibold text-lg 
                     bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                     shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          {ctaText}
        </motion.a>
      </div>
    </section>
  )
}
