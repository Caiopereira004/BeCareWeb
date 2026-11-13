import React, { useState } from 'react';
import { User } from '../App';

interface AuthProps {
  onAuthSuccess: (user: User) => void;
  onNavigateHome: () => void;
}

const API_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000';

export default function Auth({ onAuthSuccess, onNavigateHome }: AuthProps) {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userName = name || email.split('@')[0];

    try {
      const endpoint = authMode === 'register' ? '/register' : '/login';
      const res = await fetch(`${API_URL}/api/auth${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        if (data.token) {
          localStorage.setItem('glowup_token', data.token);
        }
        onAuthSuccess(data.user);
      } else {
        alert(data.message || 'Erro de autenticação.');
      }
    } catch (err) {
      // Offline / Fallback para navegação no frontend
      onAuthSuccess({ name: userName, email, mood: '✨ Radiante' });
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-xl border border-pink-100 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-glowNude rounded-full mx-auto flex items-center justify-center text-glowPrimary text-2xl font-black shadow-inner">♥</div>
          <h2 className="text-2xl font-black text-glowDark">{authMode === 'register' ? 'Criar Conta no GlowUp' : 'Entrar no GlowUp'}</h2>
          <p className="text-xs text-gray-500">Acesse sua conta para visualizar seus rituais</p>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-2xl">
          <button
            type="button"
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl ${authMode === 'login' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-800'} transition`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => setAuthMode('register')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl ${authMode === 'register' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-800'} transition`}
          >
            Criar Conta
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === 'register' && (
            <div>
              <label className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Seu Nome Completo</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Ex: Ana Silva"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 focus:ring-2 focus:ring-glowPrimary outline-none text-xs"
              />
            </div>
          )}
          <div>
            <label className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 focus:ring-2 focus:ring-glowPrimary outline-none text-xs"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Senha (Criptografada com Bcrypt)</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 focus:ring-2 focus:ring-glowPrimary outline-none text-xs"
            />
          </div>
          <button type="submit" className="w-full bg-glowPrimary text-white py-3.5 rounded-full font-bold shadow-md hover:bg-glowDark transition text-xs uppercase tracking-wider">
            {authMode === 'register' ? 'Finalizar Cadastro' : 'Entrar na Conta'}
          </button>
        </form>

        <div className="text-center text-xs text-gray-500 border-t border-gray-100 pt-4">
          <button type="button" onClick={onNavigateHome} className="text-gray-400 hover:text-gray-600">
            <i className="fa-solid fa-arrow-left mr-1"></i> Voltar para a Página Inicial
          </button>
        </div>
      </div>
    </div>
  );
}