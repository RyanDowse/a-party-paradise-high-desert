import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const { business, footer, serviceAreas, nav } = siteContent;
  const year = new Date().getFullYear();
  const hasPhone = Boolean(business.phoneHref);
  const hasEmail = Boolean(business.emailHref);
  const social = business.social;
  return (
    <footer className="bg-[#1E2A3A] text-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-heading text-lg font-bold">{business.name}</p>
            <p className="mt-3 text-sm text-[#FAFAF8]/80">{footer.blurb}</p>
            <p className="mt-3 text-xs text-[#FAFAF8]/60">
              Serving {serviceAreas.join(" · ")}
            </p>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-[#FAFAF8]/70">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FAFAF8] hover:text-[#F97316]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-[#FAFAF8]/70">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                {hasPhone ? (
                  <a
                    href={business.phoneHref}
                    className="text-[#FAFAF8] hover:text-[#F97316]"
                  >
                    {business.phoneDisplay}
                  </a>
                ) : (
                  <span className="text-[#FAFAF8]/70">{business.phoneDisplay}</span>
                )}
              </li>
              <li>
                {hasEmail ? (
                  <a
                    href={business.emailHref}
                    className="break-all text-[#FAFAF8] hover:text-[#F97316]"
                  >
                    {business.email}
                  </a>
                ) : (
                  <span className="text-[#FAFAF8]/70">{business.email}</span>
                )}
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-[#FAFAF8]/70">
              Follow
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAFAF8] hover:text-[#F97316]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAFAF8] hover:text-[#F97316]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAFAF8] hover:text-[#F97316]"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#FAFAF8]/15 pt-6 text-xs text-[#FAFAF8]/60 sm:flex-row sm:items-center">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          {footer.privacyLabel && <span>{footer.privacyLabel}</span>}
        </div>
      </div>
    </footer>
  );
}
