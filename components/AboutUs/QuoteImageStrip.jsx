"use client"
import { motion } from "framer-motion"

export default function QuoteImageStrip({ quote, author, images }) {
  return (
    <section className="py-24 container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl px-6">
      {/* Left - Quote Block */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative p-10 rounded-2xl bg-gradient-to-br from-green-600 via-green-00 to-green-900 text-white shadow-2xl"
      >
        <p className="text-2xl md:text-3xl font-light leading-relaxed">
          “{quote}”
        </p>
        <p className="mt-6 font-semibold text-lg tracking-wide">
          By {author}
        </p>
      </motion.div>

      {/* Right - Supporting Images */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="flex gap-6 justify-center md:justify-start"
      >
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Supporting image ${idx + 1}`}
            className={`w-64 h-40 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 ${
              images.length === 2 && idx === 1 ? "mt-6" : ""
            }`}
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          />
        ))}
      </motion.div>
    </section>
  )
}
