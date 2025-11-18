"use client";

import { useState } from "react";
import ShopProductGrid from "./ShopProductGrid";
import ShopToolbar from "./ShopToolbar";
import SidebarFilters from "./SidebarFilters";
import Pagination from "./Pagination";
import products from "@/data/products.json";

export default function ShopToolbarFilter() {
  const [perPage, setPerPage] = useState(9);
  const [sort, setSort] = useState("Default sorting");
  const [page, setPage] = useState(1);
  const [view, setView] = useState("grid-3");

  // total pages
  const totalPages = Math.ceil(products.length / perPage);

  // slice products for current page
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6">
      
      {/* Sidebar — hidden on mobile */}
      <div className="hidden lg:block col-span-3">
        <SidebarFilters />
      </div>

      {/* Main content */}
      <main className="col-span-1 lg:col-span-9">
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
