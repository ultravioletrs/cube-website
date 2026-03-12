export interface Challenge {
  title: string;
  description: string;
}

export interface Solution {
  title: string;
  description: string;
  icon: string;
}

export interface Deployment {
  title: string;
  description: string;
}

export interface UseCase {
  slug: string;
  title: string;
  heroText: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  deploymentImage: string;
  deploymentImageAlt: string;
  challenges: Challenge[];
  solutions: Solution[];
  deploymentsHeading: string;
  deploymentsDescription: string;
  deployments: Deployment[];
  ctaHeading: string;
  ctaDescription: string;
}

export const useCases: UseCase[] = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    heroText: "Secure AI for Healthcare & Life Sciences",
    heroDescription: "Process patient records, analyze medical imaging, and accelerate medical research without exposing Protected Health Information (PHI) or violating HIPAA regulations.",
    heroImage: "/img/healthcare-hero.png",
    heroImageAlt: "Abstract glowing data cube with medical symbols for Healthcare AI",
    deploymentImage: "/img/attestation-proof.png",
    deploymentImageAlt: "Hardware Attestation Proof for Healthcare Data Sovereignty",
    challenges: [
      {
        title: "PHI Leakage into Training Data",
        description: "Healthcare providers cannot risk patient data being secretly ingested into public LLM training datasets, leading to massive HIPAA violations.",
      },
      {
        title: "Siloed Medical Research",
        description: "Sharing sensitive datasets across institutions for collaborative research is frequently blocked by privacy concerns and a lack of verifiable trust.",
      },
      {
        title: "Prompt Injection & Exfiltration",
        description: "Medical AI models are vulnerable to adversarial attacks that could trick them into revealing sensitive patient histories or diagnostic algorithms.",
      }
    ],
    solutions: [
      {
        title: "Confidential Computing (TEEs)",
        description: "Run LLMs inside Hardware Trusted Execution Environments. Memory is fully encrypted, proving to auditors that PHI is never accessible to infrastructure providers.",
        icon: "Shield",
      },
      {
        title: "Secure Research Collaboration",
        description: "Utilize hardware attestation and verifiable policies to mathematically prove to all collaborating hospitals that their data is only used by authorized models.",
        icon: "Network",
      },
      {
        title: "Automated PHI Masking",
        description: "Cube's AI Gateway actively detects and sanitizes PHI (names, SSNs, medical record numbers) from prompts prior to reaching the model.",
        icon: "Database",
      }
    ],
    deploymentsHeading: "Deploy Where Your Patient Data Lives",
    deploymentsDescription: "Healthcare data often cannot leave the hospital network. Cube focuses on giving you total control over where your AI runs.",
    deployments: [
      {
        title: "On-Premise Hospital Data Centers",
        description: "Deploy Cube entirely within your physical infrastructure to ensure PHI never leaves the local network, with full hardware attestation."
      },
      {
        title: "Dedicated Healthcare Cloud",
        description: "Run within HIPAA-compliant dedicated VPCs on AWS, Azure, or GCP using specialized confidential compute instances."
      }
    ],
    ctaHeading: "Ready to secure your healthcare AI?",
    ctaDescription: "Talk to our team to see how Cube can help you deploy compliant LLMs directly within your hospital environment."
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    heroText: "Secure AI for Banking & Financial Services",
    heroDescription: "Protect proprietary trading algorithms, analyze confidential financial data, and adopt generative AI while strictly adhering to SEC and FINRA compliance frameworks.",
    heroImage: "/img/finance-hero.png",
    heroImageAlt: "Abstract glowing data cube with financial charts and shields for Financial Services AI",
    deploymentImage: "/img/attestation-proof.png",
    deploymentImageAlt: "Cryptographic Hardware Proof for Financial Trading Enclaves",
    challenges: [
      {
        title: "Proprietary Algorithm Theft",
        description: "Quantitative models and alpha-generating strategies are a firm's most valuable IP; exposing them to public LLM APIs risks immediate competitive loss.",
      },
      {
        title: "PII & Financial Data Leaks",
        description: "Processing customer account details, social security numbers, and transaction histories via AI presents massive regulatory exposure if data is retained or leaked.",
      },
      {
        title: "Strict SEC & FINRA Auditing",
        description: "Regulations require immutable, always-on audit trails for every automated action and data access request to ensure market fairness and privacy.",
      }
    ],
    solutions: [
      {
        title: "Hardware-Rooted IP Protection (TEEs)",
        description: "Deploy models inside Confidential Computing enclaves where memory is encrypted in use. Not even cloud providers or infrastructure admins can access your trading logic.",
        icon: "Shield",
      },
      {
        title: "Automated PII Redaction",
        description: "Cube's AI Gateway actively detects and masks PII and financial identifiers from prompts before processing, ensuring zero sensitive data exposure.",
        icon: "Database",
      },
      {
        title: "Cryptographic Audit Trails",
        description: "Maintain a continuous, verifiable log of every request, trace ID, and attestation event to seamlessly satisfy SEC/FINRA compliance audits.",
        icon: "FileCheck",
      }
    ],
    deploymentsHeading: "Sovereign Infrastructure for Low-Latency Finance",
    deploymentsDescription: "High-frequency trading and secure banking require infrastructure that never compromises on performance or data sovereignty.",
    deployments: [
      {
        title: "Bare-Metal On-Premises",
        description: "Deploy directly onto your own hardware within your private data centers for ultra-low latency execution and total physical control."
      },
      {
        title: "Dedicated Financial Cloud VPCs",
        description: "Run securely within isolated cloud environments using specialized confidential compute instances (e.g., AWS Nitro Enclaves)."
      }
    ],
    ctaHeading: "Ready to secure your financial AI?",
    ctaDescription: "Speak with our enterprise specialists to learn how Cube enables compliant AI adoption for the world's most secure financial institutions."
  },
  {
    slug: "government",
    title: "Government & Defense",
    heroText: "Sovereign AI for Government & Defense",
    heroDescription: "Deploy generative AI workloads in zero-trust environments. Protect classified intelligence and mission-critical data while strictly adhering to FedRAMP and IL4+ compliance requirements.",
    heroImage: "/img/government-hero.png",
    heroImageAlt: "Abstract glowing data cube with padlocks and military shields for Government AI",
    deploymentImage: "/img/attestation-proof.png",
    deploymentImageAlt: "Sovereign Attestation for Defense and Intelligence Workloads",
    challenges: [
      {
        title: "Foreign Intelligence Interception",
        description: "Adversary states and foreign intelligence agencies constantly target government workloads. Sending sensitive data to public cloud APIs is an unacceptable national security risk.",
      },
      {
        title: "Strict Compliance Mandates",
        description: "Agencies must navigate complex regulatory frameworks like FedRAMP, DoD IL4/IL5/IL6, and FIPS 140-2/3 to legally operate software.",
      },
      {
        title: "Air-Gapped Operational Needs",
        description: "Military and defense applications often occur in disconnected, intermittent, or limited bandwidth (DIL) edge environments that cannot rely on cloud connectivity.",
      }
    ],
    solutions: [
      {
        title: "Zero-Trust Hardware Enclaves (TEEs)",
        description: "Run AI models inside physically isolated memory enclaves. Even with physical access to the server, bad actors cannot extract the model weights or training data.",
        icon: "Shield",
      },
      {
        title: "Strict Role-Based Access Control (RBAC)",
        description: "Granular permission systems ensure only authorized personnel and cleared applications can interact with specific AI services or access audit logs.",
        icon: "Users",
      },
      {
        title: "Cryptographic Attestation",
        description: "Generate mathematical proof that the AI server is running the exact, untampered software stack required by defense mandates before releasing decryption keys.",
        icon: "Lock",
      }
    ],
    deploymentsHeading: "Deploy Securely from the Cloud to the Tactical Edge",
    deploymentsDescription: "Cube is designed for extreme operational flexibility, allowing defense agencies to assert total sovereign control over their AI infrastructure.",
    deployments: [
      {
        title: "Strictly Air-Gapped Environments",
        description: "Deploy Cube entirely offline within secure facilities (SCIFs) or tactical edge nodes with zero outbound internet requirements."
      },
      {
        title: "On-Premise Sovereign Clouds",
        description: "Run your AI within highly classified, dedicated government clouds that meet massive scalability and strict data residency requirements."
      }
    ],
    ctaHeading: "Ready to secure your public sector AI?",
    ctaDescription: "Speak with our defense specialists to learn how Cube enables mission-critical AI adoption in the world's most secure environments."
  }
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}
