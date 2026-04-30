import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free High Desert party rental quote. We'll confirm availability and pricing for your event in Victorville, Hesperia, Apple Valley, and surrounding areas.",
};

export default function ContactPage() {
  const { contact, business, serviceAreas } = siteContent;
  const hasPhone = Boolean(business.phoneHref);
  const hasEmail = Boolean(business.emailHref);

  return (
    <>
      <PageHeader
        kicker={contact.kicker}
        title={contact.h2}
        intro={contact.intro}
      />
      <section className="bg-[#F3F4F6]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
            <aside className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#1E2A3A]/10 sm:p-8">
                <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
                  Who you&apos;re contacting
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#1E2A3A]/80 sm:text-base">
                  {contact.aboutBlurb}
                </p>
                <hr className="my-6 border-[#1E2A3A]/10" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E2A3A]/60">
                    Call
                  </p>
                  {hasPhone ? (
                    <a
                      href={business.phoneHref}
                      className="mt-1 inline-block font-heading text-2xl font-bold text-[#F97316] hover:text-[#EA6A0A]"
                    >
                      {business.phoneDisplay}
                    </a>
                  ) : (
                    <p className="mt-1 font-heading text-2xl font-bold text-[#1E2A3A]/60">
                      {business.phoneDisplay}
                    </p>
                  )}
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E2A3A]/60">
                    Email
                  </p>
                  {hasEmail ? (
                    <a
                      href={business.emailHref}
                      className="mt-1 inline-block break-all text-sm font-medium text-[#1E2A3A] underline hover:text-[#F97316]"
                    >
                      {business.email}
                    </a>
                  ) : (
                    <p className="mt-1 break-all text-sm font-medium text-[#1E2A3A]/70">
                      {business.email}
                    </p>
                  )}
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1E2A3A]/60">
                    Service Area
                  </p>
                  <p className="mt-1 text-sm text-[#1E2A3A]/80">
                    {serviceAreas.join(" · ")}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-dashed border-[#F97316]/40 bg-[#F97316]/5 p-5 text-sm text-[#1E2A3A]/80">
                Demo form only — no data is submitted to any service. To book, please call directly.
              </div>
            </aside>
            <div>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
