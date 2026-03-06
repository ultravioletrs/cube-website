"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe } from "lucide-react";
import { useTheme } from "next-themes";

interface DemoRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GOOGLE_CAL_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2go-uvRkTNc0XR_6kDLKXLBgBoTZ4AgevaBshsjgQqxSFmuV7DJCMp2HWvOLu5EdeJtHPCguCz";

const DemoRequestModal = ({ isOpen, onClose }: DemoRequestModalProps) => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
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
                        className="relative w-full max-w-4xl h-[95dvh] sm:h-[90vh] overflow-hidden bg-background border border-border shadow-2xl rounded-2xl sm:rounded-3xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-muted transition-colors z-50 text-foreground"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-4 sm:p-8 md:p-12 h-full flex flex-col">
                            <div className="mb-4 sm:mb-6 pr-8 sm:pr-10">
                                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                                    Book a <span className="text-primary">Demo</span>
                                </h2>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2">
                                    Schedule your live demo session with the Cube AI team.
                                </p>
                            </div>

                            <div className="flex-grow rounded-xl sm:rounded-2xl overflow-hidden border border-border">
                                <iframe
                                    src={GOOGLE_CAL_URL}
                                    className="w-full h-full"
                                    style={{
                                        border: 0,
                                        filter: isDark
                                            ? "invert(1) hue-rotate(180deg)"
                                            : "none",
                                    }}
                                    title="Schedule a Demo with Cube AI"
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 px-2">
                                <Globe className="w-3 h-3" />
                                <span>Secured via Google Calendar</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DemoRequestModal;
