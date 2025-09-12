export default function ProductIntro({ title, brand }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        {title}
      </h1>
      <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-700 font-medium text-sm shadow-sm border border-gray-200">
        {brand}
      </div>
    </div>
  )
}
