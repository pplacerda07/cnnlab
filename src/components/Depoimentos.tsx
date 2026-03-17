'use client';

import Image from 'next/image';
import { Star, ArrowUpRight, MessageCircle } from 'lucide-react';

const AVATARES = [
    'https://i.pravatar.cc/40?img=1',
    'https://i.pravatar.cc/40?img=2',
    'https://i.pravatar.cc/40?img=3',
    'https://i.pravatar.cc/40?img=4',
];

export default function Depoimentos() {
    return (
        <section
            id="depoimentos"
            className="py-20 md:py-32 w-full bg-white overflow-hidden"
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Topo — título esquerda, tag + subtítulo direita */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-5xl lg:text-[3.6rem] font-sans font-medium text-[#111111] leading-[1.05] tracking-tight max-w-lg">
                        Histórias de quem já{' '}
                        <span className="font-serif italic text-brand-dark">
                            transformou a vida.
                        </span>
                    </h2>

                    <div className="flex flex-col md:items-end gap-2 flex-shrink-0 mt-2 md:mt-0">
                        <span className="w-fit text-xs md:text-sm font-medium text-brand-dark bg-brand-lightest border border-brand-lighter px-3 md:px-4 py-1.5 rounded-full">
                            Depoimentos
                        </span>
                        <p className="text-sm text-gray-400 md:text-right max-w-[220px] leading-snug">
                            Mais do que tratamento,<br className="hidden md:block"/>acolhimento de verdade.
                        </p>
                    </div>
                </div>

                {/* Grid 2 colunas no mobile, 3 no desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 items-start">

                    {/* ── Coluna 1 — Imagens empilhadas + card de depoimento ── */}
                    <div className="flex flex-col gap-3 md:gap-4">

                        {/* Fotos empilhadas */}
                        <div className="relative h-[200px] md:h-[300px]">
                            {/* Foto de fundo */}
                            <div
                                className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-md"
                                style={{ transform: 'rotate(3deg) scale(0.95)', transformOrigin: 'bottom center' }}
                            >
                                <Image
                                    src="/paciente_foto_01.png"
                                    alt="Mariana"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Foto da frente */}
                            <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                                <Image
                                    src="/paciente_foto_01.png"
                                    alt="Mariana"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Card de info do depoimento */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
                            <div>
                                <p className="font-semibold text-[#111] text-sm md:text-lg mb-1.5 md:mb-2">Mariana S.</p>
                                <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-3">
                                    <span className="text-[10px] md:text-xs font-medium bg-gray-100 text-gray-600 px-2 md:px-3 py-1 rounded-full">
                                        Paciente
                                    </span>
                                    <span className="text-[10px] md:text-xs font-medium bg-brand-lightest text-brand-dark px-2 md:px-3 py-1 rounded-full">
                                        Ansiedade
                                    </span>
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                    "Fui ouvida de verdade desde o 1º contato. A CannaLab me deu a paz que eu buscava."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Coluna 2 — Imagem grande + texto principal ── */}
                    <div className="flex flex-col gap-3 md:gap-5">

                        {/* Imagem */}
                        <div className="w-full h-[200px] md:h-[260px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm relative">
                            <Image
                                src="/paciente_foto_02.png"
                                alt="Roberto"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:gap-3 px-1">
                            {/* Estrelas */}
                            <div className="flex text-yellow-400 gap-0.5 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>

                            {/* Texto do depoimento */}
                            <p className="text-gray-700 leading-relaxed text-xs md:text-[0.95rem]">
                                "Anos sendo tratado como número em consultas de 10 min. Aqui encontrei médicos que escutam e resolvem."
                            </p>

                            <div className="mt-1">
                                <p className="font-semibold text-[#111] text-sm md:text-base">Roberto F.</p>
                                <p className="text-xs md:text-sm text-brand-dark font-medium">Dor Crônica</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Coluna 3 — Card escuro verde com social proof + depoimento destaque ── */}
                    {/* No mobile, fazemos essa coluna ocupar as 2 linhas ou se ajustar elegantemente */}
                    <div className="flex flex-col gap-3 md:gap-5 col-span-2 md:col-span-1 mt-4 md:mt-0">

                        {/* Card verde escuro — social proof */}
                        <div
                            className="rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col justify-between"
                            style={{ backgroundColor: '#00642e', minHeight: '180px', height: '100%' }}
                        >
                            {/* Avatares + contagem */}
                            <div className="flex items-center gap-2 md:gap-3 bg-white rounded-full px-3 md:px-4 py-1.5 md:py-2 w-fit shadow-sm">
                                <div className="flex -space-x-2">
                                    {AVATARES.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="paciente"
                                            className="w-5 h-5 md:w-7 md:h-7 rounded-full border border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <div className="leading-tight">
                                    <p className="text-xs md:text-sm font-bold text-[#111]">+2.000</p>
                                    <p className="text-[10px] md:text-xs text-gray-500">atendidos</p>
                                </div>
                            </div>

                            {/* Título */}
                            <div className="mt-4 md:mt-6 flex items-end justify-between">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-serif italic text-[#c8f035] leading-tight mb-1">
                                        Resultados reais.
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-300">
                                        Vidas transformadas
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <ArrowUpRight size={16} color="white" />
                                </div>
                            </div>
                        </div>

                        {/* Terceiro depoimento */}
                        <div className="bg-[#f4f7f4] rounded-2xl md:rounded-2xl p-4 md:p-6 mb-2">
                            <div className="flex text-yellow-400 gap-0.5 mb-2 md:mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed mb-3 md:mb-4">
                                "Tive total segurança. Ter um especialista disponível para dúvidas não tem preço."
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-[#111] text-xs md:text-sm">Cláudia M.</p>
                                    <p className="text-[10px] md:text-xs text-brand-dark font-medium">Insônia Severa</p>
                                </div>
                                <MessageCircle size={16} className="text-brand-dark opacity-40" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}