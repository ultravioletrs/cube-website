"use client";

import React from "react";
import Image from "next/image";
import {
    Lock,
    Users,
    Shield,
    Zap,
    MessageSquare,
    Database,
    Globe,
    ShieldAlert
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Private Chat Interface",
        description: "A secure, end-to-end encrypted chat interface for interacting with your LLMs without data leakage.",
        image: "/img/chat-ui.png",
        icon: MessageSquare,
        className: "md:col-span-2 lg:col-span-2",
    },
    {
        title: "Model Registry",
        description: "Manage and deploy any model securely, from open-source to proprietary LLMs.",
        image: "/img/models-registry.png",
        icon: Database,
        className: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Security Guardrails",
        description: "Built-in protection against prompt injection and sensitive data exposure.",
        image: "/img/cube-ai-guardrails.png",
        icon: ShieldAlert,
        className: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Secure Infrastructure",
        description: "Hardware-isolated Trusted Execution Environments (TEEs) protect data during execution.",
        image: "/img/ui/domains.png",
        icon: Globe,
        className: "md:col-span-2 lg:col-span-2",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-black mb-4 uppercase tracking-tight">
                        Built for <span className="text-neutral-500">Security</span>
                    </h2>
                    <p className="text-neutral-600 text-lg font-medium">
                        Powerful features designed to keep your AI workloads private and compliant.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 hover:border-yellow-400/50 transition-all duration-300 ${feature.className}`}
                        >
                            <div className="p-8 pb-0">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                                </div>
                                <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-md">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="relative mt-auto px-8 overflow-hidden h-48 md:h-64">
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent z-10" />
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover object-top rounded-t-xl border-x border-t border-neutral-200 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {[
                        { title: "Fine-grained RBAC", icon: Users, desc: "Robust role-based access control for teams." },
                        { title: "Remote Attestation", icon: Shield, desc: "Verify execution environment integrity." },
                        { title: "Scalable TEEs", icon: Zap, desc: "Production-ready privacy at scale." },
                        { title: "Zero Trust Architecture", icon: Lock, desc: "No trust required in cloud providers." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="p-6 rounded-2xl border border-neutral-100 hover:bg-neutral-50 transition-colors"
                        >
                            <item.icon className="w-6 h-6 text-yellow-500 mb-3" />
                            <h4 className="font-bold text-black mb-1">{item.title}</h4>
                            <p className="text-neutral-500 text-xs">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
