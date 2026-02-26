"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight, Shield, Globe } from "lucide-react";

interface DemoRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DemoRequestModal = ({ isOpen, onClose }: DemoRequestModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-xl bg-background border border-border shadow-2xl rounded-3xl overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-12">
                            <div className="mb-10">
                                <h2 className="text-3xl font-black uppercase tracking-tight text-foreground mb-4">
                                    Get Started with <span className="text-primary">Cube AI</span>
                                </h2>
                                <p className="text-muted-foreground font-medium text-lg">
                                    Choose how you'd like to explore our confidential computing framework for secure AI.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {/* Primary Action: Schedule Demo */}
                                <a
                                    href="https://calendly.com/ultraviolet-cube/demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center gap-6 p-6 bg-primary text-primary-foreground rounded-2xl transition-all hover:opacity-95 shadow-xl shadow-primary/20"
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-0.5">Enterprise</p>
                                        <h3 className="text-xl font-bold">Schedule a Demo</h3>
                                    </div>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>

                                {/* Secondary Action: Web Demo */}
                                <a
                                    href="https://dev.cube.ultraviolet.rs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center gap-6 p-6 bg-muted hover:bg-neutral-200 text-foreground rounded-2xl transition-all border border-border"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-0.5">Sandbox</p>
                                        <h3 className="text-xl font-bold">View Live Demo</h3>
                                    </div>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>

                                {/* Tertiary Action: Documentation */}
                                <a
                                    href="/docs"
                                    className="group relative flex items-center gap-6 p-6 hover:bg-muted text-foreground rounded-2xl transition-all border border-transparent hover:border-border"
                                >
                                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-0.5">Reference</p>
                                        <h3 className="text-xl font-bold text-muted-foreground group-hover:text-foreground">Explore Docs</h3>
                                    </div>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                                </a>
                            </div>

                            <div className="mt-10 pt-8 border-t border-border flex justify-between items-center text-sm font-bold text-muted-foreground">
                                <p>Hardware-Isolated TEEs</p>
                                <p>Confidential Computing</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DemoRequestModal;
