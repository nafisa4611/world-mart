"use client"

export default function ProductBreadcrumbs({ breadcrumbs }) {
  return (
    <div className="text-sm text-gray-500 mb-6">
      {breadcrumbs.map((crumb, i) => (
        <span key={i}>
          {crumb.link ? (
            <a href={crumb.link} className="hover:text-blue-600">
              {crumb.label}
            </a>
          ) : (
            <span className="text-gray-800">{crumb.label}</span>
          )}
          {i < breadcrumbs.length - 1 && " › "}
        </span>
      ))}
    </div>
  )
}
