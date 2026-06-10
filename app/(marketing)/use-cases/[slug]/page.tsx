import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getUseCaseBySlug, useCases } from "@/lib/use-cases";
import { createMetadata, baseUrl } from "@/lib/metadata";

const useCaseOgImages: Record<string, string> = {
  "financial-services": "/img/finance-hero.png",
  "healthcare": "/img/healthcare-hero.png",
  "government": "/img/government-hero.png",
};

import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/sections/FAQ";
import UseCaseHero from "@/components/use-cases/UseCaseHero";
import UseCaseChallenges from "@/components/use-cases/UseCaseChallenges";
import UseCaseSolutions from "@/components/use-cases/UseCaseSolutions";
import UseCaseDeployments from "@/components/use-cases/UseCaseDeployments";
import UseCaseCTA from "@/components/use-cases/UseCaseCTA";

const useCaseFAQs: Record<string, { question: string; answer: string }[]> = {
  "financial-services": [
    {
      question: "Is Cube AI compliant with SEC and FINRA regulations?",
      answer: "Cube AI's verifiable compute policies and cryptographic audit trails support compliance with SEC Rule 17a-4 and FINRA requirements for data integrity and access control in AI-assisted trading systems.",
    },
    {
      question: "How does Cube AI protect proprietary trading algorithms?",
      answer: "Trading models run inside hardware TEEs, making model weights and inference logic inaccessible to cloud operators, co-tenants, or unauthorized employees — even with root access to the host system.",
    },
    {
      question: "Can multiple banks collaborate on AI models without sharing raw data?",
      answer: "Yes. Cube AI's attestation layer enables multi-party computation where each institution can verify the model and policies before contributing data, without any party seeing another's raw inputs.",
    },
    {
      question: "What latency overhead does TEE-based inference add?",
      answer: "Typical overhead is 5–15% compared to unprotected inference, depending on workload. For compliance-sensitive use cases, this is an acceptable trade-off versus regulatory and reputational risk.",
    },
    {
      question: "Does Cube AI integrate with existing Bloomberg or Reuters data feeds?",
      answer: "Cube AI's OpenAI-compatible API layer allows integration with any data pipeline. Specific connector support depends on your deployment configuration.",
    },
  ],
  "healthcare": [
    {
      question: "How does Cube AI prevent PHI from entering LLM training data?",
      answer: "Cube AI's AI Gateway applies automated PHI detection and masking (names, SSNs, MRNs, dates of birth) before prompts reach the model, and hardware TEEs ensure the model operator cannot log or access the raw prompt stream.",
    },
    {
      question: "Is Cube AI HIPAA compliant?",
      answer: "Cube AI's architecture supports HIPAA compliance through encrypted-in-use computation, PHI masking, role-based access control, and cryptographic audit logs. Compliance certification requires your specific deployment configuration to be assessed.",
    },
    {
      question: "Can hospitals securely collaborate on AI research without sharing patient records?",
      answer: "Yes. Hardware attestation allows multiple institutions to verify that an agreed model policy is enforced before contributing data. No institution sees another's raw patient records.",
    },
    {
      question: "Does Cube AI support on-premise deployment in hospital data centers?",
      answer: "Yes. Cube AI is designed for environments where data cannot leave the hospital network. Full on-premise deployment is a primary use case.",
    },
    {
      question: "How are medical AI model outputs audited for regulatory purposes?",
      answer: "Every inference request generates a cryptographically signed audit trail stored outside the TEE, providing tamper-evident logs suitable for regulatory review and medical liability documentation.",
    },
  ],
  "government": [
    {
      question: "Is Cube AI FedRAMP aligned?",
      answer: "Cube AI's confidential computing architecture aligns with FedRAMP High baseline controls around data-at-rest and data-in-use encryption, zero-trust access, and audit logging. Formal FedRAMP authorization requires a specific deployment assessment.",
    },
    {
      question: "Can Cube AI operate in air-gapped environments?",
      answer: "Yes. Cube AI supports fully isolated, air-gapped deployments with no external network dependencies for inference. Model updates and attestation verification can be performed offline.",
    },
    {
      question: "How does Cube AI support zero-trust security models?",
      answer: "Cube AI assumes no implicit trust in the host OS, hypervisor, or cloud provider. All sensitive operations are confined to hardware TEEs with cryptographic proof of integrity available at any time via remote attestation.",
    },
    {
      question: "What classification levels can Cube AI support?",
      answer: "Cube AI has been evaluated for environments requiring IL4-equivalent protections. Specific classification level support depends on your hardware platform (AMD SEV-SNP, Intel TDX) and deployment configuration.",
    },
    {
      question: "Does Cube AI support multi-agency data sharing?",
      answer: "Yes. Using hardware attestation, multiple government agencies can share AI infrastructure while maintaining cryptographic guarantees that each agency's data is processed only by authorized models under agreed policies.",
    },
  ],
};

