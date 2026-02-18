"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Architecture = () => {
    const steps = [
        {
            title: "User Management and Access Control",
            description: "Cube AI includes robust user management features, allowing granular access control for sensitive LLM operations. Role-based permissions ensure that only authorized users can interact with protected models and data.",
        },
        {
            title: "Flexible Model Deployment",
            description: "The platform supports dynamic deployment of AI models, enabling users to upload, manage, and execute models securely. This flexibility allows organizations to adapt to changing needs while ensuring the confidentiality of their intellectual property.",
        },
        {
            title: "HAL (Hardware Abstraction Layer)",
            description: "The Hardware Abstraction Layer provides seamless interaction with a variety of TEE-enabled hardware platforms, including AMD SEV and Intel TDX. This abstraction ensures consistency and efficiency in managing secure computations across different infrastructures.",
        },
        {
            title: "Private and Public Cloud Support",
            description: "Cube AI is designed for hybrid environments, allowing deployment in both private and public clouds. This flexibility ensures scalability and meets diverse operational requirements while maintaining data privacy and security.",
        },
    ];

    return (
        <section id="architecture" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tight">
                            Cube AI <span className="text-neutral-400">Architecture</span>
                        </h2>
                        <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                            Cube AI delivers a groundbreaking architecture focused on
                            protecting large language models (LLMs), user prompts, and
                            associated data through Trusted Execution Environments (TEEs).
                        </p>
                        <p className="text-neutral-500 leading-relaxed italic border-l-4 border-neutral-900 pl-6">
                            It ensures the secure handling of sensitive requests and datasets,
                            empowering organizations to confidently deploy and use advanced AI
                            models in a protected environment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100"
                    >
                        <Image
                            src="/img/cube-architecture.png"
                            alt="Cube AI Architecture"
                            width={800}
                            height={600}
                            className="w-full h-auto drop-shadow-xl"
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-12"
                        >
                            <div className="absolute left-0 top-0 w-8 h-8 bg-neutral-900 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
