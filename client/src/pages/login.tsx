import { FormEvent, useState } from 'react';
import { useLocation } from 'wouter';
import { Music2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [, setLocation] = useLocation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const success = login(username, password);

    if (success) {
      setLocation('/');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <div className="text-center">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white mb-4">
            <Music2 className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Вход в Music Dashboard
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Введите логин и пароль для доступа к панели
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Логин
          </label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="admin"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Пароль
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="12345"
          />
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-cyan-500 text-white py-3 font-semibold hover:bg-cyan-600 transition"
        >
          Войти
        </button>

        <p className="text-center text-xs text-gray-400">
          Демо-доступ: admin / 12345
        </p>
      </form>
    </div>
  );
}