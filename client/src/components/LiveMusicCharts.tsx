import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ExternalLink, Music2, RefreshCw, Search } from 'lucide-react';

type ItunesTrack = {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName?: string;
  artworkUrl100?: string;
  previewUrl?: string;
  trackViewUrl?: string;
};

type ItunesResponse = {
  results: ItunesTrack[];
};

const DEFAULT_TERM = 'Полина Гагарина';

export default function LiveMusicCharts() {
  const [query, setQuery] = useState(DEFAULT_TERM);
  const [submittedQuery, setSubmittedQuery] = useState(DEFAULT_TERM);
  const [tracks, setTracks] = useState<ItunesTrack[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadTracks() {
      try {
        setIsLoading(true);
        setError('');

        const url = new URL('https://itunes.apple.com/search');
        url.searchParams.set('term', submittedQuery);
        url.searchParams.set('media', 'music');
        url.searchParams.set('entity', 'song');
        url.searchParams.set('limit', '6');

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('Не удалось получить треки из iTunes');
        }

        const data = (await response.json()) as ItunesResponse;
        setTracks(data.results);
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') {
          return;
        }

        setError(fetchError instanceof Error ? fetchError.message : 'Ошибка загрузки');
        setTracks([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadTracks();

    return () => controller.abort();
  }, [submittedQuery]);

  const totalPreviewTracks = useMemo(
    () => tracks.filter((track) => Boolean(track.previewUrl)).length,
    [tracks],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextQuery = query.trim();

    if (nextQuery) {
      setSubmittedQuery(nextQuery);
    }
  };

  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold text-cyan-600 tracking-wider uppercase">API</p>
          <h2 className="text-2xl font-bold text-gray-900">Поиск музыки в iTunes</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
          <label className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20"
              placeholder="Артист или трек"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-cyan-500 px-4 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            <RefreshCw className="h-4 w-4" />
            Загрузить
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
        <span className="rounded-full bg-cyan-50 px-3 py-1 font-medium text-cyan-700">
          Запрос: {submittedQuery}
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1">
          Превью-треков: {totalPreviewTracks}
        </span>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-44 animate-pulse rounded-xl bg-gray-100" />
          ))}
        </div>
      )}

      {!isLoading && error && (
        <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {!isLoading && !error && tracks.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-500">
          Ничего не найдено. Попробуй другого артиста или название трека.
        </div>
      )}

      {!isLoading && !error && tracks.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tracks.map((track) => (
            <article key={track.trackId} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100">
                  {track.artworkUrl100 ? (
                    <img
                      src={track.artworkUrl100.replace('100x100', '200x200')}
                      alt={track.trackName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Music2 className="h-8 w-8 text-cyan-600" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-bold text-gray-900">{track.trackName}</h3>
                  <p className="truncate text-sm text-gray-600">{track.artistName}</p>
                  <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                    {track.collectionName || 'Сингл'}
                  </p>
                </div>
              </div>

              {track.previewUrl && (
                <audio controls src={track.previewUrl} className="mt-4 h-9 w-full" />
              )}

              {track.trackViewUrl && (
                <a
                  href={track.trackViewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                >
                  Открыть в iTunes
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
