"use client"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"


export default function HeroIntro({ role, name, bio, avatar, bgImage, ctaLink }) {
  const socialLinks = [
    { name: "Facebook", url: "#", icon: <Facebook className="w-6 h-6" /> },
    { name: "Twitter", url: "#", icon: <Twitter className="w-6 h-6" /> },
    { name: "LinkedIn", url: "#", icon: <Linkedin className="w-6 h-6" /> },
    { name: "Instagram", url: "#", icon: <Instagram className="w-6 h-6" /> },
  ]

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <motion.img
              src={avatar}
              alt={name}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right - Text */}
          <div className="text-center md:text-left max-w-xl">
            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-[0.3em] text-gray-300"
            >
              {role}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            >
              {name}
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-lg text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl p-4"
            >
              {bio}
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href={ctaLink}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 inline-block px-8 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </motion.a>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-6 mt-6 justify-center md:justify-start text-xl"
            >
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
