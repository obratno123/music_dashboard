import { Heart, Share2, MoreVertical } from 'lucide-react';
import { mockTracks } from '@/lib/mockData';

export default function ArtistOfWeek() {
  const artist = {
    name: 'Моника Ли',
    album: 'Всегда настоящая',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Monica',
    description:
      'Артистка стала одним из самых заметных голосов своей сцены и быстро вышла на международный рынок, попав в радиоэфиры и чарты продаж по всему миру.',
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Артист недели</h2>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="flex justify-center md:col-span-1">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-48 h-64 rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-xs text-gray-500 mb-1 font-semibold">// Альбом</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{artist.album}</h3>
              <p className="text-lg text-gray-600">{artist.name}</p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{artist.description}</p>

            <div className="space-y-2">
              {mockTracks.map((track, index) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-sm font-semibold text-gray-500 w-6">{index + 1}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{track.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">{track.plays.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{track.duration}</span>
                    <button type="button" disabled className="p-1 text-gray-300 cursor-not-allowed opacity-0 group-hover:opacity-100">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button type="button" disabled className="p-1 text-gray-300 cursor-not-allowed opacity-0 group-hover:opacity-100">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button type="button" disabled className="p-1 text-gray-300 cursor-not-allowed opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              disabled
              className="w-full py-3 bg-gray-200 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
            >
              Слушать весь альбом
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
