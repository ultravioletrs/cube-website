"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Gateway = () => {
    return (
        <section id="enterprise" className="py-24 bg-muted overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Deploy Any LLM Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 uppercase tracking-tight">
                            Deploy <span className="text-muted-foreground">Any LLM</span>
                        </h2>
                        <div className="space-y-6 text-foreground font-medium opacity-80 text-lg leading-relaxed">
                            <p>
                                Deploy any LLM securely with native support for Ollama and Hugging Face.
                                Cube AI simplifies the deployment process while maintaining the highest
                                standards of confidentiality.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span>Protect sensitive user prompts and model weights</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span>Secure, scalable, and compliant execution</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 bg-background rounded-3xl p-8 shadow-sm"
                    >
                        <Image
                            src="/img/ollama.png"
                            alt="Deploy Any LLM with Cube AI"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>

                {/* AI Gateway Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-background rounded-3xl p-8 shadow-sm"
                    >
                        <Image
                            src="/img/ai-gateway.png"
                            alt="AI Gateway in Cube AI"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 uppercase tracking-tight">
                            AI <span className="text-muted-foreground">Gateway</span>
                        </h2>
                        <div className="space-y-6 text-foreground font-medium opacity-80 text-lg leading-relaxed">
                            <p>
                                Built-in <strong className="text-foreground">Security, Observability, and Governance</strong> for AI workloads.
                            </p>
                            <p>
                                The AI Gateway safeguards API communications and enforces
                                compliance policies, ensuring total control over access and usage.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gateway;
