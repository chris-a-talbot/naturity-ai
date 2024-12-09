// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { Twitter, Github, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-cabinet font-semibold mb-4">NaturityAI</h3>
                        <p className="opacity-80 font-inter">
                            Building AI literacy in biological sciences
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-familjen font-semibold mb-4">Programs</h3>
                        <ul className="space-y-2 font-inter">
                            <li><Link to="/workshops" className="opacity-80 hover:opacity-100">Workshops</Link></li>
                            <li><Link to="/about" className="opacity-80 hover:opacity-100">About</Link></li>
                            <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-familjen font-semibold mb-4">Connect</h3>
                        <div className="flex flex-wrap gap-6 mb-4">
                            <a
                                href="https://x.com/naturityai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                                aria-label="Follow us on X (formerly Twitter)"
                            >
                                <Twitter size={24}/>
                            </a>
                            <a
                                href="https://github.com/NaturityAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                                aria-label="Follow us on GitHub"
                            >
                                <Github size={24}/>
                            </a>
                            <a
                                href="https://www.instagram.com/naturityai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={24}/>
                            </a>
                            <a
                                href="https://www.tiktok.com/@naturityai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                                aria-label="Follow us on TikTok"
                            >
                                <span className="font-familjen font-medium">TikTok</span>
                            </a>
                        </div>
                        <div className="font-inter text-sm opacity-80">
                            <p>Contact: info@naturity.ai</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-inter text-sm opacity-80">
                        <div>
                            © {new Date().getFullYear()} NaturityAI. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:opacity-100">Privacy Policy</Link>
                            <Link to="/terms" className="hover:opacity-100">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};