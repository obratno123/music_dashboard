import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { mockTracks, mockArtists, mockTrendings } from '@/lib/mockData';
import { SearchResult } from '@/lib/types';

const resultTypeLabels: Record<SearchResult['type'], string> = {
  track: 'Трек',
  artist: 'Артист',
  trending: 'Тренд',
};

interface SearchBarProps {
  onSearch?: (results: SearchResult[]) => void;
  onClose?: () => void;
}

export default function SearchBar({ onSearch, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    const combined: SearchResult[] = [];

    mockTracks.forEach(track => {
      if (
        track.title.toLowerCase().includes(searchTerm) ||
        track.artist.toLowerCase().includes(searchTerm)
      ) {
        combined.push({
          type: 'track',
          id: track.id,
          title: track.title,
          subtitle: track.artist,
          image: track.image,
        });
      }
    });

    mockArtists.forEach(artist => {
      if (artist.name.toLowerCase().includes(searchTerm)) {
        combined.push({
          type: 'artist',
          id: artist.id,
          title: artist.name,
          subtitle: `${artist.hoursListening} ч прослушивания`,
          image: artist.image,
        });
      }
    });

    mockTrendings.forEach(trending => {
      if (
        trending.title.toLowerCase().includes(searchTerm) ||
        trending.artist.toLowerCase().includes(searchTerm)
      ) {
        combined.push({
          type: 'trending',
          id: trending.id,
          title: trending.title,
          subtitle: trending.artist,
          image: trending.image,
        });
      }
    });

    return combined.slice(0, 8);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
  };

  const handleResultClick = (result: SearchResult) => {
    if (onSearch) {
      onSearch([result]);
    }
    handleClear();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Поиск новой музыки, новостей, артистов..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-12 pr-10 py-3 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:bg-white text-gray-900 placeholder:text-gray-400 transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            title="Очистить поиск"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && query && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="max-h-96 overflow-y-auto">
            {results.map((result) => (
              <button
                key={`${result.type}-${result.id}`}
                onClick={() => handleResultClick(result)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-100 last:border-b-0"
              >
                {result.image && (
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{result.title}</p>
                  {result.subtitle && (
                    <p className="text-sm text-gray-500 truncate">{result.subtitle}</p>
                  )}
                </div>
                <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded">
                  {resultTypeLabels[result.type]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center text-gray-500 z-50">
          Ничего не найдено по запросу «{query}»
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
