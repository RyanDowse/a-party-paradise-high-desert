import type { MetadataRoute } from "next";
import { siteContent } from "@/data/siteContent";
import { categorySlugs } from "@/data/inventoryCatalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContent.business.websiteUrl.replace(/\/$/, "");
  const now = new Date();
  const topLevel = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/rentals", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/cleaning", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/service-area", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];
  const categoryRoutes = categorySlugs.map((slug) => ({
    path: `/rentals/${slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));
  return [...topLevel, ...categoryRoutes].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
