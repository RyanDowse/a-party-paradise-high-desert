import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function GellyballHighlight() {
  const { gellyball } = siteContent;
  return (
    <section className="relative overflow-hidden bg-[#1E2A3A] text-[#FAFAF8]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-[#F97316]/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[5fr_6fr] lg:items-center">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#F97316]/40 to-transparent blur-xl"
          />
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div style={{ aspectRatio: "4/3" }} className="relative w-full">
              <Image
                src={gellyball.image.src}
                alt={gellyball.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            {gellyball.kicker}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {gellyball.h2}
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#FAFAF8]/85 sm:text-lg">
            {gellyball.body}
          </p>
          <ul className="mt-6 space-y-3">
            {gellyball.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#FAFAF8]/90">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#F97316] text-white"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/contact?item=gellyball"
              className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#F97316]/40 transition hover:bg-[#EA6A0A]"
            >
              {gellyball.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
