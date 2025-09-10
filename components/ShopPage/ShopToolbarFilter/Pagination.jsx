
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 7,
}) {
  // helper to build page list with ellipsis
  const buildPages = (current, total, maxVisible) => {
    // if total small, show all
    if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i + 1);

    const pages = [];
    const leftSibling = Math.max(current - 1, 2);
    const rightSibling = Math.min(current + 1, total - 1);

    // Always include first page
    pages.push(1);

    // Decide where to place left ellipsis
    if (leftSibling > 2) {
      // include left nearby (one) then ellipsis
      pages.push("left-ellipsis");
    } else {
      // include pages 2..leftSibling
      for (let p = 2; p <= Math.max(2, leftSibling); p++) pages.push(p);
    }

    // middle range (around current)
    for (let p = leftSibling; p <= rightSibling; p++) {
      if (p > 1 && p < total) pages.push(p);
    }

    // Decide right ellipsis
    if (rightSibling < total - 1) {
      pages.push("right-ellipsis");
    } else {
      for (let p = rightSibling + 1; p <= total - 1; p++) {
        pages.push(p);
      }
    }

    // Always include last page
    if (total > 1) pages.push(total);

    // Deduplicate & keep order
    return pages.filter((v, i, a) => a.indexOf(v) === i);
  };

  const pages = buildPages(currentPage, totalPages, maxVisible);

  const handleClick = (p) => {
    if (p === "left-ellipsis" || p === "right-ellipsis") return;
    if (p === currentPage) return;
    onPageChange(p);
  };

  return (
    <nav aria-label="Pagination" className="w-full flex justify-center mt-8">
      <ul className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-2 shadow-sm border border-gray-100">
        {/* Prev */}
        <li>
          <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`flex items-center justify-center h-8 w-8 rounded-full transition ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed bg-gray-50"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </li>

        {/* Page items */}
        {pages.map((item, idx) =>
          item === "left-ellipsis" || item === "right-ellipsis" ? (
            <li key={`ell-${idx}`} className="px-2 text-gray-400 select-none">…</li>
          ) : (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                aria-current={item === currentPage ? "page" : undefined}
                aria-label={item === currentPage ? `Page ${item}, current page` : `Go to page ${item}`}
                className={`min-w-[36px] h-8 px-3 rounded-full text-sm font-medium transition
                  ${item === currentPage
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"}
                `}
              >
                {item}
              </button>
            </li>
          )
        )}

        {/* Next */}
        <li>
          <button
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`flex items-center justify-center h-8 w-8 rounded-full transition ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed bg-gray-50"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
