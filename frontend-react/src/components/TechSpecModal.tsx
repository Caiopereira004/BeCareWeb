import React from 'react';

interface TechSpecModalProps {
  onClose: () => void;
}

export default function TechSpecModal({ onClose }: TechSpecModalProps) {
  return (
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative space-y-6">
        <button onClick={onClose} class="absolute top-5 right-5 text-gray-400 hover:text-gray-600">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>

        <div class="flex items-center space-x-3 border-b border-pink-100 pb-4">
          <div class="w-10 h-10 rounded-full bg-glowCyan/10 text-glowCyan flex items-center justify-center font-bold text-lg">
            <i class="fa-solid fa-snowflake"></i>
          </div>
          <div>
            <h3 class="text-xl font-black text-gray-800">GlowFridge Smart — Ficha Técnica</h3>
            <p class="text-xs text-gray-500">Especificações de Engenharia e Preservação IoT</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 text-xs">
          <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <span class="text-[10px] uppercase font-bold text-gray-400">Capacidade Volumétrica</span>
            <p class="font-bold text-gray-800 text-sm mt-0.5">4 Litros (Até 6 itens)</p>
          </div>
          <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <span class="text-[10px] uppercase font-bold text-gray-400">Faixa de Temperatura</span>
            <p class="font-bold text-glowCyan text-sm mt-0.5">2°C a 12°C (Precisão ±0.5°C)</p>
          </div>
          <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <span class="text-[10px] uppercase font-bold text-gray-400">Tecnologia de Resfriamento</span>
            <p class="font-bold text-gray-800 text-sm mt-0.5">Termoelétrica Peltier (Sem Freon)</p>
          </div>
          <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <span class="text-[10px] uppercase font-bold text-gray-400">Conectividade Smart</span>
            <p class="font-bold text-gray-800 text-sm mt-0.5">Bluetooth 5.0 Low Energy</p>
          </div>
          <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <span class="text-[10px] uppercase font-bold text-gray-400">Alimentação Elétrica</span>
            <p class="font-bold text-gray-800 text-sm mt-0.5">Bivolt Automático (110V / 220V)</p>
          </div>
          <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <span class="text-[10px] uppercase font-bold text-gray-400">Nível Ruído Acústico</span>
            <p class="font-bold text-gray-800 text-sm mt-0.5">Ultra Silenciosa (&lt; 28dB)</p>
          </div>
        </div>

        <div class="bg-pink-50 p-4 rounded-2xl border border-pink-100 text-xs text-glowDark space-y-1">
          <p class="font-bold">🛡️ Sistema Integrado de Alarme da Porta:</p>
          <p class="text-[11px] text-gray-600">A porta possui sensor óptico acoplado. Aberturas superiores a 40 segundos ativam o isolamento de emergência no aplicativo mobile.</p>
        </div>
      </div>
    </div>
  );
}
