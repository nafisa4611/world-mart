import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 7,
}) {
  const buildPages = (current, total, maxVisible) => {
    if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i + 1);

    const pages = [];
    const leftSibling = Math.max(current - 1, 2);
    const rightSibling = Math.min(current + 1, total - 1);

    pages.push(1);

    if (leftSibling > 2) {
      pages.push("left-ellipsis");
    } else {
      for (let p = 2; p <= Math.max(2, leftSibling); p++) pages.push(p);
    }

    for (let p = leftSibling; p <= rightSibling; p++) {
      if (p > 1 && p < total) pages.push(p);
    }

    if (rightSibling < total - 1) {
      pages.push("right-ellipsis");
    } else {
      for (let p = rightSibling + 1; p <= total - 1; p++) {
        pages.push(p);
      }
    }

    if (total > 1) pages.push(total);

    return pages.filter((v, i, a) => a.indexOf(v) === i);
  };

  const pages = buildPages(currentPage, totalPages, maxVisible);

  const handleClick = (p) => {
    if (typeof p !== "number" || p === currentPage) return;
    onPageChange(p);
  };

  return (
    <nav aria-label="Pagination" className="w-full flex justify-center mt-8">
      <ul
        className="
          flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2
          bg-white rounded-full shadow-sm border border-gray-100
          max-w-full overflow-x-auto no-scrollbar
        "
      >
        {/* Prev */}
        <li>
          <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`
              flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full
              transition shrink-0
              ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed bg-gray-50"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((item, i) =>
          item === "left-ellipsis" || item === "right-ellipsis" ? (
            <li key={i} className="px-1 sm:px-2 text-gray-400 select-none">
              …
            </li>
          ) : (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                aria-current={item === currentPage ? "page" : undefined}
                className={`
                  h-8 sm:h-9 px-2 sm:px-3 rounded-full text-xs sm:text-sm font-medium
                  transition shrink-0
                  ${
                    item === currentPage
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-700 hover:bg-gray-100"
                  }
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
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`
              flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full
              transition shrink-0
              ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed bg-gray-50"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
