import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Integrations from "@/components/sections/Integrations";
import Gateway from "@/components/sections/Gateway";
import UseCases from "@/components/sections/UseCases";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/JsonLd";

const homepageFAQs = [
  {
    question: "What is Cube AI?",
    answer: "Cube AI is an open-source framework that deploys Large Language Models inside hardware Trusted Execution Environments (TEEs), providing cryptographic guarantees that neither the cloud provider nor infrastructure operators can access your data or model weights.",
  },
  {
    question: "How does TEE isolation work in Cube AI?",
    answer: "Cube AI runs LLM inference inside AMD SEV-SNP or Intel TDX enclaves — hardware-isolated memory regions where code and data are encrypted in use. Remote attestation lets you verify cryptographically that the code running inside the enclave has not been tampered with.",
  },
  {
    question: "Is Cube AI HIPAA compliant?",
    answer: "Cube AI's architecture supports HIPAA compliance by ensuring PHI never leaves the TEE in plaintext, applying automated PII/PHI masking at the AI Gateway layer, and generating cryptographic audit trails for all model interactions.",
  },
  {
    question: "Can Cube AI run on-premises?",
    answer: "Yes. Cube AI is deployment-agnostic and supports on-premise hospital data centers, private cloud environments, and air-gapped government networks — anywhere your data sovereignty requirements demand the AI runs locally.",
  },
  {
    question: "Does Cube AI support OpenAI-compatible APIs?",
    answer: "Yes. Cube AI exposes an OpenAI-compatible REST API, enabling teams to switch from public LLM APIs to confidential AI infrastructure with minimal code changes.",
  },
  {
    question: "Who is behind Cube AI?",
    answer: "Cube AI is developed by Ultraviolet, a member of the Linux Foundation and the Confidential Computing Consortium, with backing from the European Commission and enterprise partners including Nokia, Ericsson, Thales, and Fujitsu.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cube.ultraviolet.rs/#organization",
  "name": "Ultraviolet",
  "url": "https://ultraviolet.rs",
  "description": "Confidential computing and secure AI platform provider",
  "email": "info@ultraviolet.rs",
  "sameAs": [
    "https://github.com/ultravioletrs/cube",
    "https://linkedin.com/company/ultravioletrs",
    "https://twitter.com/ultravioletrs",
  ],
  "memberOf": [
    { "@type": "Organization", "name": "Linux Foundation" },
    { "@type": "Organization", "name": "Confidential Computing Consortium" },
  ],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cube AI",
  "applicationCategory": "SecurityApplication",
  "applicationSubCategory": "AI Security",
  "operatingSystem": "Linux",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://cube.ultraviolet.rs",
  "sameAs": "https://github.com/ultravioletrs/cube",
  "codeRepository": "https://github.com/ultravioletrs/cube",
  "downloadUrl": "https://github.com/ultravioletrs/cube",
  "license": "https://github.com/ultravioletrs/cube/blob/main/LICENSE",
  "description": "Open-source framework for securing LLMs with TEEs, built-in governance, and privacy-preserving AI gateways.",
  "featureList": ["Hardware TEE isolation", "AI Gateway", "PII redaction", "Cryptographic audit trails", "RBAC", "OpenAI-compatible API"],
  "author": { "@type": "Organization", "@id": "https://cube.ultraviolet.rs/#organization", "name": "Ultraviolet" },
};

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={[organizationSchema, softwareApplicationSchema]} />
      <Hero />
      <Partners />
      <Features />
      <Integrations />
      <Gateway />
      <UseCases />
      <FAQ items={homepageFAQs} />
    </div>
  );
}
