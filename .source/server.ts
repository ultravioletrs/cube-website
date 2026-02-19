// @ts-nocheck
import * as __fd_glob_29 from "../content/docs/ui/ui-overview.md?collection=docs"
import * as __fd_glob_28 from "../content/docs/integrations/opencode.md?collection=docs"
import * as __fd_glob_27 from "../content/docs/integrations/continue.md?collection=docs"
import * as __fd_glob_26 from "../content/docs/developer-guide/private-model-upload.md?collection=docs"
import * as __fd_glob_25 from "../content/docs/developer-guide/index.md?collection=docs"
import * as __fd_glob_24 from "../content/docs/developer-guide/hal.md?collection=docs"
import * as __fd_glob_23 from "../content/docs/developer-guide/fine-tuning.md?collection=docs"
import * as __fd_glob_22 from "../content/docs/developer-guide/cvm-management.md?collection=docs"
import * as __fd_glob_21 from "../content/docs/developer-guide/chat-ui.md?collection=docs"
import * as __fd_glob_20 from "../content/docs/developer-guide/auth-and-request-flow.md?collection=docs"
import * as __fd_glob_19 from "../content/docs/auth/pats.md?collection=docs"
import * as __fd_glob_18 from "../content/docs/api/translations.md?collection=docs"
import * as __fd_glob_17 from "../content/docs/api/speech-to-text.md?collection=docs"
import * as __fd_glob_16 from "../content/docs/api/routes.md?collection=docs"
import * as __fd_glob_15 from "../content/docs/api/overview.md?collection=docs"
import * as __fd_glob_14 from "../content/docs/api/models.md?collection=docs"
import * as __fd_glob_13 from "../content/docs/api/embeddings.md?collection=docs"
import * as __fd_glob_12 from "../content/docs/api/completions.md?collection=docs"
import * as __fd_glob_11 from "../content/docs/api/chat-completions.md?collection=docs"
import * as __fd_glob_10 from "../content/docs/api/authentication.md?collection=docs"
import * as __fd_glob_9 from "../content/docs/vllm.md?collection=docs"
import * as __fd_glob_8 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/guardrails.md?collection=docs"
import * as __fd_glob_6 from "../content/docs/getting-started.md?collection=docs"
import * as __fd_glob_5 from "../content/docs/attestation.md?collection=docs"
import * as __fd_glob_4 from "../content/docs/architecture.md?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/integrations/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/developer-guide/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "api/meta.json": __fd_glob_1, "developer-guide/meta.json": __fd_glob_2, "integrations/meta.json": __fd_glob_3, }, {"architecture.md": __fd_glob_4, "attestation.md": __fd_glob_5, "getting-started.md": __fd_glob_6, "guardrails.md": __fd_glob_7, "index.mdx": __fd_glob_8, "vllm.md": __fd_glob_9, "api/authentication.md": __fd_glob_10, "api/chat-completions.md": __fd_glob_11, "api/completions.md": __fd_glob_12, "api/embeddings.md": __fd_glob_13, "api/models.md": __fd_glob_14, "api/overview.md": __fd_glob_15, "api/routes.md": __fd_glob_16, "api/speech-to-text.md": __fd_glob_17, "api/translations.md": __fd_glob_18, "auth/pats.md": __fd_glob_19, "developer-guide/auth-and-request-flow.md": __fd_glob_20, "developer-guide/chat-ui.md": __fd_glob_21, "developer-guide/cvm-management.md": __fd_glob_22, "developer-guide/fine-tuning.md": __fd_glob_23, "developer-guide/hal.md": __fd_glob_24, "developer-guide/index.md": __fd_glob_25, "developer-guide/private-model-upload.md": __fd_glob_26, "integrations/continue.md": __fd_glob_27, "integrations/opencode.md": __fd_glob_28, "ui/ui-overview.md": __fd_glob_29, });