"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Code, Shield } from "lucide-react";

const integrations = [
    {
        name: "Continue",
        description: "The leading open-source AI code assistant for VS Code and JetBrains. Connect Continue to Cube AI for secure, private code completions and chat.",
        logo: "/img/continue-logo.png",
        link: "/docs/integrations/continue",
        icon: Code,
        tags: ["VS Code", "JetBrains", "Autocomplete"],
        fit: "contain",
        padding: "p-6"
    },
    {
        name: "OpenCode",
        description: "A specialized AI-powered code editor designed for privacy-first development environments. Fully compatible with Cube AI's secure LLM backends.",
        logo: "/img/opencode-logo.png",
        link: "/docs/integrations/opencode",
        icon: Cpu,
        tags: ["IDE", "Privacy-First", "Direct Sync"],
        fit: "cover",
        padding: "p-0"
    },
    {
        name: "OpenAI Compatible API",
        description: "Seamlessly integrate with existing OpenAI-compatible SDKs for Python, JavaScript, and more. Secure every request with Personal Access Tokens (PATs) and attested TLS via our proxy.",
        logo: "/img/openai-api-visual.png",
        link: "/docs/api",
        icon: Shield,
        tags: ["OpenAI compatible", "PATs", "Attested TLS"],
        fit: "cover",
        padding: "p-0"
    }
];

const Integrations = () => {
    return (
        <section id="integrations" className="py-32 bg-muted/30 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <header className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-3xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">
                        Built for <span className="text-primary">Integrations</span>
                    </h2>
                    <p className="text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed">
                        Connect your favorite tools to Cube AI&apos;s secure infrastructure and start building confidential AI applications today.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {integrations.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-background border border-border rounded-3xl p-8 flex flex-col h-full hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase tracking-tight text-foreground">{item.name}</h3>
                                    <div className="flex gap-2 mt-1">
                                        {item.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground font-medium mb-8 leading-relaxed flex-grow">
                                {item.description}
                            </p>

                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mb-8 bg-muted group-hover:border-primary/10 transition-colors">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    fill
                                    className={`${item.fit === 'contain' ? 'object-contain' : 'object-cover'} ${item.padding} transition-transform duration-500 group-hover:scale-105`}
                                />
                            </div>

                            <Link
                                href={item.link}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                            >
                                <span>View Integration Doc</span>
                                <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-flex flex-col items-center">
                        <p className="text-muted-foreground font-bold uppercase tracking-widest mb-6">Compatible with your stack</p>
                        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-2xl font-black tracking-tighter">VS CODE</span>
                            <span className="text-2xl font-black tracking-tighter">OLLAMA</span>
                            <span className="text-2xl font-black tracking-tighter">VLLM</span>
                            <span className="text-2xl font-black tracking-tighter">OPENAI SDK</span>
                            <span className="text-2xl font-black tracking-tighter">ATTESTED TLS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
