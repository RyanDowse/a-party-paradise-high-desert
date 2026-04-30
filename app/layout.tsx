import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle =
  "A Party Paradise - High Desert | Bounce House & Party Rentals in Apple Valley, Victorville & the High Desert";
const defaultDescription =
  "Rent bounce house combos, water slides, tables, chairs, and tents in Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley & Barstow. Call (760) 265-8652 for a free High Desert party rental quote.";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s | A Party Paradise - High Desert",
  },
  description: defaultDescription,
  metadataBase: new URL(siteContent.business.websiteUrl),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteContent.business.websiteUrl,
    type: "website",
    locale: "en_US",
    siteName: siteContent.business.name,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteContent.business.name,
  telephone: "+1-760-265-8652",
  email: siteContent.business.email,
  url: siteContent.business.websiteUrl,
  areaServed: siteContent.serviceAreas.map((city) => ({
    "@type": "City",
    name: `${city}, CA`,
  })),
  sameAs: [
    siteContent.business.social.facebook,
    siteContent.business.social.instagram,
    siteContent.business.social.tiktok,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#FAFAF8] font-sans text-[#1E2A3A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
