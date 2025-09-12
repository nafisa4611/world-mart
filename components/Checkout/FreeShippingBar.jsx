export default function FreeShippingBar({ current = 50, goal = 100 }) {
  const percent = Math.min((current / goal) * 100, 100)
  const remaining = Math.max(goal - current, 0)

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md mb-6">
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-semibold text-gray-700">
          {remaining > 0
            ? `Add $${remaining} to your cart and get free shipping!`
            : `Congrats! You qualify for free shipping!`}
        </p>
        <span className="text-sm font-medium text-gray-500">{Math.round(percent)}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      {/* Optional microcopy */}
      {remaining > 0 && (
        <p className="text-xs text-gray-500 mt-2">
          Keep adding products to unlock free shipping!
        </p>
      )}
    </div>
  )
}
