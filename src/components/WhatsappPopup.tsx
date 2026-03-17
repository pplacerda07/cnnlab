'use client';

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { getDefaultWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsappPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Show after a slight delay for better UX
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Floating WhatsApp Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 group ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                }}
                aria-label="Abrir WhatsApp"
            >
                {isOpen ? (
                    <X size={24} className="text-white" />
                ) : (
                    <MessageCircle size={28} className="text-white" />
                )}

                {/* Pulse ring */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#25D366]" />
                )}
            </button>

            {/* Popup Card */}
            <div
                className={`fixed bottom-[100px] right-6 z-50 w-[340px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen
                        ? 'translate-y-0 opacity-100 pointer-events-auto scale-100'
                        : 'translate-y-4 opacity-0 pointer-events-none scale-95'
                }`}
            >
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                    {/* Header */}
                    <div
                        className="p-5 flex items-center gap-4"
                        style={{
                            background: 'linear-gradient(135deg, #075E54 0%, #128C7E 100%)',
                        }}
                    >
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <MessageCircle size={24} className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-base">CannaLab</h4>
                            <p className="text-white/70 text-xs">
                                Normalmente responde em minutos
                            </p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="bg-[#ECE5DD] p-4">
                        {/* Chat bubble */}
                        <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%] relative">
                            <div
                                className="absolute -top-0 -left-2 w-4 h-4"
                                style={{
                                    background: 'white',
                                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                                }}
                            />
                            <p className="text-sm text-gray-800 leading-relaxed">
                                Olá! 👋 Bem-vindo à <strong>CannaLab</strong>.
                                <br />
                                Como podemos te ajudar hoje?
                            </p>
                            <span className="text-[10px] text-gray-400 mt-2 block text-right">
                                Agora
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-white p-4">
                        <a
                            href={getDefaultWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                            style={{
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            }}
                        >
                            <MessageCircle size={18} />
                            Iniciar Conversa
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
