import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQSection from "@/components/FAQSection";
import ContactCta from "@/components/ContactCta";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "FAQ & Booking Policies",
  description:
    "Common questions about cleaning, safety, surfaces, water use, delivery fees, service areas, and event types for A Party Paradise - High Desert.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        kicker="Booking"
        title="FAQ & Policies"
        intro="Quick answers to common booking questions, set-up details, and safety policies."
      />
      <FAQSection />
      <ContactCta block={siteContent.ctaBlocks.faq} />
    </>
  );
}
