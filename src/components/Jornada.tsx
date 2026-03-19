'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Laptop, MessageCircle, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

const JORNADA = [
    {
        number: '01',
        title: 'Condição identificada',
        desc: 'Você entra no site e seleciona a condição de saúde que deseja tratar.',
        channel: 'Site',
        icon: <Laptop size={18} />,
    },
    {
        number: '02',
        title: 'Pré-cadastro rápido',
        desc: 'Com apenas nome e telefone, enviamos você diretamente para falar conosco.',
        channel: 'Site / WhatsApp',
        icon: <MessageCircle size={18} />,
    },
    {
        number: '03',
        title: 'Atendimento e triagem',
        desc: 'Um de nossos especialistas conversa com você pelo WhatsApp para entender seu momento.',
        channel: 'WhatsApp',
        icon: <MessageCircle size={18} />,
    },
    {
        number: '04',
        title: 'Acesso à Plataforma',
        desc: 'Criamos o seu perfil exclusivo para acesso à jornada completa e agendamento.',
        channel: 'Plataforma',
        icon: <Laptop size={18} />,
    },
    {
        number: '05',
        title: 'Consulta Médica Online',
        desc: 'Teleconsulta com médico especializado para avaliação clínica e possível prescrição.',
        channel: 'Plataforma',
        icon: <Stethoscope size={18} />,
    },
    {
        number: '06',
        title: 'Acompanhamento Contínuo',
        desc: 'Pós-consulta monitorado constantemente. Estamos com você em cada etapa da melhora.',
        channel: 'WhatsApp',
        icon: <MessageCircle size={18} />,
    },
];

/* ------------------------------------------------------------------ */
/*  Each card gets a unique organic placement via these configs        */
/* ------------------------------------------------------------------ */

const CARD_LAYOUT = [
    // row 1 — two cards, staggered
    { col: 'md:col-start-1 md:col-end-5', nudge: 'md:translate-y-0', rotate: 'md:-rotate-[1.2deg]' },
    { col: 'md:col-start-5 md:col-end-9', nudge: 'md:translate-y-8', rotate: 'md:rotate-[0.8deg]' },
    // row 2 — offset to the right
    { col: 'md:col-start-2 md:col-end-6', nudge: 'md:translate-y-0', rotate: 'md:rotate-[1deg]' },
    { col: 'md:col-start-6 md:col-end-10', nudge: 'md:translate-y-6', rotate: 'md:-rotate-[0.7deg]' },
    // row 3 — offset slightly left
    { col: 'md:col-start-1 md:col-end-5', nudge: 'md:translate-y-0', rotate: 'md:rotate-[0.5deg]' },
    { col: 'md:col-start-5 md:col-end-9', nudge: 'md:translate-y-10', rotate: 'md:-rotate-[1deg]' },
];

function channelStyle(channel: string) {
    if (channel.includes('WhatsApp') && !channel.includes('Site'))
        return 'text-green-700 bg-green-50 border-green-200';
    if (channel.includes('Plataforma'))
        return 'text-blue-700 bg-blue-50 border-blue-200';
    return 'text-purple-700 bg-purple-50 border-purple-200';
}

/* ------------------------------------------------------------------ */
/*  The dashed "map route" SVG path                                   */
/*  Starts top-left, curves diagonally across with map-like bends     */
/* ------------------------------------------------------------------ */

// This path goes from top-left to bottom-right with organic curves
const MAP_PATH =
    'M -20 30 ' +          // start off-screen left
    'C 120 10, 200 120, 320 100 ' +    // first curve right
    'S 500 220, 580 180 ' +            // swing down-right
    'C 680 140, 720 280, 850 260 ' +   // curve back up then down
    'S 1000 380, 1080 340 ' +          // swing further right
    'C 1180 300, 1200 440, 1350 420 ' + // more curves
    'S 1520 540, 1600 500';             // end bottom-right area

