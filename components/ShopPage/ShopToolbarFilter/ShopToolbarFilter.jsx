"use client";

import { useState } from "react";
import ShopProductGrid from "./ShopProductGrid";
import ShopToolbar from "./ShopToolbar";
import SidebarFilters from "./SidebarFilters";
import Pagination from "./Pagination";

export default function ShopToolbarFilter() {
  const [perPage, setPerPage] = useState(9);
  const [sort, setSort] = useState("Default sorting");
  const [page, setPage] = useState(1);
  const [view, setView] = useState("grid-3");

  const products = [
    {
      id: 1,
      title: "Smart Wooden Clock",
      category: "Accessories",
      price: 599,
      oldPrice: 699,
      rating: 4.5,
      badge: "HOT",
      image: "/shop/watch.jpg",
    },
    {
      id: 2,
      title: "Wooden Bow Tie",
      category: "Accessories",
      price: 129,
      rating: 5,
      badge: "NEW",
      image: "/shop/bowtie.jpg",
    },
    {
      id: 3,
      title: "Designer Chair",
      category: "Furniture",
      price: 899,
      oldPrice: 1199,
      rating: 4,
      badge: "-25%",
      image: "/shop/chair.jpg",
    },
    {
      id: 4,
      title: "Scandinavian Pendant Light",
      category: "Lighting",
      price: 349,
      oldPrice: 449,
      rating: 4.5,
      badge: "NEW",
      image: "/shop/pendant.jpg",
    },
    {
      id: 5,
      title: "Handmade Wooden Toy Car",
      category: "Toys",
      price: 79,
      rating: 4,
      badge: "HOT",
      image: "/shop/toycar.jpg",
    },
    {
      id: 6,
      title: "Luxury Leather Wallet",
      category: "Accessories",
      price: 199,
      oldPrice: 249,
      rating: 5,
      badge: "-20%",
      image: "/shop/wallet.jpg",
    },
    {
      id: 7,
      title: "Ergonomic Office Chair",
      category: "Furniture",
      price: 1299,
      rating: 4.5,
      badge: "SOLD OUT",
      image: "/shop/officechair.jpg",
    },
    {
      id: 8,
      title: "Minimal Wall Clock",
      category: "Accessories",
      price: 249,
      rating: 4,
      badge: "",
      image: "/shop/wallclock.jpg",
    },
    {
      id: 9,
      title: "Modern Floor Lamp",
      category: "Lighting",
      price: 499,
      rating: 4.5,
      badge: "HOT",
      image: "/shop/floorlamp.jpg",
    },
    {
      id: 10,
      title: "Kids Wooden Puzzle Set",
      category: "Toys",
      price: 59,
      rating: 5,
      badge: "NEW",
      image: "/shop/puzzle.jpg",
    },
    {
      id: 11,
      title: "Glass Vase",
      category: "Home Décor",
      price: 89,
      rating: 4,
      badge: "",
      image: "/shop/vase.jpg",
    },
    {
      id: 12,
      title: "Premium Wooden Desk",
      category: "Furniture",
      price: 1599,
      oldPrice: 1899,
      rating: 5,
      badge: "-15%",
      image: "/shop/desk.jpg",
    },
    {
      id: 13,
      title: "Wireless Noise-Canceling Headphones",
      category: "Electronics",
      price: 299,
      oldPrice: 349,
      rating: 4.5,
      badge: "HOT",
      image: "/shop/headphones.jpg",
    },
    {
      id: 14,
      title: "Smart Fitness Band",
      category: "Electronics",
      price: 129,
      rating: 4,
      badge: "NEW",
      image: "/shop/fitnessband.jpeg",
    },
    {
      id: 15,
      title: "Cast Iron Skillet",
      category: "Cooking",
      price: 79,
      rating: 5,
      badge: "-10%",
      image: "/shop/skillet.jpeg",
    },
    {
      id: 16,
      title: "Wooden Cutting Board",
      category: "Cooking",
      price: 39,
      rating: 4.5,
      badge: "HOT",
      image: "/shop/cuttingboard.png",
    },
    {
      id: 17,
      title: "Abstract Wall Art",
      category: "Home Décor",
      price: 159,
      rating: 4.5,
      badge: "NEW",
      image: "/shop/wallart.jpg",
    },
    {
      id: 18,
      title: "Ceramic Table Lamp",
      category: "Lighting",
      price: 229,
      oldPrice: 279,
      rating: 4,
      badge: "-15%",
      image: "/shop/tablelamp.jpeg",
    },
    {
      id: 19,
      title: "Leather Crossbody Bag",
      category: "Accessories",
      price: 349,
      rating: 5,
      badge: "HOT",
      image: "/shop/crossbody.jpg",
    },
    {
      id: 20,
      title: "Classic Aviator Sunglasses",
      category: "Accessories",
      price: 149,
      rating: 4.5,
      badge: "NEW",
      image: "/shop/sunglasses.jpg",
    },
    {
      id: 21,
      title: "Stuffed Teddy Bear",
      category: "Toys",
      price: 49,
      rating: 5,
      badge: "HOT",
      image: "/shop/teddy.jpg",
    },
    {
      id: 22,
      title: "Wooden Train Set",
      category: "Toys",
      price: 99,
      rating: 4.5,
      badge: "-20%",
      image: "/shop/trainset.jpg",
    },
    {
      id: 23,
      title: "Portable Camping Chair",
      category: "Outdoor",
      price: 119,
      rating: 4,
      badge: "NEW",
      image: "/shop/campingchair.jpg",
    },
    {
      id: 24,
      title: "Insulated Water Bottle",
      category: "Outdoor",
      price: 39,
      rating: 5,
      badge: "HOT",
      image: "/shop/waterbottle.jpg",
    },
  ];

  // total pages
  const totalPages = Math.ceil(products.length / perPage);

  // slice products for current page
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      <SidebarFilters />
      <main className="col-span-9">
        <ShopToolbar
          perPage={perPage}
          setPerPage={(val) => {
            setPerPage(val);
            setPage(1);
          }}
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
        />
        <ShopProductGrid products={visibleProducts} view={view} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
}
