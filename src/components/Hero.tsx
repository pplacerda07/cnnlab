'use client';

import { useState, useEffect } from 'react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { ShieldCheck, Stethoscope, FileCheck, ArrowRight, ArrowLeft } from 'lucide-react';

const CONDITIONS = [
    'Ansiedade', 'Insônia', 'Dor Crônica', 'Depressão', 'Fibromialgia', 'Outra Condição'
];

const HERO_IMAGES = [
    '/new_backgorund.svg',
];

export default function Hero() {
    const [step, setStep] = useState(1);
    const [selectedCondition, setSelectedCondition] = useState('');
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [activeImage, setActiveImage] = useState(0);

    // Background image is unified, no need for active carousel
    useEffect(() => {
        // Keeps hydrated client but no visual switching needed
    }, []);

    const handleConditionSelect = (condition: string) => {
        setSelectedCondition(condition);
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) return;
        const message = `Olá! Meu nome é ${formData.name}. Gostaria de entender como a CannaLab pode me ajudar com o tratamento para ${selectedCondition}. Meu número é ${formData.phone}.`;
        window.open(generateWhatsAppLink(message), '_blank');
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-20 md:py-32 overflow-hidden">
            {/* Full SVG Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#0a150e]">
                <img
                    src="/new_backgorund.svg"
                    alt="Background CannaLab"
                    className="absolute inset-0 w-full h-full object-cover object-[center_top] opacity-80"
                />
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 mt-10 md:mt-0">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 w-full">

                        <div className="lg:w-3/5 w-full relative z-10 flex flex-col justify-center max-w-2xl xl:max-w-3xl">
                            <h1 className="text-white leading-[1.1] tracking-tight flex flex-col font-sans uppercase drop-shadow-2xl">
                                <span className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold block mb-1 drop-shadow-lg">
                                    bem-estar
                                </span>
                                <span className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold block mb-1 drop-shadow-lg">
                                    em sua <span className="font-serif italic font-normal lowercase opacity-90 text-[1.15em] tracking-normal">forma</span>
                                </span>
                                <span className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold block drop-shadow-lg">
                                    mais pura
                                </span>
                            </h1>
                        </div>

                        {/* Right Side - Form Card */}
                        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto flex-shrink-0">
                            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl p-6 md:p-8 border border-white/50 relative overflow-hidden">

                                {/* Form Progress */}
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                        {step === 1 ? 'Qual é a sua principal condição?' : 'Estamos quase lá!'}
                                    </h3>
                                    <div className="flex gap-1 text-sm font-bold bg-brand-lightest/30 px-2 py-1 rounded-full text-brand-dark">
                                        <span>{step}/2</span>
                                    </div>
                                </div>

                                {/* Step 1: Condition Selection */}
                                {step === 1 && (
                                    <div className="space-y-3 animation-fade-in">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {CONDITIONS.map((condition) => (
                                                <button
                                                    key={condition}
                                                    onClick={() => handleConditionSelect(condition)}
                                                    className="w-full text-left py-3.5 px-4 rounded-xl border border-gray-200 hover:border-brand-dark hover:bg-brand-lightest/30 transition-all text-[15px] font-medium text-gray-700 hover:text-brand-dark flex items-center justify-between group"
                                                >
                                                    {condition}
                                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-dark" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Lead Info */}
                                {step === 2 && (
                                    <div className="animation-fade-in">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="flex items-center gap-1.5 text-sm text-gray-400 font-medium hover:text-brand-dark mb-5 transition-colors"
                                        >
                                            <ArrowLeft size={16} /> Voltar
                                        </button>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="p-3 bg-brand-lightest/20 rounded-xl border border-brand-lighter/50 mb-4 text-sm text-brand-dark">
                                                Condição selecionada:<br /><span className="font-bold text-base">{selectedCondition}</span>
                                            </div>

                                            <div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-brand-dark transition-all text-gray-800 placeholder:text-gray-400 font-medium text-[15px]"
                                                    placeholder="Seu nome completo"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    required
                                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-brand-dark transition-all text-gray-800 placeholder:text-gray-400 font-medium text-[15px]"
                                                    placeholder="WhatsApp (com DDD)"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white font-semibold py-4 px-4 rounded-xl shadow-lg shadow-brand-dark/20 transition-all flex justify-center items-center gap-2 mt-2"
                                            >
                                                Iniciar jornada <ArrowRight size={18} />
                                            </button>
                                            <p className="text-[11px] font-medium text-center text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                                                <ShieldCheck size={14} className="text-brand-dark/50" /> Seus dados estão seguros e criptografados.
                                            </p>
                                        </form>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
        </section>
    );
}