interface UseCasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const useCase = getUseCaseBySlug(resolvedParams.slug);

  if (!useCase) {
    return {};
  }

  return createMetadata({
    title: `${useCase.title} AI Solutions | Cube`,
    description: useCase.heroDescription,
    alternates: {
      canonical: `/use-cases/${useCase.slug}/`,
    },
    openGraph: {
      title: `Cube AI for ${useCase.title}`,
      description: useCase.heroDescription,
      url: `${baseUrl}/use-cases/${useCase.slug}/`,
      images: [{ url: useCaseOgImages[useCase.slug] ?? "/img/cube-ai-hero.png", width: 1200, height: 630, alt: `Cube AI — ${useCase.title}` }],
    },
    twitter: {
      title: `Cube AI for ${useCase.title}`,
      description: useCase.heroDescription,
      images: [useCaseOgImages[useCase.slug] ?? "/img/cube-ai-hero.png"],
    },
  });
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolvedParams = await params;
  const useCase = getUseCaseBySlug(resolvedParams.slug);

  if (!useCase) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cube.ultraviolet.rs/" },
      { "@type": "ListItem", "position": 2, "name": "Use Cases", "item": "https://cube.ultraviolet.rs/use-cases/" },
      { "@type": "ListItem", "position": 3, "name": useCase.title, "item": `https://cube.ultraviolet.rs/use-cases/${useCase.slug}/` },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://cube.ultraviolet.rs/use-cases/${useCase.slug}/#webpage`,
    "url": `https://cube.ultraviolet.rs/use-cases/${useCase.slug}/`,
    "name": `${useCase.title} AI Solutions | Cube`,
    "description": useCase.heroDescription,
    "isPartOf": { "@id": "https://cube.ultraviolet.rs/#website" },
    "breadcrumb": { "@id": `https://cube.ultraviolet.rs/use-cases/${useCase.slug}/#breadcrumb` },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={[breadcrumbSchema, webPageSchema]} />
      <UseCaseHero
        title={useCase.title}
        heroText={useCase.heroText}
        heroDescription={useCase.heroDescription}
        heroImage={useCase.heroImage}
        heroImageAlt={useCase.heroImageAlt}
      />
      
      <UseCaseChallenges challenges={useCase.challenges} />
      
      <UseCaseSolutions solutions={useCase.solutions} />
      
      <UseCaseDeployments 
        heading={useCase.deploymentsHeading}
        description={useCase.deploymentsDescription}
        deployments={useCase.deployments}
        imageUrl={useCase.deploymentImage}
        imageAlt={useCase.deploymentImageAlt}
      />
      
      {useCaseFAQs[useCase.slug] && (
        <FAQ items={useCaseFAQs[useCase.slug]} />
      )}
      <UseCaseCTA
        heading={useCase.ctaHeading}
        description={useCase.ctaDescription}
        currentSlug={useCase.slug}
      />
    </div>
  );
}
