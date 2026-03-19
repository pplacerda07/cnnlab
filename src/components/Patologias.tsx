'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PATOLOGIAS = [
    {
        tags: ['Cérebro & Humor', 'Alívio Natural'],
        title: 'Ansiedade',
        description: 'Atua nos receptores do sistema endocanabinoide reduzindo a hiperatividade do sistema nervoso e promovendo equilíbrio emocional.',
        image: '/foto_patologia_Ansiedade.png',
    },
    {
        tags: ['Foco & Mente', 'Clareza Mental'],
        title: 'TDAH',
        description: 'Melhora o foco e reduz a impulsividade regulando a dopamina em pacientes com déficit de atenção.',
        image: '/foto_patologia_TDAH.png',
    },
    {
        tags: ['Sono', 'Bem-Estar'],
        title: 'Insônia',
        description: 'Regula o ciclo circadiano e aumenta o tempo de sono profundo, reduzindo despertares noturnos.',
        image: '/foto_patologia_Insonia.png',
    },
    {
        tags: ['Controle Motor', 'Neuroproteção'],
        title: 'Parkinson',
        description: 'Reduz tremores e rigidez além de ter propriedades neuroprotetoras que retardam a progressão da doença.',
        image: '/foto_patologia_Parkinson.png',
    },
    {
        tags: ['Cérebro & Humor', 'Bem-Estar'],
        title: 'Depressão',
        description: 'Modula os receptores de serotonina e promove neuroplasticidade com menos efeitos colaterais.',
        image: '/foto_patologia_Depressão.png',
    },
    {
        tags: ['Dor Crônica', 'Anti-inflamatório'],
        title: 'Fibromialgia',
        description: 'Age nos receptores de dor do sistema nervoso central reduzindo a hipersensibilidade característica.',
        image: '/foto_patologia_Fibormialgia.png',
    },
    {
        tags: ['Controle de Crises'],
        title: 'Epilepsia',
        description: 'Redução comprovada da frequência de crises em pacientes resistentes a anticonvulsivantes tradicionais.',
        image: '/foto_patologia_Epilepsia.png',
    },
    {
        tags: ['Dor Crônica'],
        title: 'Dor Crônica',
        description: 'Interagem com os receptores CB1 e CB2 oferecendo alívio duradouro sem risco de dependência dos opioides.',
        image: '/foto_patologia_DorCronica.png',
    },
    {
        tags: ['Comportamento', 'Comunicação'],
        title: 'Autismo (TEA)',
        description: 'Melhora comportamentos repetitivos, irritabilidade e comunicação em pacientes com TEA.',
        image: '/foto_patologia_Autismo.png',
    },
    {
        tags: ['Espasticidade', 'Neuropatia'],
        title: 'Esclerose Múltipla',
        description: 'Reduz espasticidade muscular, dor neuropática e fadiga como tratamento adjuvante reconhecido.',
        image: '/foto_patologia_Esclerose Múltipla.png',
    },
    {
        tags: ['Oncologia', 'Bem-Estar'],
        title: 'Náusea Oncológica',
        description: 'Eficaz no controle de náuseas e vômitos em quimioterapia, melhorando a tolerância ao tratamento.',
        image: '/foto_patologia_NaúseaAncologica.png',
    },
];

// Cor verde suave — como um verde com baixa opacidade
const CARD_BG = '#ddeedd';  // verde opaco suave
const CARD_WIDTH = 300;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;
const ITEMS = [...PATOLOGIAS, ...PATOLOGIAS, ...PATOLOGIAS];
const AUTO_SPEED = 0.4;

