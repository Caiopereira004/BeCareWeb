import React from 'react';
import { TutorialItem } from '../App';

interface TutorialsProps {
  tutorials: TutorialItem[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

export default function Tutorials({ tutorials, favorites, onToggleFavorite }: TutorialsProps) {
  return (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-glowNude via-white to-pink-50 rounded-3xl p-8 text-center space-y-2 border border-pink-100">
        <span class="text-xs font-bold uppercase tracking-widest text-glowPrimary bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-pink-100">
          Aulas & Conteúdo Educacional
        </span>
        <h2 class="text-3xl font-black text-gray-800">Aprenda práticas de autocuidado</h2>
        <p class="text-xs text-gray-600 max-w-xl mx-auto">Vídeos demonstrativos com orientações de especialistas em React + Vite.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map(t => {
          const isFav = favorites.includes(t.id);
          return (
            <div key={t.id} class="bg-white rounded-3xl border border-pink-100 overflow-hidden shadow-sm space-y-4 p-5 flex flex-col justify-between">
              <div class="space-y-4">
                <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                  <iframe class="w-full h-full" src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}`} title={t.title} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold text-glowPrimary uppercase bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100">{t.category}</span>
                    <button onClick={() => onToggleFavorite(t.id)} class={`text-lg ${isFav ? 'text-glowPrimary' : 'text-gray-300 hover:text-glowPrimary'} transition`}>
                      <i class="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm leading-snug">{t.title}</h4>
                  <p class="text-xs text-gray-500">Por {t.author} • {t.duration}</p>
                </div>
              </div>

              <div class="bg-gray-50 p-3.5 rounded-2xl space-y-2 border border-gray-100">
                <span class="text-[10px] font-bold uppercase text-gray-400">Recomendação Térmica:</span>
                <p class="text-xs font-semibold text-gray-700">{t.product}</p>
                <div class="flex items-center justify-between pt-1">
                  <span class="text-[10px] font-bold text-glowCyan">❄️ Temp: {t.minTemp}°C - {t.maxTemp}°C</span>
                  <a href={`https://www.youtube.com/watch?v=${t.youtubeId}`} target="_blank" rel="noreferrer" class="text-xs font-bold text-glowPrimary hover:underline flex items-center">
                    Ver no YT <i class="fa-solid fa-arrow-up-right-from-square text-[9px] ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
