import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from 'fumadocs-ui/provider/next';
import JsonLd from "@/components/JsonLd";
import { baseUrl } from "@/lib/metadata";

const isProd = baseUrl === "https://cube.ultraviolet.rs";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cube.ultraviolet.rs/#website",
  "url": "https://cube.ultraviolet.rs",
  "name": "Cube AI",
  "publisher": { "@id": "https://cube.ultraviolet.rs/#organization" },
};

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Cube AI - Secure LLM & Confidential AI Platform",
  description: "Cube AI is an open-source framework for securing Large Language Models (LLMs) with TEEs, built-in governance, and privacy-preserving AI gateways.",
  authors: [{ name: "Ultraviolet" }],
  robots: isProd
    ? { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
    : { index: false, follow: false },
  openGraph: {
    title: "Cube AI - Secure LLM & Confidential AI Platform",
    description: "Cube AI is an open-source framework for securing Large Language Models (LLMs) with TEEs, built-in governance, and privacy-preserving AI gateways.",
    images: [{ url: "/img/cube-ai-hero.png", width: 1200, height: 630, alt: "Cube AI — Confidential AI Platform" }],
    url: baseUrl,
    type: "website",
    siteName: "Cube AI",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ultravioletrs",
    title: "Cube AI - Secure LLM & Confidential AI Platform",
    description: "Cube AI is an open-source framework for securing Large Language Models (LLMs) with TEEs, built-in governance, and privacy-preserving AI gateways.",
    images: ["/img/cube-ai-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${robotoMono.className} antialiased bg-background font-sans`}
      >
        <RootProvider>
          <JsonLd data={websiteSchema} />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
