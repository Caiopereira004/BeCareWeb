import React from 'react';
import { User } from '../App';

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

export default function Profile({ user, onLogout }: ProfileProps) {
  const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-pink-100 shadow-sm space-y-8">
      <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
        <div class="w-20 h-20 rounded-full bg-glowNude text-glowDark font-black text-2xl flex items-center justify-center border-4 border-pink-100 shadow-sm">
          {initials || 'GU'}
        </div>
        <div class="space-y-1">
          <h2 class="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p class="text-xs text-gray-500">{user.email || 'usuario@glowup.com'}</p>
          <span class="inline-block text-[10px] font-bold text-glowDark bg-pink-50 px-3 py-1 rounded-full border border-pink-100">Usuária Cadastrada</span>
        </div>
      </div>

      <div class="space-y-4 border-t border-gray-100 pt-6">
        <h3 class="font-bold text-gray-800 text-sm">Relatório Semanal de Constância</h3>
        <div class="h-40 flex items-end justify-between gap-2 pt-4">
          {[60, 80, 40, 100, 90, 70, 85].map((val, i) => (
            <div key={i} class="flex-1 flex flex-col items-center gap-2">
              <div class="w-full bg-glowPrimary/20 rounded-t-xl relative overflow-hidden" style={{ height: `${val}%` }}>
                <div class="bg-glowPrimary absolute bottom-0 w-full h-full"></div>
              </div>
              <span class="text-[10px] font-bold text-gray-400">{['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div class="border-t border-gray-100 pt-4 flex justify-end">
        <button onClick={onLogout} class="text-xs font-bold text-red-500 hover:underline">
          <i class="fa-solid fa-right-from-bracket mr-1"></i> Sair da Conta
        </button>
      </div>
    </div>
  );
}
