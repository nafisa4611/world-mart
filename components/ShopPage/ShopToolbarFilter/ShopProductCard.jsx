"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingCart, RefreshCcw } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

export default function ShopProductCard({ product, view }) {
  const { addToCart } = useApp();
  const isList = view === "list";

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="w-full"
    >
      <motion.div
        className="relative group"
        whileHover={{ rotateX: 4, rotateY: -4 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <Card
          className={`relative overflow-hidden border border-gray-100 bg-white/90 backdrop-blur-sm
            shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            transition-all duration-500
            ${isList ? "flex items-center gap-4 p-4 rounded-lg" : "rounded-2xl"}
          `}
        >
          {/* Badge */}
          {product.label && (
            <span
              className={`absolute top-3 left-3 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white rounded-full shadow-md
                ${product.label.toLowerCase() === "new" && "bg-green-500"}
                ${product.label.toLowerCase() === "hot" && "bg-red-500"}
                ${product.label.includes("%") && "bg-blue-600"}
              `}
            >
              {product.label}
            </span>
          )}

          {/* Product Image */}
          <motion.div
            layout
            className={`relative overflow-hidden ${
              isList ? "w-40 h-40 flex-shrink-0 rounded-lg" : "w-full aspect-square"
            }`}
          >
            <Image
              src={product.img || "/placeholder.png"}
              alt={product.name || "Product image"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {product.hoverImg && (
              <Image
                src={product.hoverImg}
                alt={product.name + " hover"}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
            )}
          </motion.div>

          {/* Product Info */}
          <CardContent className={`${isList ? "flex-1 p-0" : "p-4 space-y-2"}`}>
            <motion.div layout>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                {product.category}
              </p>
              <h4 className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                {product.title}
              </h4>

              {/* Price */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-base font-bold text-blue-600">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-xs text-gray-400">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </motion.div>

            {/* List View Actions */}
            {isList && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 flex items-center justify-between"
              >
                <p className="text-xs text-gray-500 line-clamp-2">
                  {product.description || "Premium quality product with modern design."}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full shadow"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </CardContent>

          {/* Hover Actions (Grid only) */}
          {!isList && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
            >
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-9 w-9 rounded-full shadow hover:scale-110 transition"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full shadow hover:scale-110 transition">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full shadow hover:scale-110 transition">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full shadow hover:scale-110 transition">
                  <RefreshCcw className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
}
