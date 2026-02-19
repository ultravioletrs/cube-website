"use client";

import React from "react";
import {
    Lock,
    Users,
    Plug,
    CheckCircle,
    Code2,
    Cpu,
    Shield,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Secure Data Protection",
        description: "Cube AI uses Trusted Execution Environments (TEEs) to protect both user data and AI models from unauthorized access, ensuring data confidentiality and code integrity during execution.",
        icon: Lock,
    },
    {
        title: "Model Agnosticism",
        description: "Cube AI is agnostic to the underlying model, supporting a range of popular open-source LLMs like Llama, Falcon, and Mistral, as well as proprietary models.",
        icon: Cpu,
    },
    {
        title: "Fine-grained Access Control",
        description: "Manage user permissions with role-based or attribute-based access. Ensure only authorized users can access sensitive workloads and data.",
        icon: Users,
    },
    {
        title: "Scalable and Performant",
        description: "Designed to handle large-scale workloads and demanding AI applications, providing high-performance capabilities while ensuring privacy.",
        icon: Zap,
    },
    {
        title: "End-to-End Encryption",
        description: "Ensures all traffic is encrypted end-to-end, safeguarding sensitive data during transmission between systems and AI-powered applications.",
        icon: Shield,
    },
    {
        title: "Seamless Integration",
        description: "Provides a user-friendly SDK and API, making it easy to integrate with existing systems and AI workflows without extensive rework.",
        icon: Plug,
    },
    {
        title: "Remote Attestation",
        description: "Robust mechanism that ensures the integrity of the system during execution, verifying that AI models are running in a trusted environment.",
        icon: CheckCircle,
    },
    {
        title: "Open Source (Apache 2.0)",
        description: "Transparent, collaborative, and innovative. Released under the Apache 2.0 license, empowering customization and community contribution.",
        icon: Code2,
    },
];

const Features = () => {
    return (
        <section id="enterprise" className="py-24 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-black mb-4 uppercase tracking-tight">
                        Advanced Features
                    </h2>
                    <p className="text-neutral-600 text-lg font-medium">
                        Everything you need to deploy and manage secure LLMs in any environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
