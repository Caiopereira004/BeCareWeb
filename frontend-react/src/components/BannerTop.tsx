import React from 'react';

interface BannerTopProps {
  onNavigateApp: () => void;
}

export default function BannerTop({ onNavigateApp }: BannerTopProps) {
  return (
    <div class="bg-gradient-to-r from-glowDark via-glowPrimary to-glowDark text-white px-4 py-2 text-xs sm:text-sm font-medium text-center flex items-center justify-center space-x-3 shadow-sm z-50">
      <span>✨ Baixe o <strong>App Mobile GlowUp</strong> para sincronizar com sua rotina em qualquer lugar</span>
      <button onClick={onNavigateApp} class="bg-white text-glowDark px-3 py-1 rounded-full text-xs font-bold hover:bg-glowNude transition">
        Conhecer App <i class="fa-solid fa-arrow-down ml-1"></i>
      </button>
    </div>
  );
}
