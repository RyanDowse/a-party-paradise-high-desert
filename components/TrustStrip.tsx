import { siteContent } from "@/data/siteContent";

const ICONS: Record<string, React.ReactNode> = {
  truck: (
    <>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  spray: (
    <>
      <path d="M9 4h4v3H9z" />
      <path d="M11 7v2" />
      <path d="M5 11h12v9H5z" />
      <path d="M9 16h4" />
    </>
  ),
  heart: (
    <path d="M12 21s-7-5-7-11a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6-7 11-7 11z" />
  ),
  pin: (
    <>
      <path d="M12 21s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2" />
    </>
  ),
};

export default function TrustStrip() {
  const items = siteContent.trustStrip;
  return (
    <section className="bg-[#1E2A3A] text-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30"
                aria-hidden
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
                  {ICONS[item.icon]}
                </svg>
              </span>
              <span className="block">
                <span className="block font-heading text-sm font-bold">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-xs text-[#FAFAF8]/70">
                  {item.body}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
