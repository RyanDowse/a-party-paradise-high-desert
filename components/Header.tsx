import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Header() {
  const { business, nav } = siteContent;
  const hasPhone = Boolean(business.phoneHref);

  const callButtonClass =
    "inline-flex items-center justify-center rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#EA6A0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2A3A]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2A3A]/10 bg-[#FAFAF8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FAFAF8]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center" aria-label={`${business.name} – home`}>
          <Image
            src={business.logoSrc}
            alt={business.name}
            width={192}
            height={128}
            priority
            className="h-14 w-auto sm:h-16"
          />
          <span className="sr-only">{business.name}</span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex xl:gap-6"
        >
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              variant="desktop"
            />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {hasPhone ? (
            <a href={business.phoneHref} className={callButtonClass}>
              <span className="hidden sm:inline">Call:&nbsp;</span>
              {business.phoneDisplay}
            </a>
          ) : (
            <Link
              href="/contact"
              className={callButtonClass}
              aria-label="Phone number not yet set — request a quote instead"
            >
              Call: {business.phoneDisplay}
            </Link>
          )}
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
