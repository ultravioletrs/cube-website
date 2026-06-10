import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { remarkDirectiveAdmonition } from 'fumadocs-core/mdx-plugins';
import remarkDirective from 'remark-directive';
import { z } from 'zod';

const docsSchema = pageSchema.extend({
    authors: z
        .union([z.string(), z.array(z.string())])
        .transform((value) => Array.isArray(value) ? value : [value])
        .optional(),
    lastModified: z.string().optional(),
});

export const docs = defineDocs({
    dir: 'content/docs',
    docs: {
        schema: docsSchema,
        postprocess: {
            includeProcessedMarkdown: true,
        },
    },
    meta: {
        schema: metaSchema,
    },
});

import remarkMdx from 'remark-mdx';

export default defineConfig({
    mdxOptions: {
        remarkPlugins: [remarkMdx, remarkDirective, remarkDirectiveAdmonition],
    },
});
