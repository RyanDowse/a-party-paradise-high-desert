import Link from "next/link";
import type { Category } from "@/data/inventoryCatalog";

type Props = { category: Category };

export default function CategoryHeader({ category }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] to-[#F3F4F6]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F97316]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#1E2A3A]/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-3 text-xs font-medium text-[#1E2A3A]/60">
          <Link href="/rentals" className="hover:text-[#F97316]">
            Rentals
          </Link>
          <span aria-hidden className="mx-2">
            ›
          </span>
          <span aria-current="page" className="text-[#1E2A3A]/80">
            {category.title}
          </span>
        </nav>
        <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
          {category.kicker}
        </p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#1E2A3A] sm:text-4xl lg:text-5xl">
          {category.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#1E2A3A]/80 sm:text-lg">
          {category.intro}
        </p>
        <p className="mt-3 text-sm font-semibold text-[#F97316]">
          {category.productCountLabel}
        </p>
        <Link
          href="/rentals"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#1E2A3A]/70 transition hover:text-[#F97316]"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to all rentals
        </Link>
      </div>
    </section>
  );
}
