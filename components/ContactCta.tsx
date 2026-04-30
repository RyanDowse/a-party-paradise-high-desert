import Link from "next/link";
import { siteContent } from "@/data/siteContent";

type CtaBlock = {
  kicker: string;
  h2: string;
  body: string;
  ctaText: string;
};

type Props = {
  block: CtaBlock;
};

export default function ContactCta({ block }: Props) {
  const { business } = siteContent;
  const hasPhone = Boolean(business.phoneHref);

  return (
    <section className="relative overflow-hidden bg-[#1E2A3A] text-[#FAFAF8]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#F97316]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
              {block.kicker}
            </p>
            <h2 className="mt-2 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {block.h2}
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#FAFAF8]/85 sm:text-lg">
              {block.body}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#F97316]/40 transition hover:bg-[#EA6A0A]"
            >
              {block.ctaText}
            </Link>
            {hasPhone && (
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                <svg
                  aria-hidden
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call: {business.phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
