import React, { useState } from 'react';
import HomeComp from './pages/Home';
import TutorialsComp from './pages/Tutorials';
import FridgeComp from './pages/Fridge';
import AuthComp from './pages/Auth';
import ProfileComp from './pages/Profile';
import Footer from './components/Footer';

const Home = HomeComp as React.ComponentType<any>;
const Tutorials = TutorialsComp as React.ComponentType<any>;
const Fridge = FridgeComp as React.ComponentType<any>;
const Auth = AuthComp as React.ComponentType<any>;
const Profile = ProfileComp as React.ComponentType<any>;


export interface User {
  id?: string;
  name: string;
  email: string;
  mood?: string;
  skinType?: string;
  goal?: string;
}

export type Page = 'home' | 'tutorials' | 'fridge' | 'auth' | 'profile';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (target: Page) => {
    setPage(target);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-glowBg">
      {/* Banner superior */}
      <div className="bg-glowDark text-white text-[11px] py-2 px-4 text-center font-medium">
        ✨ Sincronize sua rotina de skincare com a Geladeira Smart GlowFridge
      </div>

      {/* Header fixo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Esquerda: Botão Menu Mobile + Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
              className="md:hidden p-2 rounded-xl text-glowDark hover:bg-glowNude transition"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>

            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 font-black text-xl text-glowDark"
            >
              <span className="w-8 h-8 rounded-full bg-glowNude flex items-center justify-center text-glowPrimary text-base">♥</span>
              GlowUp
            </button>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-600">
            <button
              onClick={() => navigateTo('home')}
              className={page === 'home' ? 'text-glowPrimary' : 'hover:text-glowPrimary transition'}
            >
              Início
            </button>
            <button
              onClick={() => navigateTo('tutorials')}
              className={page === 'tutorials' ? 'text-glowPrimary' : 'hover:text-glowPrimary transition'}
            >
              Tutoriais & Aulas
            </button>
            <button
              onClick={() => navigateTo('fridge')}
              className={page === 'fridge' ? 'text-glowPrimary' : 'hover:text-glowPrimary transition'}
            >
              ❄️ Geladeira Smart
            </button>
          </nav>

          {/* Direita: Conta / Perfil */}
          <div>
            {user ? (
              <button
                onClick={() => navigateTo('profile')}
                className="bg-glowNude text-glowDark px-3.5 py-2 rounded-full text-xs font-bold border border-pink-200 hover:bg-pink-100 transition"
              >
                👤 {user.name.split(' ')[0]}
              </button>
            ) : (
              <button
                onClick={() => navigateTo('auth')}
                className="bg-glowPrimary text-white px-4 py-2 rounded-full text-xs font-bold shadow hover:bg-glowDark transition"
              >
                Entrar
              </button>
            )}
          </div>
        </div>
      </header>

      {/* MENU LATERAL DESLIZANTE (MOBILE DRAWER) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Fundo escuro transparente ao clicar fora */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          ></div>

          {/* Gaveta lateral esquerda */}
          <aside className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10">
            <div className="space-y-6">
              {/* Topo do menu */}
              <div className="flex items-center justify-between border-b border-pink-100 pb-4">
                <div className="flex items-center gap-2 font-black text-lg text-glowDark">
                  <span className="text-glowPrimary">♥</span> GlowUp
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 text-gray-400 hover:text-gray-700 rounded-lg"
                >
                  <i className="fa-solid fa-xmark text-xl"></i>
                </button>
              </div>

              {/* Links das telas */}
              <nav className="flex flex-col space-y-2 text-sm font-bold">
                <button
                  onClick={() => navigateTo('home')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                    page === 'home'
                      ? 'bg-glowNude text-glowPrimary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fa-solid fa-house w-5 text-center"></i>
                  Início
                </button>

                <button
                  onClick={() => navigateTo('tutorials')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                    page === 'tutorials'
                      ? 'bg-glowNude text-glowPrimary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fa-solid fa-circle-play w-5 text-center"></i>
                  Tutoriais & Aulas
                </button>

                <button
                  onClick={() => navigateTo('fridge')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                    page === 'fridge'
                      ? 'bg-glowNude text-glowPrimary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fa-solid fa-snowflake w-5 text-center text-glowCyan"></i>
                  Geladeira Smart
                </button>

                {user && (
                  <button
                    onClick={() => navigateTo('profile')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                      page === 'profile'
                        ? 'bg-glowNude text-glowPrimary'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <i className="fa-solid fa-user w-5 text-center"></i>
                    Meu Perfil
                  </button>
                )}
              </nav>
            </div>

            {/* Rodapé do menu lateral */}
            <div className="border-t border-pink-100 pt-4">
              {user ? (
                <button
                  onClick={() => {
                    setUser(null);
                    navigateTo('home');
                  }}
                  className="w-full py-3 rounded-2xl bg-red-50 text-red-600 text-xs font-bold hover:bg-red-100 transition"
                >
                  Sair da Conta
                </button>
              ) : (
                <button
                  onClick={() => navigateTo('auth')}
                  className="w-full py-3 rounded-2xl bg-glowPrimary text-white text-xs font-bold shadow hover:bg-glowDark transition"
                >
                  Entrar / Criar Conta
                </button>
              )}
            </div>
          </aside>
        </div>
      )}

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {page === 'home' && (
          <Home
            user={user}
            onUpdateMood={(mood: string) => user && setUser({ ...user, mood })}
          />
        )}
        {page === 'tutorials' && <Tutorials />}
        {page === 'fridge' && <Fridge />}
        {page === 'auth' && (
          <Auth
            onAuthSuccess={(u: User) => {
              setUser(u);
              navigateTo('home');
            }}
            onNavigateHome={() => navigateTo('home')}
          />
        )}
        {page === 'profile' && user && (
          <Profile
            user={user}
            onLogout={() => {
              setUser(null);
              navigateTo('home');
            }}
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}