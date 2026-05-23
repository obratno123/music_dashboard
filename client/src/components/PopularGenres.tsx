import { ChevronRight } from 'lucide-react';
import { mockGenres } from '@/lib/mockData';

const artistProfiles = [
  {
    name: 'Уилл Мун',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Will',
  },
  {
    name: 'Маэссе',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maesse',
  },
  {
    name: 'Иоас',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ioas',
  },
  {
    name: 'Васлае',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Waslae',
  },
  {
    name: 'Сасью',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sasew',
  },
  {
    name: 'Том Кругг',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
  },
];

export default function PopularGenres() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Популярные жанры</h2>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {mockGenres.slice(0, 10).map((genre) => (
              <button
                key={genre.id}
                type="button" disabled className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-400 bg-gray-100 cursor-not-allowed"
              >
                {genre.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {mockGenres.slice(10).map((genre) => (
              <button
                key={genre.id}
                type="button" disabled className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-400 bg-gray-100 cursor-not-allowed"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Избранные артисты</h3>
          <button type="button" disabled className="flex items-center gap-1 text-gray-400 cursor-not-allowed">
            <span className="text-sm">Смотреть ещё</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {artistProfiles.map((artist) => (
            <button
              key={artist.name}
              type="button"
              disabled
              className="flex-shrink-0 text-center cursor-not-allowed opacity-75"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-2 border-transparent">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-900 ">
                {artist.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
