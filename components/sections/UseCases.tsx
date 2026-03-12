"use client";

import React from "react";
import { HeartPulse, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const useCases = [
    {
        title: "Financial Services",
        description: "Protect proprietary algorithms, analyze confidential financial data, and adopt generative AI while strictly adhering to SEC and FINRA compliance frameworks.",
        icon: BarChart3,
        href: "/use-cases/financial-services",
    },
    {
        title: "Healthcare",
        description: "Process patient records, analyze medical imaging, and accelerate medical research without exposing Protected Health Information (PHI) or violating HIPAA.",
        icon: HeartPulse,
        href: "/use-cases/healthcare",
    },
    {
        title: "Government & Defense",
        description: "Deploy generative AI workloads in zero-trust environments. Protect classified intelligence and mission-critical data while strictly adhering to FedRAMP.",
        icon: Shield,
        href: "/use-cases/government",
    },
];

const UseCases = () => {
    return (
        <section id="solutions" className="py-32 bg-neutral-950 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                        Industry <span className="text-primary">Solutions</span>
                    </h2>
                    <p className="text-neutral-400 text-xl">
                        Cube AI is a versatile and reliable solution across various sectors where data security and compliance are paramount.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {useCases.map((useCase, index) => {
                        const CardWrapper = useCase.href ? Link : "div";
                        return (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CardWrapper 
                                    href={useCase.href || "#"}
                                    className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-neutral-900 transition-colors h-full border border-transparent hover:border-neutral-800"
                                >
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                        <useCase.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-5">{useCase.title}</h3>
                                    <p className="text-neutral-400 text-base leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 pt-24 border-t border-neutral-900 text-center"
                >
                    <p className="text-2xl text-neutral-300 mb-10 font-medium">Have questions or want to learn more?</p>
                    <a
                        href="mailto:info@ultraviolet.rs"
                        className="inline-flex px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default UseCases;
