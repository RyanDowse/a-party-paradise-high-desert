import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  const { hero, business } = siteContent;
  const hasPhone = Boolean(business.phoneHref);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8] to-[#F3F4F6]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#F97316]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#1E2A3A]/8 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[6fr_5fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F97316]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F97316] ring-1 ring-[#F97316]/30">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
            {hero.kicker}
          </span>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1E2A3A] sm:text-5xl lg:text-6xl">
            {hero.h1}
          </h1>
          <p className="max-w-xl text-base text-[#1E2A3A]/80 sm:text-lg">
            {hero.subhead}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#F97316]/30 transition hover:bg-[#EA6A0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2A3A]"
            >
              {hero.primaryCta}
            </Link>
            {hasPhone ? (
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center rounded-full border-2 border-[#1E2A3A] px-7 py-3.5 text-base font-semibold text-[#1E2A3A] transition hover:bg-[#1E2A3A] hover:text-white"
              >
                {hero.secondaryCta}: {business.phoneDisplay}
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full border-2 border-dashed border-[#1E2A3A]/40 px-7 py-3.5 text-base font-semibold text-[#1E2A3A]/60">
                {hero.secondaryCta}: {business.phoneDisplay}
              </span>
            )}
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm font-medium text-[#1E2A3A]/75">
            {hero.badges.map((b) => (
              <li key={b} className="flex items-center gap-2">
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
                  className="text-[#F97316]"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#F97316]/30 via-[#F97316]/10 to-[#1E2A3A]/15 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-[#1E2A3A]/10">
            <PlaceholderImage
              src={hero.image.src}
              alt={hero.image.alt}
              label={hero.image.alt}
              aspectRatio="4/3"
              rounded={false}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
