import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Share2 } from 'lucide-react';
import { mockTrendings } from '@/lib/mockData';

export default function TrendingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? mockTrendings.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === mockTrendings.length - 1 ? 0 : prev + 1));
  };

  const current = mockTrendings[currentIndex];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Тренды</h2>

      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 h-80">
        <img
          src={current.image}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-gray-300 tracking-wider">
              // {current.category}
            </span>
            <div className="flex gap-2">
              <button type="button" disabled className="px-3 py-1 bg-white/60 text-gray-500 rounded text-sm font-semibold cursor-not-allowed flex items-center gap-1">
                <Play className="w-3 h-3 fill-current" /> СЛУШАТЬ
              </button>
              <button type="button" disabled className="p-2 bg-white/10 rounded cursor-not-allowed">
                <Share2 className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-3xl font-bold text-white mb-1">{current.title}</h3>
              <p className="text-gray-300">- {current.artist}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {mockTrendings.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    title={`Показать слайд ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          title="Предыдущий тренд"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={goToNext}
          title="Следующий тренд"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
