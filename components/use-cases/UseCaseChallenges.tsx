"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Challenge } from "@/lib/use-cases";

interface ChallengesProps {
    challenges: Challenge[];
}

export default function UseCaseChallenges({ challenges }: ChallengesProps) {
    return (
        <section className="py-24 bg-white text-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                        Industry Challenges
                    </h2>
                    <p className="text-neutral-600 text-xl">
                        AI adoption in this sector faces critical hurdles that generic solutions cannot resolve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-red-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                {challenge.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
