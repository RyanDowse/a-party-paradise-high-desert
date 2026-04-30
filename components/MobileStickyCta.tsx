import Link from "next/link";
import { siteContent } from "@/data/siteContent";

type Props = { categorySlug: string };

export default function MobileStickyCta({ categorySlug }: Props) {
  const { business } = siteContent;
  const hasPhone = Boolean(business.phoneHref);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-[#1E2A3A]/15 bg-[#FAFAF8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FAFAF8]/90 lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 pt-3 sm:px-6">
        {hasPhone && (
          <a
            href={business.phoneHref}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-[#1E2A3A] px-3 py-2.5 text-sm font-semibold text-[#1E2A3A]"
            aria-label="Call A Party Paradise"
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
            Call
          </a>
        )}
        <Link
          href={`/contact?category=${categorySlug}`}
          className="flex flex-1 items-center justify-center rounded-full bg-[#F97316] px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/30"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
