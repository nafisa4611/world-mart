import ShopProductCard from "./ShopProductCard";

export default function ShopProductGrid({ products, view }) {
  // dynamic grid columns
  const gridCols =
    view === "list"
      ? "grid-cols-1"
      : view === "grid-2"
      ? "grid-cols-2"
      : view === "grid-4"
      ? "grid-cols-4"
      : "grid-cols-3"; // default

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {products.map((p) => (
        <ShopProductCard key={p.id} product={p} view={view} />
      ))}
    </div>
  );
}
