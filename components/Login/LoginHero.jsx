
export default function LoginHero({ title, breadcrumbs }) {
  return (
    <section className="relative bg-black text-white py-20 md:py-28"
      style={{
        backgroundImage: `url('/shop-hero-bg.jpg')`,
        backgroundSize: "cover", backgroundPosition: "center",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Breadcrumbs */}
        <nav
          className="flex justify-center items-center text-sm md:text-base text-gray-300 mb-3"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center">
              {idx > 0 && <span className="mx-2">›</span>}
              <span
                className={`${idx === breadcrumbs.length - 1
                  ? "text-white font-semibold"
                  : "hover:text-gray-100"
                  }`}
              >
                {crumb}
              </span>
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
          {title}
        </h1>
      </div>
    </section>
  )
}
