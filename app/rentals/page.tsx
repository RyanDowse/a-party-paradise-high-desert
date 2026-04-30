import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GellyballHighlight from "@/components/GellyballHighlight";
import RentalsDirectory from "@/components/RentalsDirectory";
import PromoBanner from "@/components/PromoBanner";
import ContactCta from "@/components/ContactCta";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Party Rental Directory",
  description:
    "Browse bounce house combos, water slides, obstacle courses, tents, tables, photo booths, stages, generators, holiday rentals, and more from A Party Paradise - High Desert.",
};

export default function RentalsPage() {
  return (
    <>
      <PageHeader
        kicker="Rentals"
        title="Everything for Your High Desert Event"
        intro="Bounce houses, water slides, obstacle courses, tables, chairs, tents, photo booths, stages, generators, and seasonal rentals — all delivered, set up, and picked up by our family-owned team."
      />
      <GellyballHighlight />
      <RentalsDirectory />
      <PromoBanner />
      <ContactCta block={siteContent.ctaBlocks.rentals} />
    </>
  );
}
