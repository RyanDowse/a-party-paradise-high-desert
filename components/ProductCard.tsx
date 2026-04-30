import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/inventoryCatalog";

type Props = {
  product: Product;
  categorySlug: string;
  imageFit?: "cover" | "contain";
};

export default function ProductCard({
  product,
  categorySlug,
  imageFit = "cover",
}: Props) {
  const fit = product.imageFit ?? imageFit;
  const isContain = fit === "contain";
  const containerClass = isContain
    ? "bg-white p-4"
    : "bg-[#F3F4F6]";
  const imageClass = isContain
    ? "object-contain"
    : "object-cover transition-transform duration-500 group-hover:scale-105";
  const quoteHref = `/contact?category=${categorySlug}&item=${product.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#1E2A3A]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#F97316]/40">
      <Link
        href={quoteHref}
        aria-label={`Request quote for ${product.name}`}
        className="block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
      >
        <div
          style={{ aspectRatio: "1/1" }}
          className={`relative w-full ${containerClass}`}
        >
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={imageClass}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-base font-bold text-[#1E2A3A]">
          {product.name}
        </h3>
        {product.dimensions && (
          <p className="text-xs font-medium text-[#1E2A3A]/60">
            {product.dimensions}
          </p>
        )}
        {product.description && (
          <p className="text-xs leading-relaxed text-[#1E2A3A]/70">
            {product.description}
          </p>
        )}
        <p className="text-sm font-semibold text-[#F97316]">{product.priceLabel}</p>
        {product.variants && product.variants.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((v) => (
              <span
                key={v}
                className="inline-flex items-center rounded-full bg-[#1E2A3A]/5 px-2.5 py-0.5 text-xs font-medium text-[#1E2A3A]/70"
              >
                {v}
              </span>
            ))}
          </div>
        )}
        <Link
          href={quoteHref}
          className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#EA6A0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2A3A]"
        >
          Request Quote
          <svg
            aria-hidden
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
