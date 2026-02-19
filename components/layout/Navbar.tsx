"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "SOLUTIONS", href: "#solutions" },
        { name: "ARCHITECTURE", href: "#architecture" },
        { name: "DOCUMENTATION", href: "/docs" },
        { name: "ENTERPRISE", href: "#enterprise" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-neutral-200 py-3"
                    : "bg-white border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <BrandLogo mode="light" height={30} width={78} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                        <Link
                            href="https://github.com/ultravioletrs/cube"
                            target="_blank"
                            className="text-neutral-600 hover:text-black transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-black p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-neutral-200 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="space-y-2">
                                    <Link
                                        href={link.href}
                                        className="block text-sm font-medium text-neutral-600"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                            <div className="pt-4 border-t border-neutral-100">
                                <Link
                                    href="https://github.com/ultravioletrs/cube"
                                    target="_blank"
                                    className="flex items-center space-x-2 text-sm font-medium text-neutral-600"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
