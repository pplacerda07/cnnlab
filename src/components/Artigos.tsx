'use client';

import { ArrowUpRight, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

const ARTIGOS = [
    {
        tag: 'Regulamentação',
        title: 'Anvisa aprova por unanimidade regras que cumprem decisão do STJ para produção de cannabis medicinal',
        description:
            'Site oficial da Anvisa detalha aprovação unânime em 28/01/2026, com cultivo para PJ, limite de THC 0,3%, rastreabilidade e novas vias (dermatológica, sublingual).',
        link: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-aprova-por-unanimidade-regras-que-cumprem-decisao-do-stj-para-producao-de-cannabis-medicinal',
        source: 'Anvisa',
        featured: true,
    },
    {
        tag: 'Dados',
        title: 'Brasil supera 672.000 pacientes tratados com cannabis',
        description:
            'Associação ajuda pacientes que abandonam analgésicos fortes por óleo de cannabis, com alívio eficaz e parcerias com Fiocruz; setor cresceu 56%, com pacientes em 80% dos municípios.',
        link: 'https://agenciabrasil.ebc.com.br/es/saude/noticia/2024-11/brasil-supera-los-672000-pacientes-tratados-con-cannabis',
        source: 'Agência Brasil',
        featured: false,
    },
    {
        tag: 'Autismo',
        title: 'Uso medicinal da cannabis apontaria resultados promissores em pacientes com autismo',
        description:
            'Relatos de pais cujos filhos com convulsões diárias pararam crises por meses, sem internações ou alopáticos após uso de óleo de cannabis.',
        link: 'https://www.almg.gov.br/comunicacao/noticias/arquivos/Uso-medicinal-da-cannabis-apontaria-resultados-promissores-em-pacientes-com-autismo-segundo-medicos/',
        source: 'ALMG',
        featured: false,
    },
    {
        tag: 'Histórias Reais',
        title: 'Cannabis medicinal: conheça histórias de quem luta pelo acesso',
        description:
            'Cidinha Carvalho (Síndrome de Dravet): filha de 60 crises/hora para redução de 80%, com alfabetização e fim de apneia após uso de óleo.',
        link: 'https://agenciabrasil.ebc.com.br/saude/noticia/2023-02/cannabis-medicinal-conheca-historias-de-quem-luta-pelo-acesso',
        source: 'Agência Brasil',
        featured: false,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function Artigos() {
    const featured = ARTIGOS[0];
    const rest = ARTIGOS.slice(1);

    return (
        <section id="artigos" className="py-24 md:py-32 w-full bg-white overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
                >
                    <div>
                        <p className="text-sm font-medium text-brand-dark uppercase tracking-widest mb-3">
                            Na Mídia
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-medium text-[#111111] leading-[0.95] tracking-tight">
                            Artigos em{' '}
                            <span className="font-serif italic text-brand-dark">destaque.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 font-light max-w-sm text-sm md:text-base leading-relaxed md:text-right">
                        Notícias e matérias sobre o avanço da cannabis medicinal no Brasil e no mundo.
                    </p>
                </motion.div>

                {/* Featured Article — Full Width */}
                <motion.a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                    className="group relative block w-full rounded-[2rem] overflow-hidden mb-6 cursor-pointer"
                    style={{
                        background: 'linear-gradient(135deg, #00642e 0%, #003d1a 60%, #001a0b 100%)',
                    }}
                >
                    <div className="p-8 md:p-14 flex flex-col justify-between min-h-[360px] md:min-h-[440px]">
                        {/* Top row */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
                                    <Newspaper size={13} />
                                    {featured.tag}
                                </span>
                                <span className="text-white/40 text-xs font-medium">
                                    {featured.source}
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                <ArrowUpRight size={18} className="text-white group-hover:rotate-45 transition-transform duration-300" />
                            </div>
                        </div>

                        {/* Bottom content */}
                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white leading-[1.1] tracking-tight mb-4 max-w-4xl group-hover:translate-x-1 transition-transform duration-500">
                                {featured.title}
                            </h3>
                            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-2xl">
                                {featured.description}
                            </p>
                        </div>
                    </div>
                </motion.a>

                {/* Secondary Articles — 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {rest.map((artigo, i) => (
                        <motion.a
                            key={i}
                            href={artigo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i + 2}
                            className="group relative flex flex-col justify-between rounded-2xl p-6 md:p-7 min-h-[280px] cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{
                                backgroundColor: '#f2f8f4',
                            }}
                        >
                            {/* Top */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-dark/10 text-brand-dark text-xs font-semibold">
                                    {artigo.tag}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center group-hover:bg-brand-dark transition-colors duration-300">
                                    <ArrowUpRight size={14} className="text-white group-hover:rotate-45 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-end">
                                <h3 className="text-lg md:text-xl font-sans font-bold text-[#111] leading-snug tracking-tight mb-3">
                                    {artigo.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                                    {artigo.description}
                                </p>
                            </div>

                            {/* Source */}
                            <div className="mt-5 pt-4 border-t border-black/5">
                                <span className="text-xs text-gray-400 font-medium">
                                    Fonte: {artigo.source}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
