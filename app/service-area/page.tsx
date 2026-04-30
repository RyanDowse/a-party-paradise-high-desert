import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceArea from "@/components/ServiceArea";
import ContactCta from "@/components/ContactCta";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "We deliver party rentals across the High Desert — Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, and Barstow.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHeader
        kicker="Coverage"
        title="Serving the High Desert"
        intro="Free delivery to Apple Valley, Hesperia & Victorville. Mileage-based delivery beyond. Outside our area? Contact us — we'll let you know."
      />
      <ServiceArea />
      <ContactCta block={siteContent.ctaBlocks.serviceArea} />
    </>
  );
}
