"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, Globe } from "lucide-react";

interface DemoRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

declare global {
    interface Window {
        Calendly?: any;
    }
}

const DemoRequestModal = ({ isOpen, onClose }: DemoRequestModalProps) => {
    const [step, setStep] = useState<"form" | "calendly">("form");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate a small delay for premium feel
        setTimeout(() => {
            setStep("calendly");
            setIsLoading(false);
        }, 600);
    };

    useEffect(() => {
        if (step === "calendly" && isOpen) {
            // Load Calendly Script if not already loaded
            if (!document.getElementById("calendly-script")) {
                const script = document.createElement("script");
                script.id = "calendly-script";
                script.src = "https://assets.calendly.com/assets/external/widget.js";
                script.async = true;
                document.body.appendChild(script);

                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://assets.calendly.com/assets/external/widget.css";
                document.head.appendChild(link);

                script.onload = () => initCalendly();
            } else {
                initCalendly();
            }
        }
    }, [step, isOpen]);

    const initCalendly = () => {
        if (window.Calendly) {
            window.Calendly.initInlineWidget({
                url: "https://calendly.com/ultraviolet-cube/demo",
                parentElement: document.getElementById("calendly-embed-container"),
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    customAnswers: {
                        a1: formData.company,
                        a2: formData.message,
                    },
                },
                utm: {},
            });
        }
    };

    // Reset step when modal closes
    useEffect(() => {
        if (!isOpen) {
            setStep("form");
        }
    }, [isOpen]);

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
                        className={`relative w-full overflow-hidden bg-background border border-border shadow-2xl rounded-3xl transition-all duration-500 ${step === "calendly" ? "max-w-4xl h-[90vh]" : "max-w-xl h-auto"
                            }`}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors z-50 text-foreground"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className={`p-8 md:p-12 h-full flex flex-col ${step === "calendly" ? "overflow-hidden" : ""}`}>
                            {step === "form" ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-black uppercase tracking-tight text-foreground mb-3">
                                            Request <span className="text-primary">Demo</span>
                                        </h2>
                                        <p className="text-muted-foreground font-medium">
                                            Experience how Cube AI secures enterprise LLMs. Fill in your details to schedule a live demo.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                                                    Full Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                                                    Work Email
                                                </label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                                                Company Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Acme Inc."
                                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                                                Tell us about your use case
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="I want to secure our internal LLM infrastructure..."
                                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-foreground"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            disabled={isLoading}
                                            type="submit"
                                            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
                                        >
                                            {isLoading ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    <span>Continue to Schedule</span>
                                                    <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>

                                        <div className="pt-4 text-center">
                                            <button
                                                type="button"
                                                onClick={() => setStep("calendly")}
                                                className="text-xs font-bold text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
                                            >
                                                Skip to calendar
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="mb-6 mr-10">
                                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
                                            Select a <span className="text-primary">Time</span>
                                        </h2>
                                        <p className="text-muted-foreground text-sm">
                                            Schedule your demo session with the Cube AI team.
                                        </p>
                                    </div>

                                    <div
                                        id="calendly-embed-container"
                                        className="calendly-inline-widget flex-grow w-full rounded-2xl overflow-hidden"
                                        style={{ minHeight: "600px" }}
                                    />

                                    <div className="mt-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 px-2">
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-3 h-3" />
                                            <span>Secure Session</span>
                                        </div>
                                        <button
                                            onClick={() => setStep("form")}
                                            className="hover:text-primary transition-colors cursor-pointer"
                                        >
                                            ← Back to form
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DemoRequestModal;
