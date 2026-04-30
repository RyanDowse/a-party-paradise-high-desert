import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CleaningProtocol from "@/components/CleaningProtocol";
import ContactCta from "@/components/ContactCta";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Cleaning & Safety Process",
  description:
    "How we clean and sanitize every rental between bookings. Lead-free vinyl, commercial cleaners, and waiver-backed safety for High Desert events.",
};

export default function CleaningPage() {
  return (
    <>
      <PageHeader
        kicker="Cleaning & Safety"
        title="Cleaned, Sanitized & Ready for Fun"
        intro="Anywhere a person can touch, we sanitize. Every rental, every setup."
      />
      <CleaningProtocol />
      <section className="bg-[#FAFAF8]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#1E2A3A]/10">
            <span
              aria-hidden
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F97316]/10 text-[#F97316]"
            >
              <svg
                width="24"
                height="24"
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
            <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
              100% lead-free vinyl
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1E2A3A]/80 sm:text-base">
              All inflatables are made from 100% lead-free vinyl. Safety isn&apos;t optional for us — it&apos;s a requirement, especially around kids.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#1E2A3A]/10">
            <span
              aria-hidden
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F97316]/10 text-[#F97316]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9 12 3l9 6v12H3z" />
                <path d="M3 9h18" />
              </svg>
            </span>
            <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
              Setup on most surfaces
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1E2A3A]/80 sm:text-base">
              We set up on grass, dirt, cement, concrete, asphalt, or indoors. Let us know your surface when reserving — a $20 fee applies for dirt or other potentially hazardous surfaces.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F4F6]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-3xl border-2 border-dashed border-[#F97316]/40 bg-white p-8">
            <div className="flex items-start gap-4">
              <span
                aria-hidden
                className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#F97316]/15 text-[#F97316]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
              </span>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#F97316]">
                  Waivers
                </p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
                  Waivers signed before set-up
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#1E2A3A]/80 sm:text-base">
                  Inflatable and Gelly Ball waivers must be completed before set-up or your event. We send digital waiver links along with your booking confirmation — quick to sign, kept on file, and required by our safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCta block={siteContent.ctaBlocks.cleaning} />
    </>
  );
}
