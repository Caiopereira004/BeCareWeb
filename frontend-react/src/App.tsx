import React, { useState } from 'react';
import HomeComp from './pages/Home';
import TutorialsComp from './pages/Tutorials';
import FridgeComp from './pages/Fridge';
import AuthComp from './pages/Auth';
import ProfileComp from './pages/Profile';
import Footer from './components/Footer';
import AppDownloadComp from './components/AppDownloadSection';

const Home = HomeComp as React.ComponentType<any>;
const Tutorials = TutorialsComp as React.ComponentType<any>;
const Fridge = FridgeComp as React.ComponentType<any>;
const Auth = AuthComp as React.ComponentType<any>;
const Profile = ProfileComp as React.ComponentType<any>;
const AppDownloadSection = AppDownloadComp as React.ComponentType<any>;

export interface User {
  id?: string;
  name: string;
  email: string;
  mood?: string;
  skinType?: string;
  goal?: string;
}

export interface Habit {
  id: string;
  title: string;
  time?: string;
  completed: boolean;
}

export type Page = 'home' | 'tutorials' | 'fridge' | 'auth' | 'profile';

const DEFAULT_USER: User = {
  name: 'Visitante Glow',
  email: 'visitante@glowup.com',
  mood: '✨ Radiante',
  skinType: 'Mista',
  goal: 'Luminosidade',
};

const INITIAL_HABITS: Habit[] = [
  { id: '1', title: 'Limpeza facial suave', time: 'Manhã', completed: true },
  { id: '2', title: 'Aplicar Sérum Vitamina C (Geladeira)', time: 'Manhã', completed: false },
  { id: '3', title: 'Protetor Solar FPS 50+', time: 'Manhã', completed: false },
  { id: '4', title: 'Hidratação noturna reparadora', time: 'Noite', completed: false },
];

