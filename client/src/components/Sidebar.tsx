import { Home, BarChart3, ListMusic, User, MessageCircle, HelpCircle, Globe } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { icon: Home, label: 'Главная', href: '/', disabled: false },
  { icon: BarChart3, label: 'Аналитика', href: '/dashboard', disabled: false },
  { icon: ListMusic, label: 'Плейлисты', href: '/playlists', disabled: false },
  { icon: User, label: 'Профиль', href: '/profile', disabled: false },
  { icon: MessageCircle, label: 'Сообщения', href: '/messages', disabled: true },
];

const bottomItems = [
  { icon: HelpCircle, label: 'Помощь', href: '/help', disabled: true },
  { icon: Globe, label: 'Язык', href: '/language', disabled: true },
];

export default function Sidebar() {
  const [location, setLocation] = useLocation();
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  const renderNavItem = (
    item: (typeof navItems)[number] | (typeof bottomItems)[number]
  ) => {
    const isActive = location === item.href;
    const Icon = item.icon;

    if (item.disabled) {
      return (
        <button
          key={item.href}
          type="button"
          disabled
          className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-500 cursor-not-allowed opacity-45"
          title={`${item.label} пока недоступно`}
        >
          <Icon className="w-6 h-6" />
        </button>
      );
    }

    return (
      <Link key={item.href} href={item.href}>
        <a
          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 ${
            isActive
              ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-600/50'
          }`}
          title={item.label}
        >
          <Icon className="w-6 h-6" />
        </a>
      </Link>
    );
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-gradient-to-b from-slate-700 to-slate-800 border-r border-slate-600 flex flex-col items-center py-6 space-y-6">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
        ∞
      </div>

      <nav className="flex flex-col gap-4 flex-1">
        {navItems.map(renderNavItem)}
      </nav>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleLogout}
          className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-300 hover:bg-red-500/20 transition-all"
          title="Выйти"
        >
          <LogOut className="w-6 h-6" />
        </button>

        {bottomItems.map(renderNavItem)}
      </div>
    </div>
  );
}
