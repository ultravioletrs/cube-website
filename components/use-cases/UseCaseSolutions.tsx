"use client";

import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { Solution } from "@/lib/use-cases";

interface SolutionsProps {
    solutions: Solution[];
}

export default function UseCaseSolutions({ solutions }: SolutionsProps) {
    return (
        <section className="py-24 bg-neutral-950 text-white border-t border-neutral-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                        How <span className="text-primary">Cube</span> Solves This
                    </h2>
                    <p className="text-neutral-400 text-xl leading-relaxed">
                        Cube AI provides a secure foundation to overcome these industry barriers, combining confidential computing with verifiable governance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => {
                        const Icon = (LucideIcons as any)[solution.icon] || LucideIcons.CheckCircle;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500">
                                    <Icon className="w-32 h-32 text-primary" />
                                </div>
                                <div className="relative z-10 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="relative z-10 text-xl font-bold mb-4">{solution.title}</h3>
                                <p className="relative z-10 text-neutral-400 leading-relaxed">
                                    {solution.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
