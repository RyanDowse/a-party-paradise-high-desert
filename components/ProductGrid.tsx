import ProductCard from "./ProductCard";
import type { Product } from "@/data/inventoryCatalog";

type Props = {
  products: readonly Product[];
  categorySlug: string;
  imageFit?: "cover" | "contain";
};

export default function ProductGrid({ products, categorySlug, imageFit }: Props) {
  return (
    <section className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              categorySlug={categorySlug}
              imageFit={imageFit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
