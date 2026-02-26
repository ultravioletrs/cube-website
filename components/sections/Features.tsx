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
    ShieldAlert,
    ArrowUpRight,
    X as CloseIcon
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        title: "Platform Overview",
        description: "A comprehensive dashboard for managing secure AI domains, providing a bird's-eye view of your entire infrastructure.",
        image: "/img/ui/domain-overview.png",
        icon: Globe,
        className: "md:col-span-2 lg:col-span-2",
        docsLink: "/docs/ui/overview",
    },
    {
        title: "Platform Gateways",
        description: "Fine-grained routing and policy enforcement for all AI traffic, ensuring secure and efficient communication.",
        image: "/img/ui/routes.png",
        icon: Zap,
        className: "md:col-span-1 lg:col-span-1",
        docsLink: "/docs/ui/domains",
    },
    {
        title: "Security Guardrails",
        description: "Real-time protection against prompt injection, sensitive data exposure, and other AI-specific vulnerabilities.",
        image: "/img/ui/guardrails.png",
        icon: ShieldAlert,
        className: "md:col-span-1 lg:col-span-1",
        docsLink: "/docs/guardrails",
    },
    {
        title: "Model Management",
        description: "Securely manage, deploy, and monitor both open-source and proprietary LLMs across your organization.",
        image: "/img/ui/models.png",
        icon: Database,
        className: "md:col-span-2 lg:col-span-2",
        docsLink: "/docs/vllm",
    },
    {
        title: "Audit & Compliance",
        description: "Full transparency with detailed audit logs of every interaction, ensuring strict compliance and accountability.",
        image: "/img/ui/audit-logs.png",
        icon: Users,
        className: "md:col-span-2 lg:col-span-2",
        docsLink: "/docs/security/audit-logs",
    },
    {
        title: "Secure Chat",
        description: "End-to-end encrypted chat interface powered by verifiable hardware attestation for maximum privacy.",
        image: "/img/chat-ui.png",
        icon: MessageSquare,
        className: "md:col-span-1 lg:col-span-1",
        docsLink: "/docs/attestation",
    },
];

const BrowserFrame = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <div
        className={`relative rounded-2xl overflow-hidden border border-border bg-muted shadow-2xl transition-all duration-300 ${onClick ? "cursor-zoom-in hover:border-primary/30" : ""
            }`}
        onClick={onClick}
    >
        <div className="h-8 bg-muted border-b border-border flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="bg-background relative aspect-[16/10]">
            {children}
        </div>
    </div>
);

const Features = () => {
    const [selectedImage, setSelectedImage] = React.useState<{ src: string; title: string } | null>(null);

    return (
        <section id="architecture" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <header className="text-center max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">
                        Platform <span className="text-primary">Features</span>
                    </h2>
                    <p className="text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed">
                        Real-world tools designed to keep your AI workloads private, compliant, and secure.
                    </p>
                </header>

                {/* Hero Feature: Platform Overview */}
                <div className="mb-48">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest mb-6">
                            <Globe className="w-4 h-4" />
                            <span>Central Management</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
                            {features[0].title}
                        </h3>
                        <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                            {features[0].description}
                        </p>
                        <Link
                            href={features[0].docsLink}
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                        >
                            <span>Explore Documentation</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-6xl mx-auto"
                    >
                        <BrowserFrame onClick={() => setSelectedImage({ src: features[0].image, title: features[0].title })}>
                            <Image
                                src={features[0].image}
                                alt={features[0].title}
                                fill
                                className="object-cover object-left-top p-0.5"
                                quality={100}
                                priority
                            />
                        </BrowserFrame>
                    </motion.div>
                </div>

                {/* Alternating Features */}
                <div className="space-y-48 mb-48">
                    {features.slice(1).map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}
                            >
                                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black text-foreground mb-6 uppercase tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <Link
                                    href={feature.docsLink!}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                                >
                                    <span>Learn More</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative aspect-video rounded-3xl overflow-hidden border border-primary/5 bg-muted shadow-xl cursor-zoom-in group transition-all duration-300 hover:border-primary/20 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                                    }`}
                                onClick={() => setSelectedImage({ src: feature.image, title: feature.title })}
                            >
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="transition-transform duration-500 group-hover:scale-[1.02] object-cover object-left-top p-0.5"
                                    quality={100}
                                />

                                {/* Attestation Callout for Secure Chat */}
                                {feature.title === "Secure Chat" && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className="absolute top-6 right-6 z-20 flex flex-col items-end pointer-events-none"
                                    >
                                        <div className="bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl p-4 shadow-2xl max-w-[200px]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex -space-x-1">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                </div>
                                                <span className="text-xs font-black uppercase tracking-widest text-primary">Verified</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Shield className="w-4 h-4 text-primary" />
                                                <span className="text-sm font-bold text-foreground">Hardware TEE</span>
                                            </div>
                                            <p className="text-[10px] leading-tight text-muted-foreground font-medium">
                                                End-to-end encryption backed by verifiable hardware attestation.
                                            </p>
                                        </div>
                                        {/* Connecting Line / Arrow Effect */}
                                        <div className="mr-8 mt-1 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Secondary Features Grid */}
                <div className="relative pt-32 border-t border-primary/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Remote Attestation", icon: Shield, desc: "Hardware-level proof of execution integrity." },
                            { title: "Verifiable Policies", icon: Lock, desc: "Crypographically signed attestation policies." },
                            { title: "Fine-grained RBAC", icon: Users, desc: "Robust role-based access control for teams." },
                            { title: "Zero Trust TAs", icon: Zap, desc: "Production-ready privacy at scale using TEEs." }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="group p-8 rounded-3xl hover:bg-muted transition-all duration-300 border border-transparent hover:border-primary/10"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-black uppercase tracking-tight text-foreground mb-3 text-lg">{item.title}</h4>
                                <p className="text-muted-foreground text-base font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox / Zoom Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-2xl p-4 md:p-8 lg:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-7xl h-fit max-h-full flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-full flex items-center justify-between mb-4 md:mb-6">
                                <h3 className="text-lg md:text-3xl font-black uppercase tracking-tight text-foreground">{selectedImage.title}</h3>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="p-2 md:p-3 rounded-full bg-muted shadow-lg hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                                >
                                    <CloseIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                                </button>
                            </div>

                            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-primary/20 bg-muted/50 shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.3)] group">
                                <div className="relative aspect-[16/10] w-full max-h-[75vh]">
                                    <Image
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        fill
                                        className="object-contain p-1 md:p-2"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Features;
