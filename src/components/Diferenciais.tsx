'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ITEMS = [
    {
        title: 'Atendimento que acolhe',
        description: 'Você não é um protocolo. Ouvimos você sem pressa.',
        image: '/card01_foto.png',
    },
    {
        title: 'Sem burocracia',
        description: 'Triagem rápida e muito leve. Menos papel, mais ação.',
        image: '/card02_foto.png',
    },
    {
        title: 'Médicos que entendem',
        description: 'Especialistas focados no seu bem-estar. Respeitamos a sua história.',
        image: '/card03_foto.png',
    },
    {
        title: 'Do início ao fim, juntos',
        description: 'Estamos sempre ao seu lado. Acompanhamento feito de perto.',
        image: '/card04_foto.png',
    },
];

export default function Diferenciais() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

    return (
        <section id="diferencial" ref={sectionRef} className="py-24 md:py-32 w-full bg-[#ffffff] overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                
                {/* Section title */}
                <div className="mb-14 md:mb-20 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-medium text-[#111111] leading-[0.95] tracking-tight mb-6"
                    >
                        Sua saúde merece mais do que uma receita. <br className="hidden md:block" />
                        Merece um acompanhamento <span className="font-serif italic text-brand-dark">de verdade</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-xl md:text-2xl text-gray-500 font-sans font-light max-w-2xl leading-relaxed"
                    >
                        Com um médico que te conhece, suporte contínuo e alguém presente em cada passo da sua jornada.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {ITEMS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-10%' }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            // Slightly nudge horizontally on hover
                            whileHover={{ x: 8, transition: { duration: 0.4, ease: 'easeOut' } }}
                            className="group relative w-full h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                        >
                            {/* Background Image Placeholder */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            
                            {/* Dark Overlay so text is readable */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />

                            {/* Text Content overlaying the image */}
                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                                <h3 className="text-white text-2xl md:text-3xl font-serif font-medium leading-tight mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 font-sans font-light text-base md:text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
