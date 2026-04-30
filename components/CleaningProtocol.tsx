import { siteContent } from "@/data/siteContent";

export default function CleaningProtocol() {
  const { cleaning } = siteContent;
  return (
    <section className="bg-[#F3F4F6]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            {cleaning.kicker}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-4xl">
            {cleaning.h2}
          </h2>
          <p className="mt-4 text-base text-[#1E2A3A]/80">{cleaning.intro}</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {cleaning.steps.map((step, i) => (
            <div
              key={step.num}
              className="relative rounded-2xl bg-white p-6 pt-10 shadow-sm ring-1 ring-[#1E2A3A]/10"
            >
              <div className="absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EA6A0A] font-heading text-xl font-extrabold text-white shadow-lg shadow-[#F97316]/30">
                {step.num}
              </div>
              {i < cleaning.steps.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 sm:block"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
              )}
              <h3 className="font-heading text-lg font-bold text-[#1E2A3A]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E2A3A]/80">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#1E2A3A]/70">
          {cleaning.closingNote}
        </p>
      </div>
    </section>
  );
}
