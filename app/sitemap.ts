import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";
import { baseUrl } from "@/lib/metadata";
import { source } from "@/lib/source";
import { useCases } from "@/lib/use-cases";

function fileMtime(relativePath: string): Date {
  try {
    return fs.statSync(path.join(process.cwd(), relativePath)).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const marketingPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "weekly", lastModified: fileMtime("app/(marketing)/page.tsx") },
    { url: `${baseUrl}/docs/`, priority: 0.9, changeFrequency: "weekly", lastModified: fileMtime("app/docs/page.tsx") },
    ...useCases.map((uc) => ({
      url: `${baseUrl}/use-cases/${uc.slug}/`,
      priority: 0.8 as const,
      changeFrequency: "monthly" as const,
      lastModified: fileMtime("app/(marketing)/use-cases/[slug]/page.tsx"),
    })),
    { url: `${baseUrl}/imprint/`, priority: 0.3, changeFrequency: "yearly", lastModified: fileMtime("app/(marketing)/imprint/page.tsx") },
    { url: `${baseUrl}/terms/`, priority: 0.3, changeFrequency: "yearly", lastModified: fileMtime("app/(marketing)/terms/page.tsx") },
    { url: `${baseUrl}/privacy/`, priority: 0.3, changeFrequency: "yearly", lastModified: fileMtime("app/(marketing)/privacy/page.tsx") },
  ];

  const docsPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
    lastModified: page.absolutePath ? fs.statSync(page.absolutePath).mtime : new Date(),
  }));

  return [...marketingPages, ...docsPages];
}
