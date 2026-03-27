import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { createMetadata, baseUrl } from '@/lib/metadata';

export default async function Page() {
    const page = source.getPage([]);
    if (!page) notFound();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { body: MDX, toc, full } = page.data as any;

    return (
        <DocsPage toc={toc} full={full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDX components={{ ...defaultMdxComponents }} />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const page = source.getPage([]);
    if (!page) notFound();

    return createMetadata({
        title: 'Cube AI Documentation | Ultraviolet',
        description: page.data.description ?? 'Technical documentation for Cube AI — deploy LLMs inside hardware TEEs, configure the AI Gateway, manage attestation policies, and integrate via OpenAI-compatible APIs.',
        alternates: {
            canonical: '/docs/',
        },
        openGraph: {
            url: `${baseUrl}/docs/`,
            images: [{ url: "/img/cube-ai-docs.png", width: 1200, height: 630, alt: "Cube AI Documentation" }],
        },
        twitter: {
            images: ["/img/cube-ai-docs.png"],
        },
    });
}
