import React from 'react';

interface FridgeProps {
  onOpenModal?: () => void;
  onOpenTechSpecs?: () => void;
  onScrollApp?: () => void;
  onDownloadApp?: () => void;
  showToast?: (msg: string) => void;
}

export default function Fridge({
  onOpenModal,
  onOpenTechSpecs,
  onScrollApp,
  onDownloadApp,
}: FridgeProps) {
  const handleOpenSpecs = () => {
    if (onOpenTechSpecs) {
      onOpenTechSpecs();
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

  const handleScrollToApp = () => {
    if (onScrollApp) {
      onScrollApp();
      return;
    }
    if (onDownloadApp) {
      onDownloadApp();
      return;
    }
    const el = document.getElementById('app-download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-4 max-w-xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-glowCyan bg-glowCyan/10 px-3.5 py-1.5 rounded-full border border-glowCyan/30">
            Tecnologia & Preservação IoT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Geladeira Smart Skincare GlowFridge
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Desenvolvida com resfriamento termoelétrico avançado para conservar seus cosméticos ativos (Vitamina C, Retinol e Ácidos) na temperatura exata.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={handleOpenSpecs}
              className="bg-white text-gray-900 font-bold px-6 py-3 rounded-2xl text-xs hover:bg-glowNude transition shadow-lg"
            >
              Especificações Técnicas 📋
            </button>
            <button
              type="button"
              onClick={handleScrollToApp}
              className="bg-glowCyan text-gray-900 font-bold px-6 py-3 rounded-2xl text-xs hover:bg-white transition shadow-lg"
            >
              Conectar com o App Mobile 📱
            </button>
          </div>
        </div>

        <div className="w-56 h-72 bg-gradient-to-b from-slate-100 to-slate-300 rounded-3xl border-4 border-slate-400 p-4 shadow-2xl flex flex-col justify-between relative">
          <div className="w-full flex justify-between items-center border-b border-slate-300 pb-2">
            <span className="text-[10px] font-bold text-slate-600">GlowFridge v1</span>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div className="text-center my-auto space-y-1">
            <span className="text-5xl font-black text-slate-800">6°C</span>
            <p className="text-[10px] text-slate-500 uppercase font-semibold">Temperatura Ideal</p>
          </div>
          <div className="w-full text-center text-[9px] text-slate-400 border-t border-slate-300 pt-1">
            Bluetooth 5.0 Low Energy
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-pink-100 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-pink-50 text-glowPrimary flex items-center justify-center font-bold text-lg mb-3">
            <i className="fa-solid fa-temperature-arrow-down"></i>
          </div>
          <h4 className="font-bold text-gray-800 text-sm">Controle Térmico Estável</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Mantenha ativos dermatológicos entre 2°C e 12°C para prevenir a oxidação precoce.
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-pink-100 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-pink-50 text-glowPrimary flex items-center justify-center font-bold text-lg mb-3">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </div>
          <h4 className="font-bold text-gray-800 text-sm">Sincronização via App</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Acompanhe métricas em tempo real e receba alertas diretamente no smartphone.
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-pink-100 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-pink-50 text-glowPrimary flex items-center justify-center font-bold text-lg mb-3">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h4 className="font-bold text-gray-800 text-sm">Alarme de Segurança</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Sensor integrado que avisa caso a porta fique aberta por mais de 40 segundos.
          </p>
        </div>
      </div>
    </div>
  );
}