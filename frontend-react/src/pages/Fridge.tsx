import React from 'react';

interface FridgeProps {
  onOpenModal: () => void;
  onScrollApp: () => void;
}

export default function Fridge({ onOpenModal, onScrollApp }: FridgeProps) {
  return (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div class="space-y-4 max-w-xl">
          <span class="text-xs font-bold uppercase tracking-widest text-glowCyan bg-glowCyan/10 px-3.5 py-1.5 rounded-full border border-glowCyan/30">
            Tecnologia & Preservação IoT
          </span>
          <h2 class="text-3xl sm:text-4xl font-black leading-tight">Geladeira Smart Skincare GlowFridge</h2>
          <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Desenvolvida com resfriamento termoelétrico avançado para conservar seus cosméticos ativos (Vitamina C, Retinol e Ácidos) na temperatura exata.
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <button onClick={onOpenModal} class="bg-white text-gray-900 font-bold px-6 py-3 rounded-2xl text-xs hover:bg-glowNude transition shadow-lg">
              Especificações Técnicas 📋
            </button>
            <button onClick={onScrollApp} class="bg-glowCyan text-gray-900 font-bold px-6 py-3 rounded-2xl text-xs hover:bg-white transition shadow-lg">
              Conectar com o App Mobile 📱
            </button>
          </div>
        </div>
        
        <div class="w-56 h-72 bg-gradient-to-b from-slate-100 to-slate-300 rounded-3xl border-4 border-slate-400 p-4 shadow-2xl flex flex-col justify-between relative">
          <div class="w-full flex justify-between items-center border-b border-slate-300 pb-2">
            <span class="text-[10px] font-bold text-slate-600">GlowFridge v1</span>
            <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div class="text-center my-auto space-y-1">
            <span class="text-5xl font-black text-slate-800">6°C</span>
            <p class="text-[10px] text-slate-500 uppercase font-semibold">Temperatura Ideal</p>
          </div>
          <div class="w-full text-center text-[9px] text-slate-400 border-t border-slate-300 pt-1">
            Bluetooth 5.0 Low Energy
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-3xl border border-pink-100 space-y-2">
          <div class="w-10 h-10 rounded-2xl bg-pink-50 text-glowPrimary flex items-center justify-center font-bold text-lg mb-3">
            <i class="fa-solid fa-temperature-arrow-down"></i>
          </div>
          <h4 class="font-bold text-gray-800 text-sm">Controle Térmico Estável</h4>
          <p class="text-xs text-gray-500 leading-relaxed">Mantenha ativos dermatológicos entre 2°C e 12°C para prevenir a oxidação precoce.</p>
        </div>
        <div class="bg-white p-6 rounded-3xl border border-pink-100 space-y-2">
          <div class="w-10 h-10 rounded-2xl bg-pink-50 text-glowPrimary flex items-center justify-center font-bold text-lg mb-3">
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
          <h4 class="font-bold text-gray-800 text-sm">Sincronização via App</h4>
          <p class="text-xs text-gray-500 leading-relaxed">Acompanhe métricas em tempo real e receba alertas diretamente no smartphone.</p>
        </div>
        <div class="bg-white p-6 rounded-3xl border border-pink-100 space-y-2">
          <div class="w-10 h-10 rounded-2xl bg-pink-50 text-glowPrimary flex items-center justify-center font-bold text-lg mb-3">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h4 class="font-bold text-gray-800 text-sm">Alarme de Segurança</h4>
          <p class="text-xs text-gray-500 leading-relaxed">Sensor integrado que avisa caso a porta fique aberta por mais de 40 segundos.</p>
        </div>
      </div>
    </div>
  );
}
