import RentalCard from "./RentalCard";
import { siteContent } from "@/data/siteContent";

export default function RentalsDirectory() {
  const { rentals } = siteContent;
  return (
    <section className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <nav aria-label="Rental groups" className="mb-12 sm:mb-16">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {rentals.groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1E2A3A] shadow-sm ring-1 ring-[#1E2A3A]/10 transition hover:bg-[#F97316] hover:text-white hover:ring-[#F97316] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
                >
                  {g.title}
                  <span className="text-xs opacity-70">
                    {g.items.length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-16 sm:space-y-20">
          {rentals.groups.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="scroll-mt-24"
            >
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl lg:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-3 text-base text-[#1E2A3A]/75">
                  {group.blurb}
                </p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <RentalCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
