'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
    {
        question: "É legal no Brasil?",
        answer: "Sim, o uso medicinal da Cannabis é 100% legal no Brasil. Todo o processo segue regulamentações rígidas da Anvisa (RDC 660/2022), garantindo que o tratamento seja feito de maneira segura e amparada por lei."
    },
    {
        question: "Preciso de receita médica?",
        answer: "Sim. Como qualquer tratamento sério, a Cannabis Medicinal exige prescrição médica. A CannaLab conecta você a médicos especializados que avaliarão o seu caso clínico para fazer a prescrição adequada."
    },
    {
        question: "Como funciona a consulta?",
        answer: "A consulta é feita 100% online, via telemedicina, no conforto da sua casa. O médico especializado irá avaliar seu histórico, ouvir suas queixas e recomendar a melhor abordagem terapêutica para você."
    },
    {
        question: "Quanto tempo leva para iniciar o tratamento?",
        answer: "O processo é desenhado para ser o mais rápido possível. Após o pré-cadastro, nossa equipe entra em contato rapidamente. Com a documentação e consulta aprovadas, a liberação pela Anvisa leva poucos dias."
    },
    {
        question: "O que diferencia a CannaLab das outras plataformas?",
        answer: "Nosso foco é humano. Não somos apenas um marketplace de produtos. Nós oferecemos um acompanhamento tipo concierge, desde a sua primeira dúvida até o pós-consulta. Aqui, você não é um número e não caminha sozinho(a) em nenhuma etapa do processo."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 md:py-32 relative w-full bg-[#ffffff] overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

                <div className="mb-14 md:mb-20 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-medium text-[#111111] leading-[0.95] tracking-tight mb-6">
                        Dúvidas <span className="font-serif italic text-brand-dark">Frequentes.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-sans font-light max-w-2xl leading-relaxed">
                        Tudo o que você precisa saber sobre o tratamento.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-2xl overflow-hidden transition-all duration-300",
                                openIndex === index ? "border-brand-dark shadow-md bg-brand-lightest/10" : "border-gray-200 hover:border-brand-lighter bg-white"
                            )}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={cn(
                                    "font-semibold pr-4",
                                    openIndex === index ? "text-brand-dark" : "text-gray-900"
                                )}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "text-brand-dark transition-transform duration-300 flex-shrink-0",
                                        openIndex === index ? "rotate-180" : ""
                                    )}
                                    size={20}
                                />
                            </button>

                            <div
                                className={cn(
                                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