function MapRoutePath() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // pathLength goes from 0 to 1 as the user scrolls through the section
    const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

    return (
        <div ref={ref} className="absolute inset-0 -z-[5] pointer-events-none overflow-hidden">
            <svg
                viewBox="0 0 1600 560"
                fill="none"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Ghost trail — faint dashed line showing the full route */}
                <path
                    d={MAP_PATH}
                    stroke="#00642e"
                    strokeWidth="2.5"
                    strokeDasharray="12 10"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.08"
                />

                {/* Animated path — draws itself on scroll */}
                <motion.path
                    d={MAP_PATH}
                    stroke="#00642e"
                    strokeWidth="2.5"
                    strokeDasharray="12 10"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.25"
                    style={{ pathLength }}
                />
            </svg>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Jornada() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Subtle, elegant pastel colors for each journey step block
    const cardColors = [
        'bg-[#f3ece4]', // pastel beige
        'bg-[#e2e8f0]', // soft blue-gray
        'bg-[#e6f0e6]', // pale mint
        'bg-[#fae8e0]', // soft peach
        'bg-[#f1f5f9]', // slate lighter
        'bg-[#fdfaf6]', // very pale warm gray
    ];

    return (
        <section id="jornada" ref={sectionRef} className="relative w-full bg-[#ffffff] border-t border-gray-200" style={{ paddingBottom: '10vh' }}>
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row relative items-start">

                    {/* LEFT COLUMN: Sticky Header block */}
                    <div className="lg:w-1/2 w-full p-8 md:p-16 lg:p-24 2xl:p-32 flex flex-col justify-center lg:sticky lg:top-0 h-auto lg:h-screen z-10">

                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-5%' }}
                            transition={{ duration: 0.6 }}
                            className="font-sans text-brand-dark uppercase tracking-widest text-sm font-semibold mb-6 block"
                        >
                            Como funciona
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-5%' }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-sans font-light text-[#222222] leading-[1.05] tracking-tight mb-8"
                        >
                            A sua <span className="font-serif italic text-brand-dark">jornada</span><br />
                            <span className="font-bold">de cuidado.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-5%' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-md text-[#4a4a4a] text-lg md:text-xl leading-relaxed font-sans font-light"
                        >
                            Acreditamos que uma consulta não deve ser apenas para prescrever um medicamento. Ela deve ser o início de uma vida mais equilibrada, com acompanhamento contínuo e cuidado real.
                        </motion.p>
                    </div>

                    {/* RIGHT COLUMN: Scrolling Steps (Sticky Stack Effect) */}
                    <div className="lg:w-1/2 w-full relative pt-12 lg:pt-32 pb-32 px-4 md:px-8 lg:pr-24 flex flex-col gap-[3rem] lg:gap-[15rem]">
                        {JORNADA.map((step, i) => {
                            // Using sticky on the individual wrapper to make them stack
                            // Top offset increases slightly for each so they look like a deck of cards
                            const stickyTop = `calc(15vh + ${i * 40}px)`;

                            return (
                                <div
                                    key={step.number}
                                    className="sticky w-full flex justify-center"
                                    style={{
                                        top: stickyTop,
                                        zIndex: i
                                    }}
                                >
                                    {/* The individual card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-5%' }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className={cn(
                                            'w-full max-w-2xl ml-auto rounded-[2rem] p-8 md:p-12 shadow-lg border border-black/5 flex flex-col relative overflow-hidden transition-all duration-300',
                                            cardColors[i % cardColors.length]
                                        )}
                                    >
                                        {/* Channel Badge Top Right */}
                                        <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-black/60 bg-white/40 px-3 py-1.5 rounded-full backdrop-blur-md">
                                            {step.icon}
                                            {step.channel}
                                        </div>

                                        {/* Step Number */}
                                        <div className="text-[3rem] md:text-[4rem] font-sans font-medium text-black/20 leading-none mb-4 md:mb-6">
                                            {step.number}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-xl md:text-3xl font-serif text-[#111111] mb-3 md:mb-4 pr-12 md:pr-16 leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-[#333333] font-sans font-light leading-relaxed text-sm md:text-lg max-w-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}