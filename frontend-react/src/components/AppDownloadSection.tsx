import React from 'react';

interface AppDownloadProps {
  showToast: (msg: string) => void;
}

export default function AppDownloadSection({ showToast }: AppDownloadProps) {
  return (
    <section id="app-download" class="bg-gradient-to-r from-pink-100 via-glowNude to-pink-50 py-16 border-t border-pink-100">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="space-y-6 max-w-xl">
          <span class="text-xs font-bold uppercase tracking-widest text-glowPrimary bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-pink-100">Ecossistema GlowUp</span>
          <h2 class="text-3xl sm:text-4xl font-black text-gray-800 leading-tight">Sua rotina de beleza sincronizada em tempo real.</h2>
          <p class="text-gray-600 text-sm leading-relaxed">Baixe o aplicativo mobile oficial para conectar à sua <strong>GlowFridge</strong> via Bluetooth e acompanhar seus hábitos diários de skincare.</p>
          <div class="flex flex-wrap gap-4 pt-2">
            <button onClick={() => showToast('Redirecionando para a App Store...')} class="bg-gray-900 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 hover:bg-black transition shadow-md">
              <i class="fa-brands fa-apple text-2xl"></i>
              <div class="text-left">
                <div class="text-[10px] uppercase tracking-wider text-gray-400">Baixar na</div>
                <div class="text-sm font-bold -mt-1">App Store</div>
              </div>
            </button>
            <button onClick={() => showToast('Redirecionando para a Google Play...')} class="bg-gray-900 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 hover:bg-black transition shadow-md">
              <i class="fa-brands fa-google-play text-xl"></i>
              <div class="text-left">
                <div class="text-[10px] uppercase tracking-wider text-gray-400">Disponível no</div>
                <div class="text-sm font-bold -mt-1">Google Play</div>
              </div>
            </button>
          </div>
        </div>
        <div class="bg-white p-6 rounded-3xl shadow-xl border border-pink-100 text-center space-y-4">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://glowup-app.com" alt="QR Code App" class="w-44 h-44 mx-auto rounded-xl" />
          <p class="text-xs text-gray-500 font-semibold">Escanear com o celular para baixar</p>
        </div>
      </div>
    </section>
  );
}
