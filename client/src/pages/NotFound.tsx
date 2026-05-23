import { Link } from 'wouter';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="text-6xl font-bold text-primary">404</div>
        <h1 className="text-3xl font-bold text-foreground">Страница не найдена</h1>
        <p className="text-muted-foreground max-w-md">
          Такой страницы нет. Давайте вернёмся к музыке.
        </p>
        <Link href="/">
          <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            <Home className="w-4 h-4" />
            На главную
          </a>
        </Link>
      </div>
    </div>
  );
}
