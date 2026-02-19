import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, MessageSquare, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* About */}
                    <div className="lg:col-span-2">
                        <Image
                            src="/favicon.svg"
                            alt="Ultraviolet"
                            width={100}
                            height={100}
                            className="mb-4"
                        />
                        <h5 className="text-white text-lg font-bold mb-6">About Us</h5>
                        <p className="max-w-xs leading-relaxed">
                            Ultraviolet is a leading company specializing in confidential
                            computing, cloud security, AI/ML, multi-party computation, and
                            secure data sharing.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h5 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Products</h5>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="https://prism.ultraviolet.rs" className="hover:text-white transition-colors">Prism AI</Link>
                            </li>
                            <li>
                                <Link href="https://cocos.ultraviolet.rs" className="hover:text-white transition-colors">Cocos AI</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white">Cube AI</Link>
                            </li>
                        </ul>
                        <h5 className="text-white text-sm font-bold tracking-widest uppercase mt-8 mb-6">Resources</h5>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a
                                    href="https://docs.google.com/presentation/d/1UJR6HKiBV3r56SyMNZvO3ylek8VFmNojbFkTC-bawBY/export/pdf"
                                    className="hover:text-white transition-colors"
                                >
                                    Cube AI Datasheet
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h5 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Legal</h5>
                        <div className="space-y-6">
                            <div>
                                <span className="text-xs font-bold text-neutral-600 block mb-2 tracking-widest">PRISM AI</span>
                                <ul className="space-y-4 text-sm">
                                    <li><Link href="https://ultraviolet.rs/prism/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                                    <li><Link href="https://ultraviolet.rs/prism/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-neutral-600 block mb-2 tracking-widest">CUBE AI</span>
                                <ul className="space-y-4 text-sm">
                                    <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                                    <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Connect & Contact */}
                    <div>
                        <h5 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Connect</h5>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a href="https://twitter.com/ultravioletrs" target="_blank" className="flex items-center space-x-3 hover:text-white transition-colors">
                                    <Twitter className="w-4 h-4" />
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/ultravioletrs" target="_blank" className="flex items-center space-x-3 hover:text-white transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ultravioletrs" target="_blank" className="flex items-center space-x-3 hover:text-white transition-colors">
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>
                            </li>
                        </ul>

                        <h5 className="text-white text-sm font-bold tracking-widest uppercase mt-8 mb-6">Contact</h5>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a href="mailto:info@ultraviolet.rs" className="flex items-center space-x-3 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" />
                                    <span>info@ultraviolet.rs</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://app.gitter.im/#/room/#Ultraviolet_community:gitter.im" target="_blank" className="flex items-center space-x-3 hover:text-white transition-colors">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Chat on Gitter</span>
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>Bulevar Arsenija Carnojevica 103, 11000 Belgrade, Serbia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest">
                    <p>© {new Date().getFullYear()} ULTRAVIOLET. ALL RIGHTS RESERVED.</p>
                    <p className="mt-4 md:mt-0 italic font-mono uppercase">Secure LLM & Confidential AI Platform</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
