import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from 'fumadocs-ui/provider/next';

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cube AI - Secure LLM & Confidential AI Platform",
  description: "Cube AI is an open-source framework for securing Large Language Models (LLMs) with TEEs, built-in governance, and privacy-preserving AI gateways.",
  keywords: ["Cube AI", "secure LLM", "confidential AI", "TEE", "AI gateway", "privacy-preserving AI", "Ollama", "Hugging Face", "enterprise AI"],
  authors: [{ name: "Ultraviolet" }],
  openGraph: {
    title: "Cube AI - Secure LLM & Confidential AI Platform",
    description: "Cube AI is an open-source framework for securing Large Language Models (LLMs) with TEEs, built-in governance, and privacy-preserving AI gateways.",
    images: ["https://ultraviolet.rs/img/header.avif"],
    url: "https://ultraviolet.rs/cube/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cube AI - Secure LLM & Confidential AI Platform",
    description: "Cube AI is an open-source framework for securing Large Language Models (LLMs) with TEEs, built-in governance, and privacy-preserving AI gateways.",
    images: ["https://ultraviolet.rs/img/header.avif"],
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
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
