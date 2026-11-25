import React, { useState } from 'react';

interface TutorialItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  author: string;
  duration: string;
  isAI?: boolean;
  cover: string;
  product: string;
}

interface TutorialsProps {
  tutorials?: TutorialItem[];
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
  showToast?: (msg: string) => void;
}

const CATALOG_TUTORIALS: TutorialItem[] = [
  {
    id: 'skincare-manha-ordem',
    youtubeId: 'NdzEUJHAgX8',
    title: 'Skincare da Manhã: Qual a Ordem Ideal?',
    category: 'Skincare',
    author: 'Dra. Marina Hayashida',
    duration: '10 min',
    isAI: false,
    cover: 'https://i.ytimg.com/vi/NdzEUJHAgX8/hqdefault.jpg',
    product: 'Vitamina C & Hidratante (4°C - 8°C)',
  },
  {
    id: 'resenha-mini-geladeira',
    youtubeId: 'ijcWA-cdE_E',
    title: 'Resenha Completa: Mini Geladeira de Skincare',
    category: 'GlowFridge',
    author: 'Tainara Yamasaki - Estética',
    duration: '10 min',
    isAI: true,
    cover: 'https://i.ytimg.com/vi/ijcWA-cdE_E/hqdefault.jpg',
    product: 'Cosméticos Termossensíveis (5°C - 10°C)',
  },
  {
    id: 'massagem-facial-guasha',
    youtubeId: 'Wdcbprw1vIc',
    title: 'Massagem Facial com Gua Sha & Pedra Jade',
    category: 'Massagem Facial',
    author: 'Thamires Nascimento',
    duration: '11 min',
    isAI: false,
    cover: 'https://i.ytimg.com/vi/Wdcbprw1vIc/hqdefault.jpg',
    product: 'Gua Sha & Roller Resfriado (4°C - 6°C)',
  },
  {
    id: 'pele-glow-passo-a-passo',
    youtubeId: '9oBewQp7hII',
    title: 'Tutorial de Pele Glow — Passo a Passo',
    category: 'Maquiagem',
    author: 'Hérika Fagundes',
    duration: '17 min',
    isAI: false,
    cover: 'https://i.ytimg.com/vi/9oBewQp7hII/hqdefault.jpg',
    product: 'Bruma & Sérum Iluminador (6°C - 10°C)',
  },
  {
    id: 'rotina-skincare-simples',
    youtubeId: 'Ss8fA1mMbRI',
    title: 'Como Fazer Uma Rotina de Skincare Simples e Eficaz',
    category: 'Skincare',
    author: 'Dra. Marina Hayashida',
    duration: '23 min',
    isAI: true,
    cover: 'https://i.ytimg.com/vi/Ss8fA1mMbRI/hqdefault.jpg',
    product: 'Sérum Ácido Hialurônico (8°C - 12°C)',
  },
  {
    id: 'guasha-papada-mandibula',
    youtubeId: 'F_NzcYbxJlw',
    title: 'Descubra o Poder do Gua Sha para Mandíbula e Contorno',
    category: 'Massagem Facial',
    author: 'Fisio Angélica Queiroz',
    duration: '13 min',
    isAI: false,
    cover: 'https://i.ytimg.com/vi/F_NzcYbxJlw/hqdefault.jpg',
    product: 'Gel Condutor Calmante (4°C - 8°C)',
  },
  {
    id: 'unboxing-mini-geladeira',
    youtubeId: 'sc8-blGXuoM',
    title: 'Organizando Produtos na Mini Geladeira de Skincare',
    category: 'GlowFridge',
    author: 'Valentina Conti',
    duration: '01 min',
    isAI: true,
    cover: 'https://i.ytimg.com/vi/sc8-blGXuoM/hqdefault.jpg',
    product: 'Máscaras & Cremes para Olhos (4°C - 8°C)',
  },
  {
    id: 'montar-rotina-cuidados',
    youtubeId: 'yty0tqKeIGQ',
    title: 'Aprenda Como Montar Uma Rotina de Cuidados com a Pele',
    category: 'Skincare',
    author: 'Dra. Marina Hayashida',
    duration: '08 min',
    isAI: true,
    cover: 'https://i.ytimg.com/vi/yty0tqKeIGQ/hqdefault.jpg',
    product: 'Niacinamida & Ativos Reparadores (8°C - 12°C)',
  },
  {
    id: 'guasha-tecnica-facial',
    youtubeId: 'ejbbdFKdWQQ',
    title: 'Gua Sha: Técnica Milenar de Massagem e Tonificação',
    category: 'Massagem Facial',
    author: 'Peter Liu',
    duration: '05 min',
    isAI: false,
    cover: 'https://i.ytimg.com/vi/ejbbdFKdWQQ/hqdefault.jpg',
    product: 'Óleo & Sérum Facial Gelado (6°C - 10°C)',
  },
];

