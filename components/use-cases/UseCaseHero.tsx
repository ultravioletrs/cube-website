"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
    title: string;
    heroText: string;
    heroDescription: string;
    heroImage: string;
    heroImageAlt: string;
}

export default function UseCaseHero({ title, heroText, heroDescription, heroImage, heroImageAlt }: HeroProps) {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background text-foreground">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
                        >
                            Cube AI for {title}
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
                        >
                            {heroText}
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8"
                        >
                            {heroDescription}
                        </motion.p>

                        <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.5, delay: 0.3 }}
                             className="flex flex-wrap gap-4"
                        >
                            <a href="mailto:info@ultraviolet.rs" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                                Talk to Sales
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <Image
                            src={heroImage}
                            alt={heroImageAlt}
                            width={800}
                            height={800}
                            className="w-full h-auto drop-shadow-2xl rounded-2xl"
                            priority
                        />
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
            
            {/* Ambient glows matching existing hero */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
