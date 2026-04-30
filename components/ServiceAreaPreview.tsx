import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function ServiceAreaPreview() {
  const { serviceAreas } = siteContent;
  return (
    <section className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            Coverage
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-4xl">
            Serving the High Desert
          </h2>
          <p className="mt-4 text-base text-[#1E2A3A]/80 sm:text-lg">
            Free delivery to Apple Valley, Hesperia & Victorville. Mileage-based delivery beyond.
          </p>
        </div>
        <ul
          aria-label="Service area cities"
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {serviceAreas.map((city) => (
            <li
              key={city}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1E2A3A] shadow-sm ring-1 ring-[#1E2A3A]/10"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
              {city}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href="/service-area"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E2A3A] px-6 py-3 text-sm font-semibold text-[#1E2A3A] transition hover:bg-[#1E2A3A] hover:text-white"
          >
            See full coverage details
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
