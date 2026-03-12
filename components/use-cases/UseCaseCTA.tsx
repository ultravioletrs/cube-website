"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAProps {
    heading: string;
    description: string;
}

export default function UseCaseCTA({ heading, description }: CTAProps) {
    return (
        <section className="relative py-32 bg-neutral-950 text-white overflow-hidden border-t border-white/10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container relative mx-auto px-4 md:px-6">
                <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                        {heading}
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="mailto:info@ultraviolet.rs" 
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 group"
                        >
                            Request a Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link 
                            href="/docs" 
                            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
                        >
                            Read Documentation
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
