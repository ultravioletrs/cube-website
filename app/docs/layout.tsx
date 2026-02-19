import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import BrandLogo from '@/components/BrandLogo';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={source.getPageTree()}
            nav={{
                title: <BrandLogo className="h-10 w-auto" height={40} width={104} />,
            }}
        >
            {children}
        </DocsLayout>
    );
}
