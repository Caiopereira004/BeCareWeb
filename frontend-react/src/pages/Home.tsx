import React from 'react';
import { User, Habit } from '../App';

interface HomeProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  habits: Habit[];
  onToggleHabit: (id: number) => void;
  showToast: (msg: string) => void;
}

export default function Home({ user, setUser, habits, onToggleHabit, showToast }: HomeProps) {
  const completedCount = habits.filter(h => h.completed).length;
  const progressPercent = Math.round((completedCount / habits.length) * 100);

  return (
    <div class="space-y-12">
      <div class="relative bg-gradient-to-r from-glowNude via-pink-50 to-white rounded-3xl p-8 sm:p-12 border border-pink-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="space-y-6 max-w-xl z-10">
          <span class="text-xs font-bold uppercase tracking-widest text-glowPrimary bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-pink-100">
            ✨ Quiz de Beleza & Autocuidado
          </span>
          <h1 class="text-4xl sm:text-5xl font-black text-gray-800 leading-tight">
            Descubra a rotina perfeita para a sua pele.
          </h1>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
            Responda duas perguntas simples para que nosso sistema recomende a rotina ideal de tratamento.
          </p>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 space-y-4">
            <div>
              <label class="text-xs font-bold text-gray-500 uppercase">1. Qual o seu tipo de pele?</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                {['Mista', 'Seca', 'Oleosa', 'Sensível'].map(type => (
                  <button
                    key={type}
                    onClick={() => setUser(prev => ({ ...prev, skinType: type }))}
                    class={`px-3 py-2 text-xs font-semibold rounded-xl border ${user.skinType === type ? 'bg-glowPrimary text-white border-glowPrimary' : 'bg-gray-50 text-gray-700 hover:bg-pink-50'} transition`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label class="text-xs font-bold text-gray-500 uppercase">2. Qual seu objetivo principal?</label>
              <div class="grid grid-cols-2 gap-2 mt-2">
                {['Luminosidade', 'Hidratação', 'Anti-Idade', 'Controle Oleosidade'].map(goal => (
                  <button
                    key={goal}
                    onClick={() => setUser(prev => ({ ...prev, goal: goal }))}
                    class={`px-3 py-2 text-xs font-semibold rounded-xl border ${user.goal === goal ? 'bg-glowPrimary text-white border-glowPrimary' : 'bg-gray-50 text-gray-700 hover:bg-pink-50'} transition`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full lg:w-96 h-80 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
          <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80" alt="Skincare" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
            <p class="text-white text-xs font-medium leading-relaxed">"O autocuidado constante transforma o bem-estar diário."</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4">
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <h2 class="text-2xl font-bold text-gray-800">Olá, {user.name}! 👋</h2>
                <p class="text-xs text-gray-500">Como está seu bem-estar hoje?</p>
              </div>
              <span class="text-xs font-bold bg-pink-50 text-glowDark px-3 py-1.5 rounded-full border border-pink-100 self-start">Humor: {user.mood || '✨ Radiante'}</span>
            </div>

            <div class="flex flex-wrap gap-3 pt-2">
              {['✨ Radiante', '💖 Inspirada', '🌿 Relaxada', '😴 Cansada', '💆‍♀️ Estressada'].map(m => (
                <button
                  key={m}
                  onClick={() => {
                    setUser(prev => ({ ...prev, mood: m }));
                    showToast(`Humor registrado: ${m}`);
                  }}
                  class={`px-4 py-2 rounded-2xl text-xs font-semibold border ${user.mood === m ? 'bg-glowDark text-white border-glowDark' : 'bg-gray-50 text-gray-700 hover:bg-pink-50'} transition`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div class="bg-gradient-to-br from-glowDark to-glowPrimary text-white p-6 rounded-3xl shadow-md space-y-3">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-sparkles text-pink-200"></i>
              <span class="text-xs font-bold uppercase tracking-widest text-pink-200">Recomendação de Autocuidado</span>
            </div>
            <h3 class="text-xl font-bold">
              {user.skinType && user.goal ? `Ritual Personalizado: Pele ${user.skinType} (${user.goal})` : 'Selecione seu tipo de pele no quiz acima'}
            </h3>
            <p class="text-xs text-pink-100 leading-relaxed">
              {user.skinType ? `Para sua pele ${user.skinType}, mantenha a limpeza com água fria e aplique sérum facial conservado à temperatura de 6°C na GlowFridge.` : 'Responda o quiz para gerar sua rotina personalizada.'}
            </p>
          </div>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-6">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-gray-800 flex items-center text-sm">
              <i class="fa-solid fa-check-double text-glowPrimary mr-2"></i> Hábitos Diários
            </h3>
            <span class="text-xs font-bold text-glowDark bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100">{completedCount}/{habits.length} ({progressPercent}%)</span>
          </div>

          <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div class="bg-glowPrimary h-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>

          <div class="space-y-3">
            {habits.map(h => (
              <div
                key={h.id}
                onClick={() => onToggleHabit(h.id)}
                class={`flex items-center justify-between p-3.5 rounded-2xl border ${h.completed ? 'bg-pink-50/50 border-pink-200 text-gray-800' : 'bg-gray-50 border-gray-100 text-gray-500'} cursor-pointer hover:border-pink-300 transition`}
              >
                <span class={`text-xs font-medium ${h.completed ? 'line-through text-gray-400' : ''}`}>{h.title}</span>
                <div class={`w-5 h-5 rounded-md flex items-center justify-center ${h.completed ? 'bg-glowPrimary text-white' : 'border border-gray-300'} text-xs`}>
                  {h.completed && <i class="fa-solid fa-check"></i>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
