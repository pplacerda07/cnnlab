'use client';

import { getDefaultWhatsAppLink } from '@/lib/whatsapp';
import { Stethoscope } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FixedCta() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar o botão fixo após rolar a página (ex: 300px)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
            }`}
        >
            <a
                href={getDefaultWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-dark hover:bg-brand-dark/90 text-white font-bold py-3.5 px-6 md:px-8 rounded-full shadow-[0_8px_30px_rgba(26,92,45,0.4)] transition-all flex items-center gap-2 whitespace-nowrap"
            >
                <Stethoscope size={20} />
                Me consultar agora
            </a>
        </div>
    );
}
