import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function ServiceArea() {
  const { serviceArea } = siteContent;
  return (
    <section id="service-area" className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            {serviceArea.kicker}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-4xl">
            {serviceArea.h2}
          </h2>
          <p className="mt-4 text-base text-[#1E2A3A]/80">{serviceArea.body}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#F97316]/30 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F97316] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              <svg
                aria-hidden
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {serviceArea.freeArea.badge}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
              {serviceArea.freeArea.title}
            </h3>
            <p className="mt-2 text-sm text-[#1E2A3A]/75">
              {serviceArea.freeArea.note}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceArea.freeArea.cities.map((city) => (
                <li
                  key={city}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F97316]/10 px-4 py-2 text-sm font-semibold text-[#1E2A3A] ring-1 ring-[#F97316]/30"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                  {city}
                </li>
              ))}
            </ul>
          </article>
          <article className="relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#1E2A3A]/15 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E2A3A] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {serviceArea.extendedArea.badge}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
              {serviceArea.extendedArea.title}
            </h3>
            <p className="mt-2 text-sm text-[#1E2A3A]/75">
              {serviceArea.extendedArea.note}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceArea.extendedArea.cities.map((city) => (
                <li
                  key={city}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1E2A3A]/5 px-4 py-2 text-sm font-semibold text-[#1E2A3A] ring-1 ring-[#1E2A3A]/15"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#1E2A3A]" />
                  {city}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mt-8 rounded-3xl bg-[#1E2A3A] p-7 text-[#FAFAF8] shadow-sm sm:p-10">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            Delivery & Setup Details
          </p>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {serviceArea.deliveryDetails.map((detail) => (
              <li key={detail.title} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30"
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
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <p className="font-heading font-bold text-[#FAFAF8]">
                    {detail.title}
                  </p>
                  <p className="mt-1 text-sm text-[#FAFAF8]/80">
                    {detail.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-sm text-[#1E2A3A]/80">
            {serviceArea.outsideAreaNote}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#F97316]/30 transition hover:bg-[#EA6A0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2A3A]"
          >
            {serviceArea.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
