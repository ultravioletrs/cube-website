import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.cube.ultraviolet.rs; frame-ancestors 'none'",
  },
];

const cacheHeaders = [
  { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
];

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      { source: "/((?!api/).*)", headers: cacheHeaders },
    ];
  },
};

export default withMDX(nextConfig);
