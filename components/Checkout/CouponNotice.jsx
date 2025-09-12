"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Ticket } from "lucide-react" // optional icon

export default function CouponNotice() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-2xl shadow-md mb-6 transition-all hover:shadow-lg">
      {!open ? (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700 font-medium flex items-center gap-2">
            <Ticket size={18} className="text-blue-500" />
            Have a coupon?{" "}
            <button
              onClick={() => setOpen(true)}
              className="text-blue-600 font-semibold hover:underline"
            >
              Click here to enter your code
            </button>
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-3 items-center mt-2">
          <Input
            placeholder="Enter coupon code"
            className="flex-1 border border-blue-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
          />
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Apply Coupon
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 rounded-lg border-gray-300 hover:bg-gray-100 text-gray-700"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  )
}