export default function Tutorials({
  favorites = [],
  onToggleFavorite,
  showToast,
}: TutorialsProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeVideo, setActiveVideo] = useState<TutorialItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = ['Todos', 'Skincare', 'Massagem Facial', 'GlowFridge', 'Maquiagem', 'Favoritos'];

  const filtered = CATALOG_TUTORIALS.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.author.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === 'Favoritos') {
      return favorites.includes(t.id) && matchesSearch;
    }
    if (selectedCategory === 'Todos') {
      return matchesSearch;
    }
    return t.category === selectedCategory && matchesSearch;
  });

  const displayedTutorials = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Cabeçalho da Página */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-glowPrimary">
            Academia GlowUp
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-glowDark">
            Tutoriais & Aulas de Autocuidado
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Aprenda técnicas de aplicação e saiba a temperatura ideal na sua Geladeira Smart
          </p>
        </div>

        {/* Barra de Pesquisa */}
        <div className="relative w-full md:w-72">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(6);
            }}
            placeholder="Buscar aula, canal ou ativo..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-pink-100 text-xs focus:outline-none focus:border-glowPrimary shadow-xs"
          />
        </div>
      </div>

      {/* Filtros por Categoria */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(4);
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              selectedCategory === cat
                ? 'bg-glowPrimary text-white shadow-xs'
                : 'bg-white text-gray-600 border border-pink-100 hover:bg-glowNude'
            }`}
          >
            {cat === 'Favoritos' ? `♥ Favoritos (${favorites.length})` : cat}
          </button>
        ))}
      </div>

      {/* Grade de Tutoriais */}
      {displayedTutorials.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-pink-100 space-y-2">
          <p className="text-sm font-bold text-glowDark">Nenhum tutorial encontrado</p>
          <p className="text-xs text-gray-500">Tente limpar o filtro ou buscar por outro termo.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTutorials.map((item) => {
            const isFav = favorites.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-xs hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div
                    onClick={() => setActiveVideo(item)}
                    className="relative h-44 bg-gray-100 cursor-pointer overflow-hidden"
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-90 group-hover:bg-black/40 transition">
                      <span className="w-11 h-11 rounded-full bg-white/95 text-glowPrimary flex items-center justify-center shadow-lg">
                        <i className="fa-solid fa-play ml-0.5"></i>
                      </span>
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 bg-black/75 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {item.duration}
                    </span>
                    {item.isAI && (
                      <span className="absolute top-2.5 left-2.5 bg-glowDark/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        ✨ GlowIA
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase text-glowPrimary bg-glowNude px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          if (onToggleFavorite) onToggleFavorite(item.id);
                          if (showToast) {
                            showToast(isFav ? 'Removido dos favoritos' : 'Salvo nos favoritos ♥');
                          }
                        }}
                        className={`text-sm transition ${
                          isFav ? 'text-glowPrimary' : 'text-gray-300 hover:text-glowPrimary'
                        }`}
                      >
                        ♥
                      </button>
                    </div>

                    <h3
                      onClick={() => setActiveVideo(item)}
                      className="font-extrabold text-sm text-glowDark leading-snug cursor-pointer hover:text-glowPrimary transition"
                    >
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-gray-500">Por {item.author}</p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-pink-50 flex items-center justify-between text-[11px]">
                  <span className="text-cyan-700 font-semibold truncate">
                    ❄️ {item.product}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Botão "Ver mais..." sem contagem */}
      {filtered.length > 4 && (
        <div className="flex justify-center pt-2">
          {hasMore ? (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-7 py-3 rounded-full bg-white border-2 border-glowPrimary text-glowPrimary text-xs font-extrabold hover:bg-glowPrimary hover:text-white transition shadow-xs"
            >
              Ver mais...
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setVisibleCount(4)}
              className="px-6 py-2.5 rounded-full bg-glowNude text-glowDark text-xs font-bold hover:bg-pink-100 transition"
            >
              Mostrar menos ↑
            </button>
          )}
        </div>
      )}

      {/* Modal Player do Tutorial */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-pink-100">
              <div>
                <h3 className="font-extrabold text-glowDark text-sm sm:text-base">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {activeVideo.author} • Produto ideal: {activeVideo.product}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-2 text-gray-400 hover:text-gray-700"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="px-6 py-3 bg-glowBg flex items-center justify-between text-xs">
              <span className="text-gray-500">
                Armazenamento recomendado: <strong className="text-glowDark">{activeVideo.product}</strong>
              </span>
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="text-glowPrimary font-bold hover:underline"
              >
                Abrir no YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}