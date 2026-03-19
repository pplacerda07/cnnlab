'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import { getDefaultWhatsAppLink } from '@/lib/whatsapp';

const NAV_LINKS = [
    { label: 'Por Que a CannaLab', href: '#diferencial' },
    { label: 'Como Funciona', href: '#jornada' },
    { label: 'Condições Tratadas', href: '#patologias' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Artigos', href: '#artigos' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* ─── Top CTA-like banner ────────────────────────── */}
            <div
                className="relative py-20 md:py-28"
                style={{
                    background: 'linear-gradient(165deg, #00642e 0%, #003d1a 50%, #001a0b 100%)',
                }}
            >
                {/* Decorative orbs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] translate-x-1/3 translate-y-1/3" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                    {/* Upper section — branding + grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                        {/* Logo & Description */}
                        <div className="lg:col-span-5">
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="/new_logo.svg"
                                    alt="CannaLab Logo"
                                    width={160}
                                    height={45}
                                    className="brightness-0 invert"
                                />
                            </Link>
                            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
                                Facilitamos o acesso à cannabis medicinal com atendimento
                                humanizado, acompanhamento contínuo e a confiança
                                que você merece para iniciar seu tratamento.
                            </p>
                            <a
                                href={getDefaultWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-brand-dark text-sm font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
                            >
                                <MessageCircle size={18} />
                                Conversar pelo WhatsApp
                            </a>
                        </div>

                        {/* Navigation */}
                        <div className="lg:col-span-3">
                            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                                Navegação
                            </h4>
                            <ul className="space-y-3.5">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-4">
                            <h4 className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                                Contato
                            </h4>
                            <ul className="space-y-5">
                                <li>
                                    <a
                                        href={getDefaultWhatsAppLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
                                    >
                                        <MessageCircle size={18} className="mt-0.5 flex-shrink-0 text-white/30 group-hover:text-[#25D366] transition-colors" />
                                        <div>
                                            <span className="text-sm block">WhatsApp</span>
                                            <span className="text-xs text-white/30">(11) 99999-9999</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:contato@cannalab.com.br"
                                        className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
                                    >
                                        <Mail size={18} className="mt-0.5 flex-shrink-0 text-white/30 group-hover:text-white/60 transition-colors" />
                                        <div>
                                            <span className="text-sm block">E-mail</span>
                                            <span className="text-xs text-white/30">contato@cannalab.com.br</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 text-white/60">
                                    <Clock size={18} className="mt-0.5 flex-shrink-0 text-white/30" />
                                    <div>
                                        <span className="text-sm block">Atendimento</span>
                                        <span className="text-xs text-white/30">Seg a Sex, 9h às 18h</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-white/60">
                                    <MapPin size={18} className="mt-0.5 flex-shrink-0 text-white/30" />
                                    <div>
                                        <span className="text-sm block">Atendimento 100% online</span>
                                        <span className="text-xs text-white/30">Todo o Brasil</span>
                                    </div>
                                </li>
                            </ul>

                            {/* Social */}
                            <div className="mt-8 flex items-center gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={16} className="text-white/50" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ─── Aviso Legal ─────────────────────────────── */}
                    <div className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 mb-10">
                        <p className="text-xs text-white/30 leading-relaxed">
                            <strong className="block text-white/50 text-sm mb-1.5">
                                Aviso Legal Obrigatório (RDC 660/2022)
                            </strong>
                            A CannaLab atua exclusivamente como facilitadora no acesso seguro a
                            tratamentos com produtos derivados de Cannabis, mediante avaliação e
                            prescrição de médicos devidamente registrados no Conselho Regional de
                            Medicina (CRM). A importação dos produtos é feita sob as diretrizes e
                            após autorização da Agência Nacional de Vigilância Sanitária (Anvisa),
                            de acordo com a RDC nº 660, de 30 de março de 2022. Os resultados do
                            tratamento variam segundo quadro clínico individual. O conteúdo aqui
                            exposto tem finalidade informativa e não substitui de forma alguma o
                            aconselhamento ou consulta médica especializada.
                        </p>
                    </div>

                    {/* ─── Bottom bar ──────────────────────────────── */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06]">
                        <p className="text-xs text-white/25">
                            &copy; {new Date().getFullYear()} CannaLab. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6 text-xs text-white/25">
                            <Link href="#" className="hover:text-white/50 transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link href="#" className="hover:text-white/50 transition-colors">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
