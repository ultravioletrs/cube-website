import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getUseCaseBySlug, useCases } from "@/lib/use-cases";

import UseCaseHero from "@/components/use-cases/UseCaseHero";
import UseCaseChallenges from "@/components/use-cases/UseCaseChallenges";
import UseCaseSolutions from "@/components/use-cases/UseCaseSolutions";
import UseCaseDeployments from "@/components/use-cases/UseCaseDeployments";
import UseCaseCTA from "@/components/use-cases/UseCaseCTA";

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

  let keywords = ["Cube AI", "enterprise AI"];
  if (useCase.slug === "financial-services") {
    keywords = ["finance AI", "quantitative trading AI", "SEC compliance AI", "FINRA compliant LLM", "secure banking AI", "confidential computing finance"];
  } else if (useCase.slug === "healthcare") {
    keywords = ["healthcare AI", "HIPAA compliant LLM", "medical AI security", "PHI protection AI", "confidential computing healthcare", "AI for life sciences"];
  } else if (useCase.slug === "government") {
    keywords = ["government AI", "defense AI security", "FedRAMP compliant LLM", "IL4 compliant AI", "zero-trust AI", "sovereign cloud AI"];
  }

  return {
    title: `${useCase.title} AI Solutions | Cube`,
    description: useCase.heroDescription,
    keywords,
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolvedParams = await params;
  const useCase = getUseCaseBySlug(resolvedParams.slug);

  if (!useCase) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
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
      
      <UseCaseCTA 
        heading={useCase.ctaHeading}
        description={useCase.ctaDescription}
      />
    </div>
  );
}
