

export default function CategoryItem({ name, Icon, sub }) {
  return (
    <div className="px-4 py-2 hover:bg-gray-100">
      {/* Category Name + Icon */}
      <div className="flex items-center gap-2 font-medium text-gray-700">
        {Icon} {/* ✅ already an element */}
        <span>{name}</span>
      </div>

      {/* Subcategories */}
      {sub && (
        <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
          {sub.map((item) => (
            <li key={item} className="hover:text-blue-500 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
