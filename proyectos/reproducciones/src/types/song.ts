export interface Song {
  readonly id: number;
  title: string;
  artist: string;
  seconds: number; // duración en segundos
  favorite: boolean;
}

export interface AppState {
  songs: Song[];
  search: string;
  favorites: boolean;
}
