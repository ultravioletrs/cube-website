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
    Maximize2,
    X as CloseIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        title: "Platform Overview",
        description: "A comprehensive dashboard for managing secure AI domains, providing a bird's-eye view of your entire infrastructure.",
        image: "/img/ui/domain-overview.png",
        icon: Globe,
        className: "md:col-span-2 lg:col-span-2",
    },
    {
        title: "Platform Gateways",
        description: "Fine-grained routing and policy enforcement for all AI traffic, ensuring secure and efficient communication.",
        image: "/img/ui/routes.png",
        icon: Zap,
        className: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Security Guardrails",
        description: "Real-time protection against prompt injection, sensitive data exposure, and other AI-specific vulnerabilities.",
        image: "/img/ui/guardrails.png",
        icon: ShieldAlert,
        className: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "Model Management",
        description: "Securely manage, deploy, and monitor both open-source and proprietary LLMs across your organization.",
        image: "/img/ui/models.png",
        icon: Database,
        className: "md:col-span-2 lg:col-span-2",
    },
    {
        title: "Audit & Compliance",
        description: "Full transparency with detailed audit logs of every interaction, ensuring strict compliance and accountability.",
        image: "/img/ui/audit-logs.png",
        icon: Users,
        className: "md:col-span-2 lg:col-span-2",
    },
    {
        title: "Secure Chat",
        description: "End-to-end encrypted chat interface powered by verifiable hardware attestation for maximum privacy.",
        image: "/img/chat-ui.png",
        icon: MessageSquare,
        className: "md:col-span-1 lg:col-span-1",
    },
];

const Features = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    return (
        <section id="architecture" className="py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
                        Platform <span className="text-primary">Features</span>
                    </h2>
                    <p className="text-muted-foreground text-xl font-medium">
                        Real-world tools designed to keep your AI workloads private, compliant, and secure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl border border-border bg-muted hover:border-primary/50 transition-all duration-300 cursor-pointer ${feature.className}`}
                            onClick={() => setSelectedImage(feature.image)}
                        >
                            <div className="p-8 pb-0">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-300">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-md">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="relative mt-auto h-[350px] md:h-[450px] overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
                                    quality={100}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                                        <Maximize2 className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-muted to-transparent z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {[
                        { title: "Remote Attestation", icon: Shield, desc: "Hardware-level proof of execution integrity." },
                        { title: "Verifiable Policies", icon: Lock, desc: "Crypographically signed attestation policies." },
                        { title: "Fine-grained RBAC", icon: Users, desc: "Robust role-based access control for teams." },
                        { title: "Zero Trust TEEs", icon: Zap, desc: "Production-ready privacy at scale using TEEs." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="p-6 rounded-2xl border border-border hover:bg-muted transition-colors"
                        >
                            <item.icon className="w-6 h-6 text-primary mb-3" />
                            <h4 className="font-bold text-foreground mb-1 text-lg">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl max-h-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                            <div className="relative w-full h-full p-4 md:p-8">
                                <Image
                                    src={selectedImage}
                                    alt="Enhanced View"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Features;
