import { ArrowRight, MessageCircle } from 'lucide-react';
import { getDefaultWhatsAppLink } from '@/lib/whatsapp';

export default function CtaFinal() {
    return (
        <section className="bg-brand-dark py-20 relative overflow-hidden">

            {/* Decorações do Fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lightest/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Pronto para recuperar sua qualidade de vida?
                    </h2>

                    <p className="text-brand-lightest text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Fale com um especialista agora mesmo. Nossa equipe de acolhimento está online para tirar todas as suas dúvidas, sem compromisso.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={getDefaultWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-brand-dark hover:bg-brand-lightest font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-lg"
                        >
                            <MessageCircle size={22} />
                            Iniciar minha jornada via WhatsApp
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
