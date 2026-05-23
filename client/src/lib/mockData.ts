import { Track, Artist, Trending, Genre, DashboardStats } from './types';

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Больше нет времени',
    artist: 'Моника Ли',
    plays: 42822,
    duration: '3:21',
    genre: 'Поп',
  },
  {
    id: '2',
    title: 'Уходи',
    artist: 'Моника Ли',
    plays: 67420,
    duration: '3:30',
    genre: 'Танцевальная',
  },
  {
    id: '3',
    title: 'С тобой',
    artist: 'Моника Ли',
    plays: 38556,
    duration: '3:56',
    genre: 'R&B / Соул',
  },
  {
    id: '4',
    title: 'Всегда настоящая',
    artist: 'Моника Ли',
    plays: 35870,
    duration: '3:30',
    genre: 'Электроника',
  },
  {
    id: '5',
    title: 'Шоу окончено',
    artist: 'Моника Ли',
    plays: 51432,
    duration: '4:01',
    genre: 'Хип-хоп',
  },
    {
    id: '6',
    title: 'БББББББольше нет времени',
    artist: 'Моника Ли',
    plays: 42822,
    duration: '3:21',
    genre: 'Поп',
  },
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Анна Ватсон',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Annette',
    hoursListening: 9.3,
    followers: 15420,
  },
  {
    id: '2',
    name: 'Кэлвин Стюард',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Calvin',
    hoursListening: 8.9,
    followers: 12340,
  },
  {
    id: '3',
    name: 'Ральф Ричардс',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ralph',
    hoursListening: 8.7,
    followers: 10230,
  },
  {
    id: '4',
    name: 'Бернард Мерфи',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bernard',
    hoursListening: 8.2,
    followers: 9120,
  },
  {
    id: '5',
    name: 'Арлин Робертсон',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arlene',
    hoursListening: 8.2,
    followers: 8450,
  },
  {
    id: '6',
    name: 'Джейн Лейн',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    hoursListening: 8.1,
    followers: 7890,
  },
  {
    id: '7',
    name: 'Пэт Маккинни',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pat',
    hoursListening: 7.9,
    followers: 6540,
  },
];

export const mockTrendings: Trending[] = [
  {
    id: '1',
    title: 'Red Snapper: обзор выступления',
    artist: 'Камелия',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
    category: 'ТРЕНД',
  },
  {
    id: '2',
    title: 'Томас Боун работает над новым альбомом',
    artist: 'Томас Боун',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    category: 'НОВОСТИ',
  },
  {
    id: '3',
    title: 'Фестиваль абстрактной музыки',
    artist: 'Разные артисты',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop',
    category: 'ФЕСТИВАЛЬ',
  },
  {
    id: '4',
    title: 'Чилл для ясной головы',
    artist: 'Артисты релакса',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=300&fit=crop',
    category: 'ПЛЕЙЛИСТ',
  },
  {
    id: '5',
    title: 'Ночь электронной музыки',
    artist: 'Диджей-коллектив',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
    category: 'СОБЫТИЕ',
  },
];

export const mockGenres: Genre[] = [
  { id: '1', name: 'Блюз' },
  { id: '2', name: 'Классика' },
  { id: '3', name: 'Кантри' },
  { id: '4', name: 'Танцевальная' },
  { id: '5', name: 'Электроника' },
  { id: '6', name: 'Хип-хоп' },
  { id: '7', name: 'Джаз' },
  { id: '8', name: 'Латина' },
  { id: '9', name: 'Метал' },
  { id: '10', name: 'Вечеринка' },
  { id: '11', name: 'R&B / Соул' },
  { id: '12', name: 'Регги / Дэнсхолл' },
  { id: '13', name: 'Саундтреки' },
  { id: '14', name: 'Мировая музыка' },
];

export const mockArtistProfiles = {
  'monica-lee': {
    name: 'Моника Ли',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Monica',
    album: 'Всегда настоящая',
    description: 'Артистка стала одним из самых заметных голосов своей сцены и быстро вышла на международный рынок, попав в радиоэфиры и чарты продаж по всему миру.',
    tracks: mockTracks,
  },
};

export const mockDashboardStats: DashboardStats = {
  listeners: 62,
  newFollowers: 23,
  unfollows: 3,
  newStreams: 83,
  savedPlaylist: 25,
  totalStreamHours: 1396,
};

export const mockCountries = [
  { name: 'Испания', percentage: 32, count: 20 },
  { name: 'Великобритания', percentage: 32, count: 20 },
  { name: 'США', percentage: 24, count: 15 },
  { name: 'Италия', percentage: 12, count: 7 },
];

export const mockListenersByMonth = [
  { month: 'Янв', men: 12, women: 8 },
  { month: 'Фев', men: 15, women: 10 },
  { month: 'Мар', men: 18, women: 14 },
  { month: 'Апр', men: 16, women: 12 },
  { month: 'Май', men: 20, women: 16 },
  { month: 'Июн', men: 22, women: 18 },
  { month: 'Июл', men: 25, women: 20 },
  { month: 'Авг', men: 23, women: 19 },
  { month: 'Сен', men: 21, women: 17 },
  { month: 'Окт', men: 19, women: 15 },
  { month: 'Ноя', men: 17, women: 13 },
  { month: 'Дек', men: 20, women: 16 },
];
