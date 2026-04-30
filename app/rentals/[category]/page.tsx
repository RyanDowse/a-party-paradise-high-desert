import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryHelperNote from "@/components/CategoryHelperNote";
import CategorySeoBlurb from "@/components/CategorySeoBlurb";
import ProductGrid from "@/components/ProductGrid";
import RelatedCategories from "@/components/RelatedCategories";
import MobileStickyCta from "@/components/MobileStickyCta";
import ContactCta from "@/components/ContactCta";
import {
  categorySlugs,
  getCategory,
} from "@/data/inventoryCatalog";
import { siteContent } from "@/data/siteContent";

type Params = Promise<{ category: string }>;

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
    return { title: "Rental Category" };
  }
  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    openGraph: {
      title: cat.seoTitle,
      description: cat.seoDescription,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
    notFound();
  }

  const baseUrl = siteContent.business.websiteUrl.replace(/\/$/, "");
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.title,
    description: cat.intro,
    numberOfItems: cat.products.length,
    itemListElement: cat.products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: `${baseUrl}${p.image.src}`,
        description: p.description ?? p.name,
        ...(p.startingPrice !== undefined
          ? {
              offers: {
                "@type": "Offer",
                price: p.startingPrice,
                priceCurrency: "USD",
                url: `${baseUrl}/contact?category=${cat.slug}&item=${p.slug}`,
              },
            }
          : {}),
      },
    })),
  };

  return (
    <>
      <CategoryHeader category={cat} />
      {cat.helperNote && <CategoryHelperNote note={cat.helperNote} />}
      <ProductGrid
        products={cat.products}
        categorySlug={cat.slug}
        imageFit={cat.imageFit ?? "cover"}
      />
      {cat.seoBlurb && <CategorySeoBlurb blurb={cat.seoBlurb} />}
      <RelatedCategories
        currentSlug={cat.slug}
        relatedSlugs={cat.relatedCategories}
      />
      <ContactCta block={siteContent.ctaBlocks.rentals} />
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileStickyCta categorySlug={cat.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
