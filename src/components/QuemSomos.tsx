export default function QuemSomos() {
    return (
        <section className="relative py-20 md:py-28 w-full bg-[#03532e] overflow-hidden">
            {/* Background Text CANNALAB */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-0 pointer-events-none select-none">
                <span className="text-[20vw] lg:text-[23vw] leading-none font-black text-white/5 whitespace-nowrap tracking-tighter">
                    CANNALAB
                </span>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Quem Somos */}
                    <div className="flex-1">
                        <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-white/20">
                            <span className="text-white font-medium text-sm tracking-wide uppercase">Quem Somos</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-tight mb-6">
                            Uma plataforma especializada <br className="hidden lg:block" /> em cannabis medicinal.
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                            Somos uma plataforma de telemedicina que conecta você a médicos qualificados e acompanha toda a jornada do paciente — da consulta ao processo junto à ANVISA.
                        </p>
                    </div>

                    {/* Proposta de Valor */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] shadow-xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full opacity-50 pointer-events-none" />
                        
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[#c8e6c9] rounded-full"></span>
                            Proposta de Valor
                        </h3>
                        
                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                                <div>
                                    <h4 className="font-semibold text-white text-lg mb-1">Você nos mostra o caminho</h4>
                                    <p className="text-white/70 font-light">Você compartilha sua condição, seus sintomas e seus objetivos de saúde conosco.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                                <div>
                                    <h4 className="font-semibold text-white text-lg mb-1">Nós guiamos você</h4>
                                    <p className="text-white/70 font-light">Com absoluta segurança médica, proporcionamos um acompanhamento contínuo e humanizado.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
