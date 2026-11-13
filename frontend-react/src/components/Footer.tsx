import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-glowPrimary flex items-center justify-center text-white font-bold text-sm">♥</div>
            <span class="text-xl font-bold text-white">GlowUp</span>
          </div>
          <p class="text-xs text-gray-400 leading-relaxed">
            Plataforma de alta tecnologia em React + Vite aplicada ao bem-estar e cosmética preventiva.
          </p>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-300 mb-4 uppercase tracking-wider">Navegação</h4>
          <ul class="space-y-2 text-xs text-gray-400">
            <li><button onClick={() => onNavigate('home')} class="hover:text-glowPrimary transition">Início</button></li>
            <li><button onClick={() => onNavigate('tutorials')} class="hover:text-glowPrimary transition">Tutoriais & Aulas</button></li>
            <li><button onClick={() => onNavigate('fridge')} class="hover:text-glowPrimary transition">Geladeira Smart</button></li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-300 mb-4 uppercase tracking-wider">Documentação & API</h4>
          <ul class="space-y-2 text-xs text-gray-400">
            <li><a href="http://localhost:5000/api-docs" target="_blank" class="hover:text-glowPrimary transition">Swagger API Docs ↗</a></li>
            <li>Node.js + Express + TypeScript</li>
            <li>MongoDB Mongoose + Bcrypt</li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-300 mb-4 uppercase tracking-wider">Contato</h4>
          <p class="text-xs text-gray-400 mb-2">suporte@glowup-beauty.com</p>
          <div class="flex space-x-4 text-base text-gray-400">
            <a href="#" class="hover:text-glowPrimary"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="hover:text-glowPrimary"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>© 2026 GlowUp — Projeto Acadêmico de Autocuidado em React + Vite. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
