import Link from "next/link";
import RentalCard from "./RentalCard";
import { siteContent, type RentalItem } from "@/data/siteContent";

export default function RentalsPreview() {
  const { rentals } = siteContent;
  const allItems: RentalItem[] = rentals.groups.flatMap<RentalItem>((g) => [
    ...g.items,
  ]);
  const featured = rentals.homeFeaturedSlugs
    .map((slug) => allItems.find((i) => i.slug === slug))
    .filter((i): i is RentalItem => Boolean(i));

  return (
    <section className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            {rentals.kicker}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-4xl lg:text-5xl">
            {rentals.h2}
          </h2>
          <p className="mt-4 text-base text-[#1E2A3A]/80 sm:text-lg">
            {rentals.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <RentalCard
              key={item.slug}
              item={item}
              priority={i === 0 && item.image.src === siteContent.hero.image.src}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <Link
            href="/rentals"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#F97316]/30 transition hover:bg-[#EA6A0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2A3A]"
          >
            View all rental categories
            <svg
              aria-hidden
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
          </Link>
          <p className="text-sm text-[#1E2A3A]/70">{rentals.ctaText}</p>
        </div>
      </div>
    </section>
  );
}
