"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Server } from "lucide-react";
import { Deployment } from "@/lib/use-cases";

interface DeploymentsProps {
    heading: string;
    description: string;
    deployments: Deployment[];
    imageUrl?: string;
    imageAlt?: string;
}

export default function UseCaseDeployments({ heading, description, deployments, imageUrl = "/img/attestation-proof.png", imageAlt = "Hardware Attestation Proof" }: DeploymentsProps) {
    return (
        <section className="py-24 bg-background text-foreground border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                            {heading}
                        </h2>
                        <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                            {description}
                        </p>
                        
                        <div className="space-y-6">
                            {deployments.map((deployment, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border"
                                >
                                    <div className="w-10 h-10 shrink-0 bg-foreground rounded-lg flex items-center justify-center text-background mt-1">
                                        <Server className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{deployment.title}</h4>
                                        <p className="text-muted-foreground">{deployment.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-1/2 w-full flex justify-center"
                    >
                         {/* Real Dashboard Screenshot with premium styling */}
                        <div className="relative group">
                            {/* Decorative background glow */}
                            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.02]">
                                <Image 
                                    src={imageUrl}
                                    alt={imageAlt}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                                
                                {/* Overlay indicating secure status */}
                                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-sm font-mono tracking-tight">ENCLAVE_ACTIVE: VERIFIED</span>
                                    </div>
                                    <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest hidden sm:block">Hardware Root of Trust</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
