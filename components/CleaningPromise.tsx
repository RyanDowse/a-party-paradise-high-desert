import Link from "next/link";

export default function CleaningPromise() {
  return (
    <section className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#1E2A3A]/10 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <span
            aria-hidden
            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EA6A0A] text-white shadow-lg shadow-[#F97316]/30"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Cleaning Promise
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
              Cleaned, sanitized, and ready for fun.
            </h2>
            <p className="mt-3 text-sm text-[#1E2A3A]/80 sm:text-base">
              Every rental is cleaned with commercial vinyl cleaners, disinfected, and sanitized between bookings — anywhere a person can touch.
            </p>
          </div>
          <Link
            href="/cleaning"
            className="inline-flex flex-none items-center justify-center gap-2 rounded-full border-2 border-[#1E2A3A] px-6 py-3 text-sm font-semibold text-[#1E2A3A] transition hover:bg-[#1E2A3A] hover:text-white"
          >
            See our cleaning process
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
