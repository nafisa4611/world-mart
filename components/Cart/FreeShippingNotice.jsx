"use client"

export default function FreeShippingNotice({ goal = 100, current = 65 }) {
  const progress = Math.min((current / goal) * 100, 100)
  const remaining = goal - current

  return (
    <div className="bg-gray-100 p-4 text-center">
      {remaining > 0 ? (
        <p className="text-sm">
          Add <span className="font-semibold text-primary">${remaining}</span> more to your cart and get free shipping!
        </p>
      ) : (
        <p className="text-sm font-semibold text-green-600">You’ve unlocked free shipping! 🎉</p>
      )}
      <div className="mt-2 h-2 w-full bg-gray-300 rounded-full">
        <div
          className="h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