const INITIAL_TUTORIALS = [
  {
    id: 'qP3K-L9Wd8o',
    youtubeId: 'qP3K-L9Wd8o',
    title: 'Rotina Noturna de Hidratação Profunda',
    category: 'Skincare',
    author: 'GlowIA Academy',
    duration: '12 min',
    isAI: true,
    cover: 'https://img.youtube.com/vi/qP3K-L9Wd8o/hqdefault.jpg',
    product: 'Sérum Facial Hidratante (8°C - 12°C)',
  },
  {
    id: 'j4jrPoaxw1I',
    youtubeId: 'j4jrPoaxw1I',
    title: 'Skincare Matinal para Pele Luminosa',
    category: 'Skincare',
    author: 'Dra. Camila Beleza',
    duration: '08 min',
    isAI: false,
    cover: 'https://img.youtube.com/vi/j4jrPoaxw1I/hqdefault.jpg',
    product: 'Vitamina C Pura 10% (4°C - 8°C)',
  },
  {
    id: '8-Jm7t9eK-U',
    youtubeId: '8-Jm7t9eK-U',
    title: 'Massagem Facial Drenante & Glow Natural',
    category: 'Massagem Facial',
    author: 'GlowIA Studio',
    duration: '10 min',
    isAI: true,
    cover: 'https://img.youtube.com/vi/8-Jm7t9eK-U/hqdefault.jpg',
    product: 'Roller & Gua Sha Resfriado (4°C - 6°C)',
  },
];

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [guestUser, setGuestUser] = useState<User>(DEFAULT_USER);
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);
  const [favorites, setFavorites] = useState<string[]>(['qP3K-L9Wd8o']);
  const [toast, setToast] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeUser = loggedUser || guestUser;

  const setActiveUser = (updater: any) => {
    if (loggedUser) {
      setLoggedUser((prev) => (typeof updater === 'function' ? updater(prev) : updater));
    } else {
      setGuestUser((prev) => (typeof updater === 'function' ? updater(prev) : updater));
    }
  };

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const navigateTo = (target: Page) => {
    setPage(target);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAppDownload = () => {
    setMobileMenuOpen(false);
    const el = document.getElementById('app-download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-glowBg">
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 bg-glowDark text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-lg">
          {toast}
        </div>
      )}

      {/* Banner Superior de Divulgação do App Mobile */}
      <div className="bg-glowDark text-white text-[11px] py-2 px-4 text-center font-medium flex items-center justify-center gap-3 flex-wrap">
        <span>📱 Baixe o App Mobile GlowUp para sincronizar com sua Geladeira Smart em qualquer lugar</span>
        <button
          type="button"
          onClick={scrollToAppDownload}
          className="bg-white text-glowDark px-3 py-0.5 rounded-full text-[10px] font-extrabold hover:bg-pink-100 transition"
        >
          Conhecer App ↓
        </button>
      </div>

      {/* Header Fixo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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

          <div>
            {loggedUser ? (
              <button
                onClick={() => navigateTo('profile')}
                className="bg-glowNude text-glowDark px-3.5 py-2 rounded-full text-xs font-bold border border-pink-200 hover:bg-pink-100 transition"
              >
                👤 {loggedUser.name.split(' ')[0]}
              </button>
            ) : (
              <button
                onClick={() => navigateTo('auth')}
                className="bg-glowPrimary text-white px-4 py-2 rounded-full text-xs font-bold shadow hover:bg-glowDark transition"
              >
                Entrar / Cadastrar
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Menu Lateral Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          ></div>

          <aside className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10">
            <div className="space-y-6">
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

              <nav className="flex flex-col space-y-2 text-sm font-bold">
                <button
                  onClick={() => navigateTo('home')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                    page === 'home' ? 'bg-glowNude text-glowPrimary' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fa-solid fa-house w-5 text-center"></i>
                  Início
                </button>

                <button
                  onClick={() => navigateTo('tutorials')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                    page === 'tutorials' ? 'bg-glowNude text-glowPrimary' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fa-solid fa-circle-play w-5 text-center"></i>
                  Tutoriais & Aulas
                </button>

                <button
                  onClick={() => navigateTo('fridge')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                    page === 'fridge' ? 'bg-glowNude text-glowPrimary' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className="fa-solid fa-snowflake w-5 text-center text-glowCyan"></i>
                  Geladeira Smart
                </button>

                {loggedUser && (
                  <button
                    onClick={() => navigateTo('profile')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                      page === 'profile' ? 'bg-glowNude text-glowPrimary' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <i className="fa-solid fa-user w-5 text-center"></i>
                    Meu Perfil
                  </button>
                )}
              </nav>
            </div>

            <div className="border-t border-pink-100 pt-4">
              {loggedUser ? (
                <button
                  onClick={() => {
                    setLoggedUser(null);
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
            user={activeUser}
            setUser={setActiveUser}
            habits={habits}
            onToggleHabit={toggleHabit}
            showToast={showToast}
            onNavigate={navigateTo}
          />
        )}
        {page === 'tutorials' && (
          <Tutorials
            tutorials={INITIAL_TUTORIALS}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            showToast={showToast}
          />
        )}
        {page === 'fridge' && (
          <Fridge
            showToast={showToast}
            onDownloadApp={scrollToAppDownload}
          />
        )}
        {page === 'auth' && (
          <Auth
            onAuthSuccess={(u: User) => {
              setLoggedUser(u);
              navigateTo('home');
            }}
            onNavigateHome={() => navigateTo('home')}
          />
        )}
        {page === 'profile' && loggedUser && (
          <Profile
            user={loggedUser}
            habits={habits}
            onLogout={() => {
              setLoggedUser(null);
              navigateTo('home');
            }}
          />
        )}
      </main>

      {/* Seção de Divulgação do App Mobile com QR Codes funcionais */}
      <div id="app-download">
        <AppDownloadSection showToast={showToast} />
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}