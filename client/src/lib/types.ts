export interface Track {
  id: string;
  title: string;
  artist: string;
  plays: number;
  duration: string;
  genre: string;
  image?: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  hoursListening: number;
  followers?: number;
}

export interface Trending {
  id: string;
  title: string;
  artist: string;
  image: string;
  category: string;
}

export interface Genre {
  id: string;
  name: string;
  image?: string;
}

export interface DashboardStats {
  listeners: number;
  newFollowers: number;
  unfollows: number;
  newStreams: number;
  savedPlaylist: number;
  totalStreamHours: number;
}

export interface SearchResult {
  type: 'track' | 'artist' | 'trending';
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
}
