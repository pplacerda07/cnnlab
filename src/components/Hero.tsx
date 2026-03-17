'use client';

import { useState, useEffect } from 'react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

const CONDITIONS = [
    'Ansiedade', 'Insônia', 'Dor Crônica', 'Depressão',
    'Fibromialgia', 'Epilepsia', 'TDAH', 'Outra Condição'
];

export default function Hero() {
    const [step, setStep] = useState(1);
    const [selectedCondition, setSelectedCondition] = useState('');
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleConditionSelect = (condition: string) => {
        setSelectedCondition(condition);
        setStep(2);
    };

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 2 && formData.phone) {
            setStep(3);
        } else if (step === 3 && formData.name) {
            const message = `Olá! Meu nome é ${formData.name}. Gostaria de entender como a CannaLab pode me ajudar com o tratamento para ${selectedCondition}. Meu número é ${formData.phone}.`;
            window.open(generateWhatsAppLink(message), '_blank');
        }
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

                    {/* Right Side - Liquid Glass Form Card */}
                    <div className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto flex-shrink-0">
                        <div className="bg-white/20 backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.18)] p-6 md:p-8 border border-white/30 relative overflow-hidden">

                            {/* Form Progress */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-white leading-tight">
                                    {step === 1 ? 'Qual é a sua principal condição?' :
                                        step === 2 ? 'WhatsApp para contato' :
                                            'Para finalizar, seu nome'}
                                </h3>
                                <div className="flex gap-1 text-sm font-bold bg-white/15 px-2.5 py-1 rounded-full text-white/80">
                                    <span>{step}/3</span>
                                </div>
                            </div>

                            {/* Step 1: Condition Selection */}
                            {step === 1 && (
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-2">
                                        {CONDITIONS.map((condition) => (
                                            <button
                                                key={condition}
                                                onClick={() => handleConditionSelect(condition)}
                                                className="w-full text-left py-3.5 px-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/25 hover:border-white/40 transition-all text-[13px] font-medium text-white/90 flex items-center justify-between group"
                                            >
                                                {condition}
                                                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex-shrink-0 ml-1" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: WhatsApp */}
                            {step === 2 && (
                                <div>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex items-center gap-1.5 text-sm text-white/50 font-medium hover:text-white mb-5 transition-colors"
                                    >
                                        <ArrowLeft size={16} /> Voltar
                                    </button>
                                    <form onSubmit={handleNextStep} className="space-y-4">
                                        <div className="p-3 bg-white/10 rounded-xl border border-white/15 mb-4 text-sm text-white/70">
                                            Condição selecionada:<br /><span className="font-bold text-base text-white">{selectedCondition}</span>
                                        </div>

                                        <div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                autoFocus
                                                className="w-full px-4 py-3.5 rounded-xl border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all text-white placeholder:text-white/40 font-medium text-[15px]"
                                                placeholder="(00) 00000-0000"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-4 rounded-xl border border-white/30 shadow-lg transition-all flex justify-center items-center gap-2 mt-2 backdrop-blur-sm"
                                        >
                                            Próximo passo <ArrowRight size={18} />
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* Step 3: Name + Agendar */}
                            {step === 3 && (
                                <div>
                                    <button
                                        onClick={() => setStep(2)}
                                        className="flex items-center gap-1.5 text-sm text-white/50 font-medium hover:text-white mb-5 transition-colors"
                                    >
                                        <ArrowLeft size={16} /> Voltar
                                    </button>
                                    <form onSubmit={handleNextStep} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                autoFocus
                                                className="w-full px-4 py-3.5 rounded-xl border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all text-white placeholder:text-white/40 font-medium text-[15px]"
                                                placeholder="Seu nome completo"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white font-semibold py-4 px-4 rounded-xl shadow-lg shadow-brand-dark/30 transition-all flex justify-center items-center gap-2 mt-2"
                                        >
                                            Agendar Consulta <ArrowRight size={18} />
                                        </button>
                                        <p className="text-[11px] font-medium text-center text-white/40 mt-4 flex items-center justify-center gap-1.5">
                                            <ShieldCheck size={14} className="text-white/30" /> Seus dados estão seguros e criptografados.
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