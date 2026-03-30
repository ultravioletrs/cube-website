import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { createMetadata, baseUrl } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import fs from 'fs';

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { body: MDX, toc, full } = page.data as any;

    const pageUrl = `${baseUrl}/docs/${params.slug?.join('/') ?? ''}/`;
    const dateModified = page.absolutePath
        ? fs.statSync(page.absolutePath).mtime.toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0];

    const description = page.data.description
        ?? `${page.data.title} — Cube AI technical reference. Learn how to configure, deploy, and secure LLMs with hardware Trusted Execution Environments.`;

    const techArticleSchema = page.data.title ? {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": page.data.title,
        "description": description,
        "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
        "url": pageUrl,
        "inLanguage": "en",
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "author": { "@type": "Organization", "@id": `${baseUrl}/#organization`, "name": "Ultraviolet" },
        "publisher": { "@type": "Organization", "name": "Ultraviolet", "url": "https://ultraviolet.rs" },
        "dateModified": dateModified,
    } : null;

    return (
        <>
        {techArticleSchema && <JsonLd data={techArticleSchema} />}
        <DocsPage toc={toc} full={full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDX components={{ ...defaultMdxComponents }} />
            </DocsBody>
        </DocsPage>
        </>
    );
}

export async function generateStaticParams() {
    return source.generateParams().filter((p) => p.slug && p.slug.length > 0);
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const canonical = `/docs/${params.slug?.join('/') ?? ''}/`;
    return createMetadata({
        title: `${page.data.title} | Cube AI Docs`,
        description: page.data.description ?? `${page.data.title} — Cube AI technical reference. Learn how to configure, deploy, and secure LLMs with hardware Trusted Execution Environments.`,
        alternates: {
            canonical,
        },
        openGraph: {
            url: `${baseUrl}${canonical}`,
            images: [{ url: "/img/cube-ai-docs.png", width: 1200, height: 630, alt: "Cube AI Documentation" }],
        },
        twitter: {
            images: ["/img/cube-ai-docs.png"],
        },
    });
}
