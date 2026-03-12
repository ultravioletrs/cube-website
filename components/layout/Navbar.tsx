"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import DemoRequestModal from "@/components/DemoRequestModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "FEATURES", href: "#architecture" },
        { 
            name: "USE CASES", 
            href: "#solutions",
            dropdown: [
                { name: "Financial Services", href: "/use-cases/financial-services" },
                { name: "Healthcare & Life Sciences", href: "/use-cases/healthcare" },
                { name: "Government & Defense", href: "/use-cases/government" },
            ]
        },
        { name: "ENTERPRISE", href: "#enterprise" },
        { name: "DOCUMENTATION", href: "/docs" },
        { name: "CONTACT", href: "mailto:info@ultraviolet.rs" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-3"
                    : "bg-background border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <BrandLogo height={40} width={104} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />}
                                </Link>
                                {link.dropdown && (
                                    <div className="absolute top-full left-0 mt-6 w-64 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                                        {link.dropdown.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                href={sublink.href}
                                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                                            >
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="https://github.com/ultravioletrs/cube"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                        <button
                            onClick={() => setIsDemoModalOpen(true)}
                            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md cursor-pointer"
                        >
                            Request Demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-foreground p-2"
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
                        className="lg:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="space-y-2">
                                    <Link
                                        href={link.href}
                                        className="block text-sm font-medium text-muted-foreground"
                                        onClick={() => {
                                            if (!link.dropdown) setIsOpen(false);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 space-y-2 border-l-2 border-border ml-2 mt-2">
                                            {link.dropdown.map((sublink) => (
                                                <Link
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    className="block text-sm text-muted-foreground hover:text-foreground"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 flex flex-col gap-4 border-t border-border">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsDemoModalOpen(true);
                                    }}
                                    className="w-full py-3 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md"
                                >
                                    Request Demo
                                </button>
                                <Link
                                    href="https://github.com/ultravioletrs/cube"
                                    target="_blank"
                                    className="flex items-center space-x-2 text-sm font-medium text-muted-foreground"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <DemoRequestModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </nav>
    );
};

export default Navbar;
