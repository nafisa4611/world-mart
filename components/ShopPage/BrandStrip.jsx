"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { src: "/brands/brand1.png", name: "Brand 1" },
  { src: "/brands/brand2.png", name: "Brand 2" },
  { src: "/brands/brand3.png", name: "Brand 3" },
  { src: "/brands/brand4.png", name: "Brand 4" },
  { src: "/brands/brand5.png", name: "Brand 5" },
  { src: "/brands/brand6.png", name: "Brand 6" },
  { src: "/brands/brand7.png", name: "Brand 7" },
];

export default function BrandStrip() {
  const loopBrands = [...brands, ...brands];

  return (
    <section className="bg-white border-t border-gray-100 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="flex items-center gap-6 sm:gap-10 md:gap-14"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopBrands.map((brand, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 flex items-center justify-center
                grayscale opacity-60 hover:opacity-100 hover:grayscale-0
                transition duration-300
              "
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={80}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
