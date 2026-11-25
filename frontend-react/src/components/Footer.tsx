import React from 'react';

interface FooterProps {
  onNavigate: (page: any) => void;
  onOpenTechSpecs?: () => void;
}

export default function Footer({ onNavigate, onOpenTechSpecs }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-glowPrimary flex items-center justify-center text-white font-bold text-sm">♥</div>
            <span className="text-xl font-bold text-white">GlowUp</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Plataforma de alta tecnologia aplicada ao bem-estar, autocuidado e cosmética preventiva.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-300 mb-4 uppercase tracking-wider">Navegação</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="hover:text-glowPrimary transition"
              >
                Início
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('tutorials')}
                className="hover:text-glowPrimary transition"
              >
                Tutoriais & Aulas
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('fridge')}
                className="hover:text-glowPrimary transition"
              >
                Geladeira Smart
              </button>
            </li>
            {onOpenTechSpecs && (
              <li>
                <button
                  type="button"
                  onClick={onOpenTechSpecs}
                  className="hover:text-glowPrimary transition"
                >
                  Especificações Técnicas
                </button>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-300 mb-4 uppercase tracking-wider">Contato</h4>
          <p className="text-xs text-gray-400 mb-2">suporte@glowup-beauty.com</p>
          <div className="flex space-x-4 text-base text-gray-400">
            <a href="#" className="hover:text-glowPrimary"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-glowPrimary"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>© 2026 GlowUp — Projeto de Autocuidado & Preservação Inteligente. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}