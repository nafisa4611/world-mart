"use client";

import { useState } from "react";

export default function SidebarFilters() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const brands = [
    "Alessi",
    "Flos",
    "HAY",
    "Klöber",
    "Magisso",
    "Louis Poulsen",
    "PackIt",
    "Vitra",
  ];
  const colors = [
    { name: "Beige", code: "#f5f5dc", count: 14 },
    { name: "Black", code: "#000", count: 30 },
    { name: "Blue", code: "#00aaff", count: 20 },
    { name: "Brown", code: "#8b4513", count: 14 },
    { name: "Gray", code: "#808080", count: 24 },
    { name: "Green", code: "#00aa00", count: 15 },
  ];

  // state management
  const [price, setPrice] = useState(5000);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [status, setStatus] = useState({ stock: false, sale: false });

  const toggleSelection = (list, value, setter) => {
    if (list.includes(value)) {
      setter(list.filter((v) => v !== value));
    } else {
      setter([...list, value]);
    }
  };

  return (
    <aside className="col-span-3 space-y-6">
      {/* Price Filter */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Filter by Price
        </h3>
        <input
          type="range"
          min="0"
          max="8200"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>$0</span>
          <span className="font-medium text-gray-800">${price}</span>
        </div>
        <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
          Apply Filter
        </button>
      </div>

      {/* Color Filter */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Filter by Color
        </h3>
        <ul className="space-y-2">
          {colors.map((c) => {
            const active = selectedColors.includes(c.name);
            return (
              <li
                key={c.name}
                onClick={() => toggleSelection(selectedColors, c.name, setSelectedColors)}
                className={`flex items-center justify-between text-sm cursor-pointer transition ${active ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-4 h-4 rounded-full border ${active ? "ring-2 ring-blue-500" : ""
                      }`}
                    style={{ backgroundColor: c.code }}
                  />
                  {c.name}
                </div>
                <span className="text-gray-400">{c.count}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Size Filter */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Filter by Size
        </h3>
        <ul className="space-y-2">
          {sizes.map((s, i) => {
            const active = selectedSizes.includes(s);
            return (
              <li
                key={s}
                onClick={() => toggleSelection(selectedSizes, s, setSelectedSizes)}
                className={`flex justify-between text-sm cursor-pointer transition ${active ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                <span>{s}</span>
                <span className="text-gray-400">{16 + i}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Brand Filter */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Filter by Brand
        </h3>
        <input
          type="text"
          placeholder="Search brand"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
          onChange={(e) =>
            setSelectedBrands(
              brands.filter((b) =>
                b.toLowerCase().includes(e.target.value.toLowerCase())
              )
            )
          }
        />
        <ul className="space-y-2 text-sm">
          {brands.map((b) => {
            const active = selectedBrands.includes(b);
            return (
              <li
                key={b}
                onClick={() => toggleSelection(selectedBrands, b, setSelectedBrands)}
                className={`flex items-center gap-2 cursor-pointer transition ${active ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                <span
                  className={`w-5 h-5 rounded border flex-shrink-0 ${active ? "bg-blue-600 border-blue-600" : "bg-gray-200"
                    }`}
                />
                {b}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Product Status */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Product Status
        </h3>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-blue-600">
          <input
            type="checkbox"
            checked={status.stock}
            onChange={() => setStatus({ ...status, stock: !status.stock })}
            className="accent-blue-600"
          />{" "}
          In Stock
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-blue-600 mt-1">
          <input
            type="checkbox"
            checked={status.sale}
            onChange={() => setStatus({ ...status, sale: !status.sale })}
            className="accent-blue-600"
          />{" "}
          On Sale
        </label>
      </div>

      {/* Top Rated Products */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Top Rated Products
        </h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <img
              src="/shop/watch.jpg"
              alt="watch"
              className="w-14 h-14 object-cover rounded-md border"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">Smart Watch</p>
              <p className="text-yellow-500 text-xs">★★★★★</p>
              <p className="text-blue-600 font-semibold text-sm">$599</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              src="/shop/chair.jpg"
              alt="chair"
              className="w-14 h-14 object-cover rounded-md border"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">Wooden Chair</p>
              <p className="text-yellow-500 text-xs">★★★★☆</p>
              <p className="text-blue-600 font-semibold text-sm">$249</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              src="/shop/floorlamp.jpg"
              alt="lamp"
              className="w-14 h-14 object-cover rounded-md border"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">Modern Lamp</p>
              <p className="text-yellow-500 text-xs">★★★★★</p>
              <p className="text-blue-600 font-semibold text-sm">$129</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
