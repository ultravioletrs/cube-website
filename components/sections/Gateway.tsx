"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Gateway = () => {
    return (
        <section id="gateway" className="py-24 bg-neutral-50 overflow-hidden">
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
                        <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tight">
                            Deploy <span className="text-neutral-400">Any LLM</span>
                        </h2>
                        <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                            <p>
                                Cube AI empowers organizations to deploy any Large Language Model
                                (LLM) securely and efficiently, integrating seamlessly with
                                leading platforms like Ollama and Hugging Face.
                            </p>
                            <p>
                                With Cube AI, you can protect sensitive user prompts and data by
                                leveraging Trusted Execution Environments (TEEs). This ensures
                                that your AI applications not only perform optimally but also
                                uphold the highest standards of confidentiality and security.
                            </p>
                            <p>
                                Whether you&apos;re working with pre-trained models or fine-tuning your
                                own, Cube AI simplifies the deployment process, enabling secure,
                                scalable, and compliant AI solutions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm"
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
                        className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm"
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
                        <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tight">
                            AI <span className="text-neutral-400">Gateway</span>
                        </h2>
                        <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                            <p>
                                The AI Gateway is a critical component of Cube AI, delivering
                                built-in <strong className="text-black">Security, Observability, and Governance</strong> to AI
                                workloads.
                            </p>
                            <p>
                                This gateway safeguards API communications by implementing
                                advanced security measures, ensuring that data flows and requests
                                to LLMs are handled with confidentiality and integrity.
                            </p>
                            <p>
                                In addition, the AI Gateway enforces governance policies, allowing
                                organizations to control access, usage, and compliance with
                                internal and external regulations.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gateway;
