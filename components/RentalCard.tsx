import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import type { RentalItem } from "@/data/siteContent";

type Props = {
  item: RentalItem;
  priority?: boolean;
};

export default function RentalCard({ item, priority = false }: Props) {
  return (
    <Link
      href={item.categoryPath}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#1E2A3A]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#F97316]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
    >
      <PlaceholderImage
        src={item.image.src}
        alt={item.image.alt}
        label={item.image.alt}
        aspectRatio="4/3"
        rounded={false}
        imageClassName="transition-transform duration-500 group-hover:scale-105"
        imagePosition={item.image.position}
        priority={priority}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-bold text-[#1E2A3A]">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#1E2A3A]/80">
          {item.body}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] transition group-hover:gap-2.5">
          Browse options
          <svg
            aria-hidden
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
