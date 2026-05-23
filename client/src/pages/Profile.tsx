import { FormEvent, useState } from 'react';
import { Mail, Save, User, Music, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Profile() {
  const [name, setName] = useState('Моника Ли');
  const [email, setEmail] = useState('monica@example.ru');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Данные профиля обновлены на странице');
  };

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 ml-20">
        <Header />

        <main className="p-8 bg-gray-50 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Профиль</h1>
            <p className="text-gray-600">профиль артиста.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {initials}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Данные аккаунта</h2>
                  <p className="text-sm text-gray-500">Можно изменить имя и email прямо на странице.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">Имя</span>
                  <div className="mt-2 flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:bg-white">
                    <User className="w-5 h-5 text-gray-400" />
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full bg-transparent outline-none text-gray-900"
                      placeholder="Твоё имя"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">Email</span>
                  <div className="mt-2 flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:bg-white">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full bg-transparent outline-none text-gray-900"
                      placeholder="ivan@example.ru"
                    />
                  </div>
                </label>

                {message && <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg p-3">{message}</p>}

                <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-600 transition-colors">
                  <Save className="w-4 h-4" />
                  Сохранить
                </button>
              </form>
            </section>

            <aside className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Аккаунт артиста</h3>
                <p className="text-sm text-gray-500">Профиль пользователя.</p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
