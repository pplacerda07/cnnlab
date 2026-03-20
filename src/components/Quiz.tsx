'use client';

import { useState } from 'react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

const CONDITIONS = [
    'Ansiedade', 'Insônia', 'Dor Crônica', 'Depressão',
    'Fibromialgia', 'Epilepsia', 'TDAH', 'Outra Condição'
];

const EXPECTATIONS = [
    'Alívio de sintomas', 'Redução de medicamentos', 'Qualidade de vida', 'Mais foco e energia'
];

const HISTORIES = [
    { title: 'Nunca busquei tratamento', desc: 'Estou começando agora e quero entender as opções disponíveis.' },
    { title: 'Já utilizei medicamentos convencionais', desc: 'Com ou sem resultados satisfatórios.' },
    { title: 'Uso medicação atualmente, mas busco uma alternativa', desc: 'Tive efeitos colaterais ou não obtive o resultado esperado.' },
    { title: 'Já tentei abordagens naturais sem sucesso', desc: 'Como meditação, fitoterápicos ou outras terapias alternativas.' }
];

export default function Quiz() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        condition: [] as string[],
        expectation: '',
        history: '',
        name: '',
        phone: ''
    });

    const handleSelect = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setStep(prev => prev + 1);
    };

    const handleConditionSelect = (condition: string) => {
        setFormData(prev => {
            const isSelected = prev.condition.includes(condition);
            if (isSelected) {
                return { ...prev, condition: prev.condition.filter(c => c !== condition) };
            } else if (prev.condition.length < 2) {
                return { ...prev, condition: [...prev.condition, condition] };
            }
            return prev;
        });
    };

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 4 && formData.name && formData.phone) {
            const message = `Olá! Meu nome é ${formData.name}. Gostaria de entender como a Cannalab pode me ajudar.\nCondição: ${formData.condition.join(', ')}\nEspectativa: ${formData.expectation}\nHistórico: ${formData.history}\nMeu número é ${formData.phone}.`;
            window.open(generateWhatsAppLink(message), '_blank');
        }
    };

    return (
        <section id="quiz" className="py-12 md:py-16 w-full bg-[#ffff] overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-6 md:p-10 relative overflow-hidden">

                    {/* Form Progress */}
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                            {step === 1 ? 'O que está te incomodando?' :
                                step === 2 ? 'O que você espera com o tratamento?' :
                                    step === 3 ? 'Sobre seu histórico de tratamento' :
                                        'Podemos te ajudar!'}
                        </h3>
                        <div className="flex gap-1 text-sm font-bold bg-brand-light px-3 py-1.5 rounded-full text-brand-dark">
                            <span>{step}/4</span>
                        </div>
                    </div>

                    {step === 3 && (
                        <p className="text-gray-500 mb-6 text-sm md:text-base">
                            Essa informação ajuda o médico a entender melhor o seu caso antes da consulta e oferecer uma orientação mais precisa.
                        </p>
                    )}

                    {/* Step 1: Condition Selection */}
                    {step === 1 && (
                        <div>
                            <p className="text-gray-400 mb-6 text-sm font-medium">
                                Você pode selecionar até 2 opções.
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                {CONDITIONS.map((condition) => {
                                    const isSelected = formData.condition.includes(condition);
                                    return (
                                        <button
                                            key={condition}
                                            onClick={() => handleConditionSelect(condition)}
                                            className={`w-full text-left py-4 px-5 rounded-xl border transition-all text-[15px] font-medium flex items-center justify-between group
                                                ${isSelected 
                                                    ? 'bg-brand-light border-brand-primary text-brand-dark shadow-sm' 
                                                    : 'border-gray-200 bg-gray-50 hover:bg-brand-light hover:border-brand-primary text-gray-800'}`}
                                        >
                                            {condition}
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={() => setStep(2)}
                                    disabled={formData.condition.length === 0}
                                    className="bg-brand-dark hover:bg-[#124d22] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-brand-dark/20 transition-all flex justify-center items-center gap-2"
                                >
                                    Continuar <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Expectation Selection */}
                    {step === 2 && (
                        <div>
                            <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm text-gray-400 font-medium hover:text-gray-600 mb-5 transition-colors">
                                <ArrowLeft size={16} /> Voltar
                            </button>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                {EXPECTATIONS.map((exp) => (
                                    <button
                                        key={exp}
                                        onClick={() => handleSelect('expectation', exp)}
                                        className="w-full text-left py-4 px-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-brand-light hover:border-brand-primary transition-all text-[15px] font-medium text-gray-800 flex items-center justify-between group"
                                    >
                                        {exp}
                                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-primary flex-shrink-0 ml-2" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: History Selection */}
                    {step === 3 && (
                        <div>
                            <button onClick={() => setStep(2)} className="flex items-center gap-1.5 text-sm text-gray-400 font-medium hover:text-gray-600 mb-5 transition-colors">
                                <ArrowLeft size={16} /> Voltar
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {HISTORIES.map((hist) => (
                                    <button
                                        key={hist.title}
                                        onClick={() => handleSelect('history', hist.title)}
                                        className="w-full text-left py-4 px-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-brand-light hover:border-brand-primary transition-all group"
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[15px] font-bold text-gray-800 group-hover:text-brand-dark transition-colors">{hist.title}</span>
                                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-primary flex-shrink-0 ml-2" />
                                        </div>
                                        <p className="text-sm text-gray-500 font-light">{hist.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Final Dados */}
                    {step === 4 && (
                        <div>
                            <button onClick={() => setStep(3)} className="flex items-center gap-1.5 text-sm text-gray-400 font-medium hover:text-gray-600 mb-5 transition-colors">
                                <ArrowLeft size={16} /> Voltar
                            </button>
                            <form onSubmit={handleNextStep} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all text-gray-900 placeholder:text-gray-400 font-medium text-[15px]"
                                            placeholder="Digite seu nome"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all text-gray-900 placeholder:text-gray-400 font-medium text-[15px]"
                                            placeholder="(00) 00000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-dark hover:bg-[#124d22] text-white font-semibold py-4 px-4 rounded-xl shadow-lg shadow-brand-dark/20 transition-all flex justify-center items-center gap-2 mt-4"
                                >
                                    Começar atendimento <ArrowRight size={18} />
                                </button>
                                <p className="text-[12px] font-medium text-center text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                                    <ShieldCheck size={14} className="text-gray-400" /> Os seus dados estão seguros e não serão compartilhados.
                                </p>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
