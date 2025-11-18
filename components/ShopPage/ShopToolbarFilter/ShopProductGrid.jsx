import ShopProductCard from "./ShopProductCard";

export default function ShopProductGrid({ products, view }) {
  const gridCols =
    view === "list"
      ? "grid-cols-1"
      : view === "grid-2"
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-2"
      : view === "grid-4"
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3"; // grid-3 default

  return (
    <div className={`grid ${gridCols} gap-4 sm:gap-6`}>
      {products.map((p) => (
        <ShopProductCard key={p.id} product={p} view={view} />
      ))}
    </div>
  );
}
