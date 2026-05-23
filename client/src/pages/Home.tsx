import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import TrendingCarousel from '@/components/TrendingCarousel';
import ArtistOfWeek from '@/components/ArtistOfWeek';
import PopularGenres from '@/components/PopularGenres';
import LiveMusicCharts from '@/components/LiveMusicCharts';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 ml-20">
        <Header />

        <main className="p-8 space-y-8 bg-gray-50">
          <SearchBar />

          <TrendingCarousel />

          <LiveMusicCharts />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ArtistOfWeek />
            </div>

            <div className="lg:col-span-1">
              <PopularGenres />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
