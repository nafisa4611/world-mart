export default function ProductBreadcrumbs({ breadcrumbs }) {
  return (
    <nav
      className="flex items-center text-sm text-gray-500 mb-6 space-x-1"
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((crumb, i) => (
        <span key={i} className="flex items-center">
          {crumb.link ? (
            <a
              href={crumb.link}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {crumb.label}
            </a>
          ) : (
            <span className="text-gray-800 font-semibold">{crumb.label}</span>
          )}
          {i < breadcrumbs.length - 1 && (
            <span className="mx-2 text-gray-400">›</span>
          )}
        </span>
      ))}
    </nav>
  )
}
