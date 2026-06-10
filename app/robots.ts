import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";

export const dynamic = "force-static";

const isProd = baseUrl === "https://www.cube.ultraviolet.rs";

export default function robots(): MetadataRoute.Robots {
  if (!isProd) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
