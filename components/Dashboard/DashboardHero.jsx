import Link from "next/link"

export default function DashboardHero({ title = "My Account", breadcrumbs = ["Home", "My Account"], }) {
    return (
        <section
            className="relative bg-black text-white py-20 md:py-28"
            style={{
                backgroundImage: `url('/shop-hero-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <nav className="text-sm mb-2">
                    {breadcrumbs.map((crumb, i) => (
                        <span key={i}>
                            {i !== 0 && " › "}
                            {i < breadcrumbs.length - 1 ? <Link href="/" className="hover:underline">{crumb}</Link> : <span>{crumb}</span>}
                        </span>
                    ))}
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
        </section>
    )
}
