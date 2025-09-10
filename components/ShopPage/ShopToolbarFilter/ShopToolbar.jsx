"use client";

import { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Grid2x2,
  Grid3x3,
  LayoutGrid,
  List,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function ShopToolbar({
  perPage = 9,
  setPerPage,
  sort,
  setSort,
  view,
  setView,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-between items-center bg-white shadow-sm border border-gray-100 rounded-xl px-5 py-4 mb-6">
      {/* Left side: Nav Menu */}
      <div className="flex items-center">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="/"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-blue-600 font-semibold border-b-2 border-blue-600"
          >
            Shop
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-200 ml-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-5 w-5 text-gray-700" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700" />
          )}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-white border rounded-lg shadow-md flex flex-col items-start p-4 space-y-2 md:hidden z-50">
            <a
              href="/"
              className="text-gray-600 hover:text-blue-600 w-full"
            >
              Home
            </a>
            <a
              href="/shop"
              className="text-blue-600 font-semibold border-b-2 border-blue-600 w-full"
            >
              Shop
            </a>
          </div>
        )}
      </div>

      {/* Right side: Show count + View toggle + Sorting */}
      <div className="flex items-center gap-6 mt-3 md:mt-0">
        {/* Show count selector */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
          <span className="text-gray-700">Show:</span>
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={String(perPage)}
            onValueChange={(val) => val && setPerPage(Number(val))}
            aria-label="Items per page"
            className="flex items-center gap-1"
          >
            {[9, 12, 18, 24].map((num) => (
              <ToggleGroupItem
                key={num}
                value={String(num)}
                className="rounded-md px-3 py-1 transition-colors hover:bg-gray-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
              >
                {num}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* View toggle */}
        <ToggleGroup
          type="single"
          value={view}
          onValueChange={(val) => val && setView(val)}
          variant="outline"
          size="sm"
          aria-label="Grid/List view"
          className="flex gap-1"
        >
          <ToggleGroupItem
            value="list"
            aria-label="List view"
            className="rounded-md px-2 py-2 transition hover:bg-gray-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            <List className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="grid-2"
            aria-label="2-column grid"
            className="rounded-md px-2 py-2 transition hover:bg-gray-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            <Grid2x2 className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="grid-3"
            aria-label="3-column grid"
            className="rounded-md px-2 py-2 transition hover:bg-gray-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            <Grid3x3 className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="grid-4"
            aria-label="4-column grid"
            className="rounded-md px-2 py-2 transition hover:bg-gray-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Sorting dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="rounded-md border-gray-300 bg-white hover:bg-gray-50 transition flex items-center gap-2"
            >
              <span className="text-gray-700">{sort}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 shadow-lg rounded-lg"
          >
            {[
              "Default sorting",
              "Sort by popularity",
              "Sort by average rating",
              "Sort by newness",
              "Sort by price: low to high",
              "Sort by price: high to low",
            ].map((opt) => (
              <DropdownMenuItem
                key={opt}
                onClick={() => setSort(opt)}
                className="cursor-pointer hover:bg-gray-100"
              >
                {opt}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
