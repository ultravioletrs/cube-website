import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { createMetadata, baseUrl } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { body: MDX, toc, full } = page.data as any;

    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": page.data.title,
        "description": page.data.description ?? "",
        "url": `https://cube.ultraviolet.rs/docs/${params.slug?.join('/') ?? ''}/`,
        "isPartOf": { "@id": "https://cube.ultraviolet.rs/#website" },
        "author": { "@type": "Organization", "@id": "https://cube.ultraviolet.rs/#organization", "name": "Ultraviolet" },
        "publisher": { "@type": "Organization", "name": "Ultraviolet", "url": "https://ultraviolet.rs" },
        "dateModified": new Date().toISOString().split('T')[0],
    };

    return (
        <>
        <JsonLd data={techArticleSchema} />
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
