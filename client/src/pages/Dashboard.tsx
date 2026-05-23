import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { mockArtists, mockCountries, mockDashboardStats, mockListenersByMonth } from '@/lib/mockData';

const stats = [
  { label: 'Слушатели', value: mockDashboardStats.listeners, icon: '👤', color: 'bg-purple-100' },
  { label: 'Новые подписчики', value: mockDashboardStats.newFollowers, icon: '📈', color: 'bg-cyan-100' },
  { label: 'Отписки', value: mockDashboardStats.unfollows, icon: '📉', color: 'bg-red-100' },
  { label: 'Новые стримы', value: `${mockDashboardStats.newStreams}%`, icon: '🎵', color: 'bg-blue-100' },
];

const maxListeners = Math.max(...mockListenersByMonth.map((item) => item.men + item.women));

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 ml-20">
        <Header />

        <main className="p-8 bg-gray-50 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Аналитика</h1>
            <p className="text-gray-600">Простая статистика по новому альбому.</p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((item) => (
              <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{item.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{item.value}</p>
                  </div>
                  <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-lg">{item.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Новые слушатели по месяцам</h2>
              <div className="flex h-72 items-end gap-3 border-b border-gray-100 pb-4">
                {mockListenersByMonth.map((item) => {
                  const total = item.men + item.women;
                  const height = Math.round((total / maxListeners) * 100);

                  return (
                    <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-56 w-full items-end rounded-t-lg bg-gray-50">
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500 to-blue-400"
                          style={{ height: `${height}%` }}
                          title={`${item.month}: ${total} слушателей`}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{item.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Стримы по странам</h2>
              <div className="space-y-4">
                {mockCountries.map((country) => (
                  <div key={country.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-gray-600">{country.name}</span>
                      <span className="font-semibold text-gray-900">
                        {country.count} ({country.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-cyan-500"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Фаны и часы прослушивания</h2>
              <div className="space-y-3">
                {mockArtists.slice(0, 6).map((artist) => (
                  <div key={artist.id} className="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <img src={artist.image} alt={artist.name} className="w-8 h-8 rounded-full" />
                      <span className="text-sm font-medium text-gray-900">{artist.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-cyan-500">{artist.hoursListening} ч</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600 text-sm mb-1">Сохранено в плейлисты</p>
                <p className="text-3xl font-bold text-gray-900">{mockDashboardStats.savedPlaylist}</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600 text-sm mb-1">Всего часов стримов</p>
                <p className="text-3xl font-bold text-gray-900">{mockDashboardStats.totalStreamHours}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
