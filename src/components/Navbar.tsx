'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getDefaultWhatsAppLink } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Diferencial', href: '#diferencial' },
        { name: 'Como Funciona', href: '#jornada' },
        { name: 'Tratamentos', href: '#patologias' },
        { name: 'Depoimentos', href: '#depoimentos' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <div className="absolute top-0 left-0 right-0 z-50 flex flex-col items-start px-4 md:px-12 lg:px-24 pt-6 md:pt-8 lg:pt-1">
            <nav
                className={cn(
                    'transition-all duration-300 relative w-full',
                    scrolled ? 'py-2' : 'py-3 lg:py-2'
                )}
            >
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col">
                        <Image
                            src="/new_logo.svg"
                            alt="Cannalab Logo"
                            width={190}
                            height={55}
                            priority
                            className="drop-shadow-md"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Hidden */}
                    <div className="hidden">
                        <a
                            href={getDefaultWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-dark text-white hover:bg-brand-dark/90 px-6 py-2.5 rounded-full font-medium text-sm transition-colors shadow-sm"
                        >
                            Falar com um especialista agora no WhatsApp
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2 drop-shadow-md"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden w-full bg-white/90 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl py-4 px-4 flex flex-col space-y-4 mt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-gray-800 p-2 hover:bg-brand-lighter/30 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={getDefaultWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-dark text-white text-center hover:bg-brand-dark/90 px-6 py-3 rounded-full font-medium transition-colors mt-4"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Falar com um especialista agora no WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}