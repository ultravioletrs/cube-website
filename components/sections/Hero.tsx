"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-secondary/20 via-white to-white pointer-events-none" />

            {/* Main Hero Content */}
            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <Image
                            src="/img/cube-ai.png"
                            alt="Cube AI Concept"
                            width={600}
                            height={600}
                            className="w-full h-auto drop-shadow-2xl"
                        />
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl opacity-20 -z-10 rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
                            Confidential AI for <br /><span className="text-neutral-500">The Enterprise</span>
                        </h1>
                        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                            <p>
                                Cube AI is the definitive open-source framework for securing
                                Large Language Models (LLMs) in mission-critical environments.
                                By leveraging state-of-the-art Confidential Computing, we ensure
                                your most sensitive data remains private and protected.
                            </p>
                            <p>
                                Our platform utilizes Trusted Execution Environments (TEEs) to
                                create hardware-isolated enclaves, safeguarding user data and
                                AI models from unauthorized access, even from cloud providers
                                and system administrators.
                            </p>
                            <p>
                                Designed for regulated industries including
                                <strong> healthcare, finance, and government</strong>,
                                Cube AI provides the governance and security infrastructure
                                required to deploy production-grade AI with total confidence.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="mailto:info@ultraviolet.rs"
                                className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl"
                            >
                                Talk to Sales
                            </a>
                            <a
                                href="/docs"
                                className="px-8 py-4 bg-white text-black border-2 border-neutral-200 rounded-full font-bold hover:border-black transition-all"
                            >
                                Documentation
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
