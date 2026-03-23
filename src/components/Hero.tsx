'use client';

import { generateWhatsAppLink, getDefaultWhatsAppLink } from '@/lib/whatsapp';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex text-center lg:text-left items-center justify-center pt-40 lg:pt-48 pb-20 overflow-hidden">
            {/* Full SVG Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#0a150e]">
                <img
                    src="/new_backgorund.svg"
                    alt="Background Cannalab"
                    className="absolute inset-0 w-full h-full object-cover object-[center_top] opacity-80"
                />
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 mt-10 md:mt-0 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-8 w-full max-w-6xl text-center">

                    <h1 className="text-white leading-[1.1] tracking-tight flex flex-col font-sans uppercase drop-shadow-2xl text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold mx-auto">
                        <span className="block mb-1 drop-shadow-lg whitespace-normal md:whitespace-nowrap">
                            Cannabis medicinal com
                        </span>
                        <span className="block mb-1 drop-shadow-lg whitespace-normal md:whitespace-nowrap">
                            acompanhamento real,
                        </span>
                        <span className="block drop-shadow-lg whitespace-normal md:whitespace-nowrap">
                            do início ao fim.
                        </span>
                    </h1>

                    <p className="text-white/95 text-lg md:text-[1.35rem] font-medium max-w-4xl mt-0 drop-shadow-xl text-shadow-sm">
                        Do médico especializado à autorização na ANVISA. Com humano em cada etapa.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
                        <Link
                            href="#quiz"
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 backdrop-blur-md text-white font-semibold py-3 px-6 rounded-full border border-white/20 shadow-lg transition-all duration-300 flex justify-center items-center gap-2 text-sm md:text-base"
                        >
                            Começar meu tratamento <ArrowRight size={18} />
                        </Link>

                        <a
                            href={getDefaultWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 backdrop-blur-md text-white font-semibold py-3 px-6 rounded-full border border-white/20 shadow-lg transition-all duration-300 flex justify-center items-center gap-2 text-sm md:text-base"
                        >
                            <MessageCircle size={18} /> Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}