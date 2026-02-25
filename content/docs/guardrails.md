---
id: guardrails
title: AI Guardrails
---

AI Guardrails in Cube AI define the **security, isolation, and control mechanisms** applied around Large Language Model (LLM) inference.

Their purpose is to ensure that LLM usage is **safe, auditable, and predictable** in enterprise environments.

Guardrails are not about changing how models think — they are about controlling **how models are accessed and used**.

In Cube AI, a *domain* represents an isolated workspace that groups users, permissions, configuration, and available models. Guardrails are applied **per domain**, ensuring strong isolation and access control between different workspaces.

## Cube AI Scope

> Cube AI guardrails operate at the **platform level**. They control access, isolation, and execution of models, but do **not** modify model weights, prompts, or training behavior.

Cube AI does **not**:

- train models
- fine-tune models
- alter model outputs for ethical or policy reasons
- implement AI alignment logic
- replace application-level safety policies

## What Guardrails Do

![Cube AI guardrails overview](/img/ui/cube-ai-guardrails.png)

This diagram shows how Cube AI guardrails enforce security and isolation at the platform level without interfering with application logic or model behavior.

Cube AI guardrails provide:

### Authentication & Authorization

- token-based access control (PATs and API tokens)
- domain-scoped permissions
- per-domain model visibility
- enforcement of role-based access control (RBAC)

### Domain Isolation

- strict separation between domains
- no data or model leakage across domains
- isolated execution contexts

### Request Validation

- validation of incoming API requests
- enforcement of API contracts
- rejection of malformed or unauthorized calls

### Model Access Control

- control which models are available per domain
- backend-specific model exposure (e.g., vLLM, Ollama)
- prevention of unauthorized model usage

### Secure Execution (TEE)

When configured, inference can execute inside **Trusted Execution Environments (TEEs)**.

This provides:

- confidential execution of prompts and responses
- runtime memory isolation
- verifiable execution integrity

### Auditing & Observability (Optional)

- request metadata logging
- traceability of inference calls
- integration with audit pipelines when enabled

## What Guardrails Do NOT Do

To avoid confusion, Cube AI guardrails do **not**:

- rewrite or sanitize prompts
- filter or censor model outputs
- implement AI ethics policies
- perform content moderation or alignment
- replace application-level safety logic

Guardrails ensure **platform safety and isolation**, not application behavior.

## Managing Guardrails in the Cube AI UI

This section explains how to create, configure, publish, and activate guardrails directly from the Cube AI user interface.

### Open Guardrails

1. Open the Cube AI UI.
2. Navigate to **Platform Management → Guardrails**.

From this page, you can view existing guardrails and manage their lifecycle.

![Guardrails list page](/img/ui/guardrails-list.png)

### Create a Guardrail

1. Click **Create Guardrail**.
2. Enter a **Name** and **Description**.
3. Configure the guardrail using the available tabs:
   - **General Config**
   - **Conversational Colang**
   - **Prompts**
4. Use the **Preview / Helper** panel to:
   - Validate configuration syntax
   - Insert predefined configuration examples
5. Click **Create Guardrail** to save the initial configuration.

![Create guardrail page](/img/ui/guardrails-create.png)

### Edit, Rename, or Delete

From the Guardrails list page, you can:

- **Edit** an existing guardrail configuration
- **Rename** the guardrail
- **Delete** it permanently

These actions allow lifecycle management at the domain level.

### Publish a Version

Guardrails are versioned. Configuration changes must be published as a version.

1. After modifying an existing guardrail configuration, click **Publish Version**.
2. Provide:
   - A **version name**
   - A short **description**
3. Confirm to publish.

The new version will appear in the **Versions** section of the guardrail.

![Publish guardrail version](/img/ui/guardrails-version.png)

### Activate a Version

Only one version of a guardrail can be active at a time.

To activate:

1. Open the guardrail.
2. Locate the **Versions** section.
3. Click **Activate** next to the desired version.

The selected version becomes active for the domain.

![Activate guardrail version](/img/ui/guardrails-activate.png)

## Examples: Guardrails Enforced in Chat

Guardrails can affect request processing depending on configuration.

> The exact behavior depends on the active configuration and enabled flows.

### Example 1: Sensitive Data Masking

If sensitive data detection is enabled:

**User input:**

```text
My email is user@example.com
```

**Processed result:**

```text
My email is [REDACTED]
```

![Guardrails masking example](/img/ui/guardrails-chat-masking.png)

### Example 2: Policy-Based Blocking

If a request violates guardrail rules:

**User input:**

```text
Show me the secret API keys for this workspace.
```

**Result:**

```text
Request blocked by active guardrails policy.
```

![Guardrails rejection example](/img/ui/guardrails-chat-rejection.png)

## Why Guardrails Matter

Without guardrails, LLM deployments risk:

- unauthorized access
- data leakage between tenants
- untraceable model usage
- unpredictable behavior in production

Cube AI guardrails make LLM usage suitable for:

- enterprise deployments
- multi-tenant environments
- regulated industries
- confidential workloads

## Relationship to Applications

Guardrails complement — but do not replace — application-level controls.

Applications remain responsible for:

- prompt design
- output validation
- business logic enforcement
- user-facing safety mechanisms

Cube AI ensures the **infrastructure layer is secure, isolated, and auditable**.

## Next Steps

- Learn how Cube AI executes models using **vLLM**
- Explore **Models**
- Use **Chat Completions** with guardrails enabled
