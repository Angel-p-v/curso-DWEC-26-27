import type { Game } from "../types/game";

const key = "juegos:games";

export function saveGames(games: Game[]): void {
  localStorage.setItem(key, JSON.stringify(games));
}

export function loadGames(): Game[] | null {
  const result = localStorage.getItem(key);
  if (result === null) return null;

  try {
    const data: unknown = JSON.parse(result);
    if (!Array.isArray(data)) return null;
    return data as Game[];
  } catch {
    return null;
  }
} 
