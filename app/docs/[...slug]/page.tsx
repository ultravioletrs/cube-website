import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { DocAttribution } from '@/components/DocAttribution';
import JsonLd from '@/components/JsonLd';
import { resolveDocAuthors, toSchemaAuthors } from '@/lib/authors';
import { createMetadata, baseUrl } from '@/lib/metadata';
import { source } from '@/lib/source';

type DocsPageData = {
    body: ComponentType<{ components: typeof defaultMdxComponents }>;
    toc: unknown;
    full: boolean;
    authors?: string[];
    lastModified?: string;
};

function resolveLastModified(absolutePath?: string, frontmatterDate?: string) {
    if (frontmatterDate) {
        return frontmatterDate;
    }

    if (absolutePath) {
        const relativePath = path.relative(process.cwd(), absolutePath);

        try {
            return execSync(`git log -1 --format=%cs -- ${JSON.stringify(relativePath)}`, {
                encoding: 'utf8',
                stdio: ['ignore', 'pipe', 'ignore'],
            }).trim();
        } catch {
            try {
                return fs.statSync(absolutePath).mtime.toISOString().split('T')[0];
            } catch {
                return new Date().toISOString().split('T')[0];
            }
        }
    }

    return new Date().toISOString().split('T')[0];
}

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const {
        body: MDX,
        toc,
        full,
        authors: authorIds,
        lastModified,
    } = page.data as DocsPageData;

    const authors = resolveDocAuthors(authorIds);
    const structuredAuthors = toSchemaAuthors(authors);
    const pageUrl = `${baseUrl}/docs/${params.slug?.join('/') ?? ''}/`;
    const dateModified = resolveLastModified(page.absolutePath, lastModified);

    const description = page.data.description
        ?? `${page.data.title} — Cube AI technical reference. Learn how to configure, deploy, and secure LLMs with hardware Trusted Execution Environments.`;

    const techArticleSchema = page.data.title ? {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: page.data.title,
        description,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        url: pageUrl,
        inLanguage: 'en',
        isPartOf: { '@id': `${baseUrl}/#website` },
        author: structuredAuthors.length === 1 ? structuredAuthors[0] : structuredAuthors,
        publisher: { '@type': 'Organization', name: 'Ultraviolet', url: 'https://ultraviolet.rs' },
        dateModified,
    } : null;

    return (
        <>
            {techArticleSchema ? <JsonLd data={techArticleSchema} /> : null}
            <DocsPage toc={toc} full={full}>
                <DocsTitle>{page.data.title}</DocsTitle>
                <DocsDescription>{page.data.description}</DocsDescription>
                <DocAttribution authors={authors} lastModified={dateModified} />
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
            images: [{ url: '/img/cube-ai-docs.png', width: 1200, height: 630, alt: 'Cube AI Documentation' }],
        },
        twitter: {
            images: ['/img/cube-ai-docs.png'],
        },
    });
}
