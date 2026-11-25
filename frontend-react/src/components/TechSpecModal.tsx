import React from 'react';

interface TechSpecModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export default function TechSpecModal({ isOpen = true, onClose }: TechSpecModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-pink-100 p-6 sm:p-8 space-y-6"
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-pink-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-glowNude text-glowPrimary flex items-center justify-center text-lg">
              ⚙️
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-glowDark">
                Especificações Técnicas — GlowUp & GlowFridge
              </h2>
              <p className="text-xs text-gray-500">
                Arquitetura Full-Stack MERN & Integração IoT Smart Skincare
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar especificações"
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        {/* Grid de Especificações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-glowBg p-4 rounded-2xl border border-pink-100 space-y-1.5">
            <h3 className="font-extrabold text-glowDark text-sm">🎨 Front-end & Mobile</h3>
            <p className="text-gray-600">• React 18 + TypeScript + Vite</p>
            <p className="text-gray-600">• Tailwind CSS Responsivo (Drawer Mobile)</p>
            <p className="text-gray-600">• PWA Instalável via QR Code (Android / iOS)</p>
            <p className="text-gray-600">• Hospedagem Contínua: Vercel Edge Network</p>
          </div>

          <div className="bg-glowBg p-4 rounded-2xl border border-pink-100 space-y-1.5">
            <h3 className="font-extrabold text-glowDark text-sm">⚡ Back-end & Banco de Dados</h3>
            <p className="text-gray-600">• Node.js + Express REST API</p>
            <p className="text-gray-600">• MongoDB Atlas (Cloud Cluster)</p>
            <p className="text-gray-600">• Autenticação JWT & Hash Bcrypt</p>
            <p className="text-gray-600">• Hospedagem API: Render Cloud</p>
          </div>

          <div className="bg-cyan-50/60 p-4 rounded-2xl border border-cyan-100 space-y-1.5">
            <h3 className="font-extrabold text-glowDark text-sm">❄️ Hardware GlowFridge IoT</h3>
            <p className="text-gray-600">• Faixa Térmica: 4°C a 12°C (Precisão ±0.5°C)</p>
            <p className="text-gray-600">• Refrigeração Termoelétrica Peltier Silenciosa</p>
            <p className="text-gray-600">• Sensores de Umidade e Abertura de Porta</p>
            <p className="text-gray-600">• Alerta Inteligente de Validade de Ativos</p>
          </div>

          <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-100 space-y-1.5">
            <h3 className="font-extrabold text-glowDark text-sm">✨ IA & Recomendações</h3>
            <p className="text-gray-600">• Diagnóstico Personalizado por Tipo de Pele</p>
            <p className="text-gray-600">• Curadoria de Tutoriais em Vídeo (YouTube API)</p>
            <p className="text-gray-600">• Monitoramento de Humor & Constância Diária</p>
            <p className="text-gray-600">• Sincronização Multi-dispositivo</p>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-glowPrimary text-white text-xs font-bold shadow hover:bg-glowDark transition"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}