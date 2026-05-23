import { Clock, ListFilter, Play, Search } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { mockTracks } from '@/lib/mockData';

const playlists = [
  { id: 'morning', title: 'Утренняя энергия', tracks: 24, mood: 'Поп / Танцевальная', gradient: 'from-cyan-400 to-blue-500' },
  { id: 'focus', title: 'Фокус поздней ночью', tracks: 18, mood: 'Лоу-фай / Чилл', gradient: 'from-purple-400 to-pink-500' },
  { id: 'fans', title: 'Выбор фанатов', tracks: 31, mood: 'Тренды', gradient: 'from-amber-400 to-orange-500' },
];

const genreOptions = ['Все', ...Array.from(new Set(mockTracks.map((track) => track.genre)))];

export default function Playlists() {
  const [selectedGenre, setSelectedGenre] = useState('Все');
  const [query, setQuery] = useState('');

  const filteredTracks = mockTracks.filter((track) => {
    const matchesGenre = selectedGenre === 'Все' || track.genre === selectedGenre;
    const normalizedQuery = query.trim().toLowerCase();
    const matchesQuery =
      !normalizedQuery ||
      [track.title, track.artist, track.genre].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      );

    return matchesGenre && matchesQuery;
  });

  const totalVisiblePlays = filteredTracks.reduce((sum, track) => sum + track.plays, 0);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 ml-20">
        <Header />

        <main className="p-8 bg-gray-50 min-h-screen space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Плейлисты</h1>
            <p className="text-gray-600">Подборки, жанры и простой поиск по трекам.</p>
          </div>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {playlists.map((playlist) => (
              <article key={playlist.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className={`h-32 bg-gradient-to-br ${playlist.gradient} p-5 flex items-end`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-gray-900 shadow-lg">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-900">{playlist.title}</h2>
                  <p className="mt-1 text-sm text-gray-500">{playlist.mood}</p>
                  <p className="mt-4 text-sm text-gray-600">{playlist.tracks} треков</p>
                </div>
              </article>
            ))}
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <ListFilter className="h-5 w-5 text-cyan-600" />
                  <h2 className="text-xl font-bold text-gray-900">Последние треки</h2>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Найдено: {filteredTracks.length}. Прослушиваний: {totalVisiblePlays.toLocaleString()}.
                </p>
              </div>

              <label className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Поиск по трекам"
                />
              </label>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {genreOptions.map((genre) => (
                <button
                  key={genre}
                  type="button"
                  onClick={() => setSelectedGenre(genre)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selectedGenre === genre
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-cyan-200 hover:bg-cyan-50'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>

            {filteredTracks.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-gray-500">
                По этим условиям треков нет. Измени жанр или поисковый запрос.
              </div>
            ) : (
              <div className="space-y-2">
                {filteredTracks.map((track, index) => (
                  <div
                    key={track.id}
                    className="flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="w-8 text-sm font-semibold text-gray-400">{index + 1}</span>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-900">{track.title}</p>
                        <p className="text-sm text-gray-500">
                          {track.artist} · {track.genre} · {track.plays.toLocaleString()} прослушиваний
                        </p>
                      </div>
                    </div>

                    <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                      <Clock className="w-4 h-4" />
                      {track.duration}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
