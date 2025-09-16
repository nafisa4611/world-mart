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
        {/* Pass only the visible products to the grid */}
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