export default function Patologias() {
    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(PATOLOGIAS.length * STEP);
    const rafRef = useRef<number>(0);
    const pausedRef = useRef(false);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const dragOffset = useRef(0);

    // Auto-scroll contínuo
    useEffect(() => {
        const tick = () => {
            if (!pausedRef.current && !isDragging.current) {
                offsetRef.current += AUTO_SPEED;
                if (offsetRef.current >= PATOLOGIAS.length * 2 * STEP) {
                    offsetRef.current -= PATOLOGIAS.length * STEP;
                }
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
                }
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const jumpBy = (dir: 1 | -1) => {
        pausedRef.current = true;
        const target = offsetRef.current + dir * STEP;
        const start = offsetRef.current;
        const duration = 450;
        const startTime = performance.now();
        const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const animate = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            offsetRef.current = start + (target - start) * ease(t);

            // loop
            if (offsetRef.current >= PATOLOGIAS.length * 2 * STEP)
                offsetRef.current -= PATOLOGIAS.length * STEP;
            if (offsetRef.current < PATOLOGIAS.length * STEP)
                offsetRef.current += PATOLOGIAS.length * STEP;

            if (trackRef.current)
                trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;

            if (t < 1) requestAnimationFrame(animate);
            else setTimeout(() => { pausedRef.current = false; }, 800);
        };
        requestAnimationFrame(animate);
    };

    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        pausedRef.current = true;
        startX.current = e.pageX;
        dragOffset.current = offsetRef.current;
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        offsetRef.current = dragOffset.current - (e.pageX - startX.current);
        if (trackRef.current)
            trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    };
    const onMouseUp = () => {
        isDragging.current = false;
        setTimeout(() => { pausedRef.current = false; }, 600);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        pausedRef.current = true;
        isDragging.current = true;
        startX.current = e.touches[0].pageX;
        dragOffset.current = offsetRef.current;
    };
    const onTouchMove = (e: React.TouchEvent) => {
        offsetRef.current = dragOffset.current - (e.touches[0].pageX - startX.current);
        if (trackRef.current)
            trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    };
    const onTouchEnd = () => {
        isDragging.current = false;
        setTimeout(() => { pausedRef.current = false; }, 600);
    };

    return (
        <section
            id="patologias"
            className="py-24 md:py-32 w-full bg-white overflow-hidden"
            onMouseLeave={() => { pausedRef.current = false; isDragging.current = false; }}
        >
            <div className="w-full max-w-[1400px] mx-auto">

                {/* Cabeçalho */}
                <div className="px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <p className="text-sm font-medium text-brand-dark uppercase tracking-widest mb-3">
                            Patologias
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-medium text-[#111111] leading-[0.95] tracking-tight mb-4">
                            Condições que{' '}
                            <span className="font-serif italic text-brand-dark">tratamos.</span>
                        </h2>
                        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
                            Nosso objetivo não é apenas tratar sintomas. É reduzir sua dependência de medicamentos, trazendo mais leveza, estabilidade e qualidade de vida.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                        <button
                            onClick={() => jumpBy(-1)}
                            className="w-11 h-11 rounded-full bg-[#111] flex items-center justify-center text-white hover:opacity-80 transition-all"
                        >
                            <ArrowLeft size={16} />
                        </button>
                        <button
                            onClick={() => jumpBy(1)}
                            className="w-11 h-11 rounded-full bg-[#111] flex items-center justify-center text-white hover:opacity-80 transition-all"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Carrossel */}
                <div
                    className="cursor-grab active:cursor-grabbing select-none"
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseEnter={() => { pausedRef.current = true; }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        ref={trackRef}
                        className="flex will-change-transform"
                        style={{
                            gap: `${GAP}px`,
                            paddingLeft: '80px',
                            transform: `translateX(-${PATOLOGIAS.length * STEP}px)`,
                        }}
                    >
                        {ITEMS.map((item, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 rounded-3xl overflow-hidden flex flex-col"
                                style={{
                                    width: `${CARD_WIDTH}px`,
                                    height: '480px',
                                    backgroundColor: CARD_BG,
                                }}
                            >
                                {/* Topo — tags + título + descrição */}
                                <div className="flex flex-col p-6 flex-1">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-3 py-1 rounded-full"
                                                style={{
                                                    backgroundColor: 'rgba(255,255,255,0.65)',
                                                    color: '#00642e',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-3xl font-sans font-bold text-[#111111] leading-tight mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Descrição */}
                                    <p className="text-sm font-light leading-relaxed text-[#333]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Imagem da Patologia — parte inferior */}
                                <div
                                    className="mx-4 mb-4 rounded-2xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                                    style={{
                                        height: '190px',
                                        backgroundColor: 'rgba(255,255,255,0.35)',
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`Foto ilustrativa de ${item.title}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}