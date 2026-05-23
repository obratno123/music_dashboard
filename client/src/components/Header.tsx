import { Bell, Settings } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const artistName = 'Моника Ли';
  const initials = artistName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2 text-gray-600">
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          <span className="text-sm font-medium">8 человек сейчас слушают вас</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            disabled
            className="p-2 rounded-lg text-gray-300 cursor-not-allowed"
            title="Уведомления недоступны"
          >
            <Bell className="w-5 h-5" />
          </button>
          <button
            type="button"
            disabled
            className="p-2 rounded-lg text-gray-300 cursor-not-allowed"
            title="Настройки недоступны"
          >
            <Settings className="w-5 h-5" />
          </button>

          <Link href="/profile">
            <a className="flex items-center gap-3 pl-4 pr-2 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors" title="Открыть профиль">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
              {initials}
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{artistName}</p>
              <p className="text-xs text-gray-500">Артист</p>
            </div>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
