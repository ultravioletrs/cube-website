import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { baseUrl } from "@/lib/metadata";
import { source } from "@/lib/source";
import { useCases } from "@/lib/use-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const marketingPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/docs/`, priority: 0.9, changeFrequency: "weekly" },
    ...useCases.map((uc) => ({
      url: `${baseUrl}/use-cases/${uc.slug}/`,
      priority: 0.8 as const,
      changeFrequency: "monthly" as const,
    })),
    { url: `${baseUrl}/imprint/`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/terms/`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/privacy/`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const docsPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  return [...marketingPages, ...docsPages];
}
