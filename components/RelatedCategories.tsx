import Link from "next/link";
import { getCategory, type Category } from "@/data/inventoryCatalog";

type Props = {
  currentSlug: string;
  relatedSlugs: readonly string[];
};

export default function RelatedCategories({ currentSlug, relatedSlugs }: Props) {
  const related = relatedSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => getCategory(slug))
    .filter((c): c is Category => Boolean(c));

  if (related.length === 0) return null;

  return (
    <section className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            Browse More
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
            Related Rental Categories
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((cat) => (
            <Link
              key={cat.slug}
              href={`/rentals/${cat.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#1E2A3A]/10 transition hover:shadow-md hover:ring-[#F97316]/40"
            >
              <div>
                <p className="font-heading text-base font-bold text-[#1E2A3A]">
                  {cat.title}
                </p>
                <p className="mt-1 text-xs text-[#1E2A3A]/60">
                  {cat.productCountLabel}
                </p>
              </div>
              <span
                aria-hidden
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] transition group-hover:bg-[#F97316] group-hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
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
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/rentals"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:underline"
          >
            View all rental categories
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
      </div>
    </section>
  );
}
