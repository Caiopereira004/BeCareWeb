import React, { useState } from 'react';
import Header from './components/Header';
import BannerTop from './components/BannerTop';
import Footer from './components/Footer';
import AppDownloadSection from './components/AppDownloadSection';
import TechSpecModal from './components/TechSpecModal';

import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Fridge from './pages/Fridge';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

export interface User {
  name: string;
  email: string;
  skinType?: string | null;
  goal?: string | null;
  mood?: string;
}

export interface Habit {
  id: number;
  title: string;
  completed: boolean;
}

export interface TutorialItem {
  id: number;
  title: string;
  author: string;
  duration: string;
  youtubeId: string;
  category: string;
  product: string;
  minTemp: number;
  maxTemp: number;
}

const initialTutorials: TutorialItem[] = [
  { id: 1, title: "6 Passos para Melhorar a Pele em 7 Dias", author: "Dra. Marina Hayashida", duration: "09:14", youtubeId: "j4jrPoaxw1I", category: "Skincare", product: "Sabonete & Sérum Facial", minTemp: 4, maxTemp: 8 },
  { id: 2, title: "Rotina Completa Noturna Anti-Idade", author: "Dr. Lucas Fustinoni", duration: "11:05", youtubeId: "qP3K-L9Wd8o", category: "Skincare", product: "Creme de Retinol & Ácido Hialurônico", minTemp: 4, maxTemp: 8 },
  { id: 3, title: "Maquiagem Glow Natural para o Dia a Dia", author: "Bianca Andrade", duration: "10:15", youtubeId: "8-Jm7t9eK-U", category: "Maquiagem", product: "Batom Velvet Nude & Base", minTemp: 18, maxTemp: 24 },
  { id: 4, title: "Massagem Facial com Gua Sha para Drenagem", author: "Dra. Patricia Leite", duration: "08:40", youtubeId: "LgWjQ5x1n9A", category: "Massagem", product: "Óleo Facial Nutritivo & Gua Sha", minTemp: 4, maxTemp: 10 },
  { id: 5, title: "Como Tratar Olheiras e Inchaço Matinal", author: "Dra. Sintia Belangero", duration: "07:50", youtubeId: "W5rYd5f9Q8A", category: "Skincare", product: "Máscara Gel para os Olhos", minTemp: 2, maxTemp: 6 },
  { id: 6, title: "Cuidados Essenciais para Cabelos Danificados", author: "Viih Tube", duration: "12:35", youtubeId: "xHTAaQI86qo", category: "Cabelos", product: "Óleo Capilar de Argan", minTemp: 15, maxTemp: 25 },
  { id: 7, title: "Protetor Solar: Como Escolher o Tipo Certo", author: "Dra. Marina Hayashida", duration: "14:20", youtubeId: "P9xJ8K7aL6M", category: "Skincare", product: "Protetor Solar Fluid FPS 60", minTemp: 15, maxTemp: 25 },
  { id: 8, title: "Rotina Minimalista de Skincare Matinal", author: "Dra. Kelly Pico", duration: "06:45", youtubeId: "R7T8y9U0V1W", category: "Skincare", product: "Sérum Vitamina C 10%", minTemp: 4, maxTemp: 8 }
];

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tutorials' | 'fridge' | 'profile' | 'auth'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>({ name: 'Visitante', email: '', skinType: null, goal: null, mood: '✨ Radiante' });
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: 'Beber 2L de Água', completed: true },
    { id: 2, title: 'Protetor Solar', completed: true },
    { id: 3, title: 'Limpeza Facial', completed: false },
    { id: 4, title: '8h de Sono Reparador', completed: false }
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleHabit = (id: number) => {
    setHabits(prev => prev.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const handleToggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
      showToast('Tutorial removido dos favoritos.');
    } else {
      setFavorites([...favorites, id]);
      showToast('Tutorial adicionado aos favoritos!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: 'Visitante', email: '', skinType: null, goal: null, mood: '✨ Radiante' });
    setCurrentView('home');
    showToast('Você saiu da conta.');
  };

  return (
    <div class="min-h-screen flex flex-col justify-between bg-[#FAF4F5] text-gray-800">
      <BannerTop onNavigateApp={() => {
        const el = document.getElementById('app-download');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <Header 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view as any)} 
        isLoggedIn={isLoggedIn}
        userName={user.name}
      />

      <main class="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {currentView === 'home' && (
          <Home 
            user={user} 
            setUser={setUser} 
            habits={habits} 
            onToggleHabit={handleToggleHabit} 
            showToast={showToast}
          />
        )}
        {currentView === 'tutorials' && (
          <Tutorials 
            tutorials={initialTutorials} 
            favorites={favorites} 
            onToggleFavorite={handleToggleFavorite}
          />
        )}
        {currentView === 'fridge' && (
          <Fridge 
            onOpenModal={() => setIsTechModalOpen(true)}
            onScrollApp={() => {
              const el = document.getElementById('app-download');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}
        {currentView === 'profile' && (
          <Profile user={user} onLogout={handleLogout} />
        )}
        {currentView === 'auth' && (
          <Auth 
            onAuthSuccess={(userData) => {
              setIsLoggedIn(true);
              setUser(userData);
              setCurrentView('home');
              showToast(`Bem-vinda(o), ${userData.name}!`);
            }}
            onNavigateHome={() => setCurrentView('home')}
          />
        )}
      </main>

      <AppDownloadSection showToast={showToast} />
      <Footer onNavigate={(v) => setCurrentView(v as any)} />

      {isTechModalOpen && (
        <TechSpecModal onClose={() => setIsTechModalOpen(false)} />
      )}

      {toastMessage && (
        <div class="fixed bottom-6 right-6 z-50 bg-gray-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-2 animate-bounce">
          <i class="fa-solid fa-circle-info text-glowPrimary"></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
