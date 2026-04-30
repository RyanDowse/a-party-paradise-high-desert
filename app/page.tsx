import Hero from "@/components/Hero";
import RentalsPreview from "@/components/RentalsPreview";
import TrustStrip from "@/components/TrustStrip";
import PromoBanner from "@/components/PromoBanner";
import CleaningPromise from "@/components/CleaningPromise";
import ServiceAreaPreview from "@/components/ServiceAreaPreview";
import ContactCta from "@/components/ContactCta";
import { siteContent } from "@/data/siteContent";

export default function Home() {
  return (
    <>
      <Hero />
      <RentalsPreview />
      <TrustStrip />
      <PromoBanner />
      <CleaningPromise />
      <ServiceAreaPreview />
      <ContactCta block={siteContent.ctaBlocks.home} />
    </>
  );
}
