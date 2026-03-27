import type { Metadata } from "next";

export const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://cube.ultraviolet.rs";

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        icons: {
            icon: [
                { url: '/icon.png', sizes: 'any' },
                { url: '/icon.svg', type: 'image/svg+xml' },
            ],
            apple: '/apple-icon.png',
        },
        openGraph: {
            title: override.title ?? "Cube AI",
            description: override.description ?? "Cube AI - Enterprise Confidential Computing Platform",
            url: baseUrl,
            images: [
                {
                    url: "/img/cube-ai-hero.png",
                    width: 1200,
                    height: 630,
                    alt: "Cube AI — Confidential AI Platform",
                },
            ],
            siteName: "Cube AI",
            ...override.openGraph,
        },
        twitter: {
            card: "summary_large_image",
            site: "@ultravioletrs",
            title: override.title ?? "Cube AI",
            description: override.description ?? "Cube AI - Enterprise Confidential Computing Platform",
            images: [
                {
                    url: "/img/cube-ai-hero.png",
                    width: 1200,
                    height: 630,
                    alt: "Cube AI — Confidential AI Platform",
                },
            ],
            ...override.twitter,
        },
    };
}
