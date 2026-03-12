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
            className="py-24 md:py-32 w-full bg-white overflow-hidden"
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Topo — título esquerda, tag + subtítulo direita */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
                    <h2 className="text-4xl md:text-5xl lg:text-[3.6rem] font-sans font-medium text-[#111111] leading-[1] tracking-tight max-w-lg">
                        Histórias de quem já{' '}
                        <span className="font-serif italic text-brand-dark">
                            transformou a própria vida.
                        </span>
                    </h2>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0 mt-1">
                        <span className="text-sm font-medium text-brand-dark bg-brand-lightest border border-brand-lighter px-4 py-1.5 rounded-full">
                            Depoimentos
                        </span>
                        <p className="text-sm text-gray-400 text-right max-w-[220px] leading-snug">
                            Mais do que tratamento,<br />acolhimento de verdade.
                        </p>
                    </div>
                </div>

                {/* Grid 3 colunas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

                    {/* ── Coluna 1 — Imagens empilhadas + card de depoimento ── */}
                    <div className="flex flex-col gap-4">

                        {/* Fotos empilhadas */}
                        <div className="relative h-[300px]">
                            {/* Foto de fundo — levemente rotacionada */}
                            <div
                                className="absolute inset-0 rounded-3xl overflow-hidden shadow-md"
                                style={{ transform: 'rotate(3deg) scale(0.95)', transformOrigin: 'bottom center' }}
                            >
                                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <span className="text-gray-400 text-xs uppercase tracking-widest">Foto 2</span>
                                </div>
                            </div>
                            {/* Foto da frente */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg">
                                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400 text-xs uppercase tracking-widest">Foto 1</span>
                                </div>
                            </div>
                        </div>

                        {/* Card de info do depoimento */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <p className="font-semibold text-[#111] text-lg mb-2">Mariana S.</p>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                    Paciente
                                </span>
                                <span className="text-xs font-medium bg-brand-lightest text-brand-dark px-3 py-1 rounded-full">
                                    Ansiedade
                                </span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Senti que realmente se importavam com a minha história desde o primeiro contato.
                            </p>
                            <button className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-dark hover:opacity-70 transition-opacity">
                                Ver depoimento <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* ── Coluna 2 — Imagem grande + texto principal ── */}
                    <div className="flex flex-col gap-5">

                        {/* Imagem */}
                        <div className="w-full h-[260px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-sm">
                            <span className="text-gray-400 text-xs uppercase tracking-widest">Foto paciente</span>
                        </div>

                        {/* Estrelas */}
                        <div className="flex text-yellow-400 gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>

                        {/* Texto do depoimento */}
                        <p className="text-gray-700 leading-relaxed text-[0.95rem]">
                            "Passei anos tentando de tudo e sempre me sentindo um fardo nas consultas.
                            O médico da CannaLab foi o primeiro que me escutou de verdade.
                            O acompanhamento pós-consulta é muito fora da curva."
                        </p>

                        <div>
                            <p className="font-semibold text-[#111] text-sm">Roberto F.</p>
                            <p className="text-sm text-brand-dark font-medium">Dor Crônica</p>
                        </div>

                        <button className="flex items-center gap-1 text-sm font-semibold text-brand-dark hover:opacity-70 transition-opacity w-fit">
                            Ler depoimento completo <ArrowUpRight size={14} />
                        </button>
                    </div>

                    {/* ── Coluna 3 — Card escuro verde com social proof + depoimento destaque ── */}
                    <div className="flex flex-col gap-5">

                        {/* Card verde escuro — social proof */}
                        <div
                            className="rounded-3xl p-7 flex flex-col justify-between"
                            style={{ backgroundColor: '#1a3a1a', minHeight: '260px' }}
                        >
                            {/* Avatares + contagem */}
                            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 w-fit shadow-sm">
                                <div className="flex -space-x-2">
                                    {AVATARES.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="paciente"
                                            className="w-7 h-7 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <div className="leading-tight">
                                    <p className="text-sm font-bold text-[#111]">+2.000</p>
                                    <p className="text-xs text-gray-500">pacientes atendidos</p>
                                </div>
                            </div>

                            {/* Título e subtítulo */}
                            <div className="mt-6">
                                <h3 className="text-2xl font-serif italic text-[#c8f035] leading-tight mb-1">
                                    Resultados reais,<br />vidas transformadas.
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Acompanhe histórias na nossa comunidade
                                </p>
                            </div>

                            {/* Botão seta */}
                            <div className="flex justify-end mt-4">
                                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                                    <ArrowUpRight size={18} color="white" />
                                </button>
                            </div>
                        </div>

                        {/* Terceiro depoimento */}
                        <div className="bg-[#f4f7f4] rounded-2xl p-6">
                            <div className="flex text-yellow-400 gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                                "A equipe teve toda a paciência do mundo para tirar minhas dúvidas.
                                Ter um especialista sempre disponível me deu a segurança que eu precisava."
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-[#111] text-sm">Cláudia M.</p>
                                    <p className="text-xs text-brand-dark font-medium">Insônia Severa</p>
                                </div>
                                <MessageCircle size={18} className="text-brand-dark opacity-40" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}