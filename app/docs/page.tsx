import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import defaultMdxComponents from 'fumadocs-ui/mdx';

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

    return {
        title: page.data.title,
        description: page.data.description,
    };
}
