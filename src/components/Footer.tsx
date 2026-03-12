import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <span className="font-bold text-2xl text-brand-dark tracking-tight">CANNALAB</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            Plataforma de facilitação de tratamento com cannabis medicinal focada em atendimento humanizado e na melhoria contínua da sua qualidade de vida.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Navegação</h4>
                        <ul className="space-y-3">
                            <li><Link href="#diferencial" className="text-gray-500 hover:text-brand-dark text-sm transition-colors">Por Que a CannaLab</Link></li>
                            <li><Link href="#jornada" className="text-gray-500 hover:text-brand-dark text-sm transition-colors">Como Funciona</Link></li>
                            <li><Link href="#patologias" className="text-gray-500 hover:text-brand-dark text-sm transition-colors">Condições Tratadas</Link></li>
                            <li><Link href="#faq" className="text-gray-500 hover:text-brand-dark text-sm transition-colors">Dúvidas Frequentes</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contato</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-dark text-sm transition-colors">
                                    WhatsApp: (11) 99999-9999
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contato@cannalab.com.br" className="text-gray-500 hover:text-brand-dark text-sm transition-colors">
                                    contato@cannalab.com.br
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col items-center text-center">

                    <div className="bg-brand-lightest/30 p-4 rounded-lg border border-brand-lighter/50 mb-6 max-w-4xl text-left w-full">
                        <p className="text-xs text-brand-dark/80 leading-relaxed font-medium">
                            <strong className="block mb-1 text-sm">Aviso Legal Obrigatório (RDC 660/2022)</strong>
                            A CannaLab atua exclusivamente como facilitadora no acesso seguro a tratamentos com produtos derivados de Cannabis, mediante avaliação e prescrição de médicos devidamente registrados no Conselho Regional de Medicina (CRM). A importação dos produtos é feita sob as diretrizes e após autorização da Agência Nacional de Vigilância Sanitária (Anvisa), de acordo com a RDC nº 660, de 30 de março de 2022. Os resultados do tratamento variam segundo quadro clínico individual. O conteúdo aqui exposto tem finalidade informativa e não substitui de forma alguma o aconselhamento ou consulta médica especializada.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-xs text-gray-400">
                        <p>&copy; {new Date().getFullYear()} CannaLab. Todos os direitos reservados.</p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-brand-dark transition-colors">Política de Privacidade</Link>
                            <Link href="#" className="hover:text-brand-dark transition-colors">Termos de Uso</Link>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}
