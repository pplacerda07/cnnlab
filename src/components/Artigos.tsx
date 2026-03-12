'use client';

import { Calendar, Clock, ArrowRight, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Artigos() {
    return (
        <section id="artigos" className="py-24 md:py-32 w-full bg-white overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#111111] tracking-tight">
                        Artigos em destaque
                    </h2>
                    <p className="text-gray-500 font-light max-w-sm text-sm md:text-base leading-relaxed text-right">
                        Explore artigos e notícias sobre o universo da Cannabis Medicinal e acompanhe tudo o que estamos construindo juntos.
                    </p>
                </div>

                {/* Main Article Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative w-full h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg"
                >
                    {/* Placeholder Background */}
                    <div className="absolute inset-0 bg-neutral-200">
                        {/* Abstract background for the placeholder */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(26,92,45,0.1)_0%,transparent_100%)]" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Target size={120} className="text-brand-dark" />
                        </div>
                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.2)_60%,transparent_100%)]" />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end">
                        {/* Tag */}
                        <div className="flex mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                                <Target size={14} className="text-white" />
                                Guia Click
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-4xl group-hover:translate-x-2 transition-transform duration-500">
                            Click Cannabis encontra na corrida de rua 'parceiro' para promover saúde e bem estar
                        </h3>

                        {/* Meta & Link */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-6 text-white/70 text-sm md:text-base">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>29/04/2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} />
                                    <span>8 minutos de leitura</span>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                                Leia mais sobre <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
