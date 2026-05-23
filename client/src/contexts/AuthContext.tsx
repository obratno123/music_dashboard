import { createContext, useContext, useEffect, useState } from 'react';

type User = {
  username: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const DEMO_USER = {
  username: 'admin',
  password: '12345',
  name: 'Администратор',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('music-dashboard-user');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === DEMO_USER.username && password === DEMO_USER.password) {
      const loggedUser = {
        username: DEMO_USER.username,
        name: DEMO_USER.name,
      };

      setUser(loggedUser);
      localStorage.setItem('music-dashboard-user', JSON.stringify(loggedUser));

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('music-dashboard-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }

  return context;
}