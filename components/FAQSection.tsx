import { siteContent } from "@/data/siteContent";

export default function FAQSection() {
  const { faq } = siteContent;
  return (
    <section id="faq" className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-10 sm:space-y-12">
          {faq.groups.map((group) => (
            <div key={group.title}>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden className="h-px flex-1 bg-[#F97316]/30" />
                <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
                  {group.title}
                </h2>
                <span aria-hidden className="h-px flex-1 bg-[#F97316]/30" />
              </div>
              <dl className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                {group.items.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#1E2A3A]/10 transition hover:shadow-md sm:p-6"
                  >
                    <dt className="flex items-start gap-3 font-heading text-base font-bold text-[#1E2A3A]">
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#F97316]/15 text-xs font-extrabold text-[#F97316]"
                      >
                        ?
                      </span>
                      {item.q}
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-[#1E2A3A]/80">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border-2 border-dashed border-[#F97316]/40 bg-[#F97316]/5 p-6 sm:flex sm:items-start sm:gap-4">
          <span
            aria-hidden
            className="mb-3 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] sm:mb-0"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7z" />
            </svg>
          </span>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-[#1E2A3A]">
              {faq.waiverNote.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#1E2A3A]/80">
              {faq.waiverNote.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
