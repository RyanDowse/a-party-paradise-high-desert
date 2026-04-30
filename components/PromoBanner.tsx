import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function PromoBanner() {
  const { promo } = siteContent;
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#EA6A0A] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#1E2A3A]/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-white/80">
              {promo.kicker}
            </p>
            <h2 className="mt-2 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {promo.h2}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              {promo.body}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-none items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-[#1E2A3A] shadow-lg transition hover:bg-[#FAFAF8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {promo.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
