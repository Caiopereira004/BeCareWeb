import React from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  isLoggedIn: boolean;
  userName: string;
}

export default function Header({ currentView, onNavigate, isLoggedIn, userName }: HeaderProps) {
  const initials = userName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <div class="w-10 h-10 rounded-full bg-glowNude flex items-center justify-center text-glowPrimary font-black text-xl shadow-inner">♥</div>
          <div>
            <span class="text-2xl font-black text-glowDark tracking-tight">GlowUp</span>
            <span class="hidden sm:inline-block text-[10px] text-glowPrimary font-bold uppercase tracking-widest ml-1.5 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">React + Vite</span>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-8 font-semibold text-sm text-gray-600">
          <button onClick={() => onNavigate('home')} class={`hover:text-glowPrimary transition py-1 ${currentView === 'home' ? 'text-glowPrimary font-bold' : ''}`}>Início</button>
          <button onClick={() => onNavigate('tutorials')} class={`hover:text-glowPrimary transition py-1 ${currentView === 'tutorials' ? 'text-glowPrimary font-bold' : ''}`}>Tutoriais & Aulas</button>
          <button onClick={() => onNavigate('fridge')} class={`hover:text-glowPrimary transition py-1 flex items-center ${currentView === 'fridge' ? 'text-glowPrimary font-bold' : ''}`}>
            <i class="fa-solid fa-snowflake text-glowCyan mr-1.5 text-xs"></i> Geladeira Smart
          </button>
        </nav>

        <div>
          {isLoggedIn ? (
            <button onClick={() => onNavigate('profile')} class="flex items-center space-x-2 border border-pink-100 p-1.5 rounded-full hover:bg-pink-50 transition">
              <div class="w-8 h-8 rounded-full bg-glowNude text-glowDark font-black text-xs flex items-center justify-center">
                {initials || 'GU'}
              </div>
              <span class="text-xs font-bold text-gray-700 pr-2 hidden sm:inline-block">{userName}</span>
            </button>
          ) : (
            <button onClick={() => onNavigate('auth')} class="bg-glowPrimary text-white px-5 py-2 rounded-full text-xs font-bold shadow-md hover:bg-glowDark transition">
              Entrar / Cadastrar
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
