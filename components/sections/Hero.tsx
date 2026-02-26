"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-background">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

            {/* Main Hero Content */}
            <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                            Confidential AI for <br /><span className="text-muted-foreground">The Enterprise</span>
                        </h1>
                        <div className="space-y-8 text-xl md:text-2xl text-foreground font-medium opacity-80 leading-relaxed">
                            <p>
                                The definitive open-source framework for securing
                                Large Language Models in mission-critical environments.
                            </p>
                            <p className="text-xl">
                                Secure your most sensitive data with hardware-isolated Trusted Execution Environments (TEEs)—safe guarding models from unauthorized access, even from cloud providers.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-6">
                            <a
                                href="mailto:info@ultraviolet.rs"
                                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Talk to Sales
                            </a>
                            <Link
                                href="/docs"
                                className="px-8 py-4 bg-background text-foreground border-2 border-border rounded-full font-bold hover:border-foreground transition-all"
                            >
                                Documentation
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <Image
                            src="/img/cube-ai-hero.png"
                            alt="Cube AI - Confidential Computing Enclave"
                            width={800}
                            height={800}
                            className="w-full h-auto drop-shadow-2xl rounded-2xl"
                        />
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl opacity-20 -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
