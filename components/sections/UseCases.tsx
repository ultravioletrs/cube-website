"use client";

import React from "react";
import { HeartPulse, BarChart3, Headset, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
    {
        title: "Healthcare",
        description: "Process patient records securely and generate diagnostic insights without exposing private data or violating regulations.",
        icon: HeartPulse,
    },
    {
        title: "Finance",
        description: "Analyze confidential transactions and detect fraud with robust protections for computational integrity.",
        icon: BarChart3,
    },
    {
        title: "Customer Support",
        description: "Deploy private chatbots capable of handling sensitive queries with complete data security.",
        icon: Headset,
    },
    {
        title: "Enterprise AI",
        description: "Protect proprietary models and sensitive internal data throughout development and deployment.",
        icon: Building2,
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <useCase.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-5">{useCase.title}</h3>
                            <p className="text-neutral-400 text-base leading-relaxed">
                                {useCase.description}
                            </p>
                        </motion.div>
                    ))}
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
