import type { Song } from "../types/song";

const key = "examen:songs";

export function saveSongs(songs: Song[]): void {
  localStorage.setItem(key, JSON.stringify(songs));
}

export function loadSongs(): Song[] | null {
  const result = localStorage.getItem(key);

  if (result === null) return null;

  try {
    const data: unknown = JSON.parse(result);
    if (!Array.isArray(data)) return null;
    return data as Song[];
  } catch {
    return null;
  }
}
