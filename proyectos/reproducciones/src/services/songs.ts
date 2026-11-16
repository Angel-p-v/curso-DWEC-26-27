import type { Song } from "../types/song";

export const initialSongs: readonly Song[] = [
  { id: 1, title: "Entre dos aguas", artist: "Paco de Lucía", seconds: 362, favorite: true },
  { id: 2, title: "Malamente", artist: "Rosalía", seconds: 150, favorite: false },
  { id: 3, title: "La flaca", artist: "Jarabe de Palo", seconds: 268, favorite: true },
  { id: 4, title: "Mediterráneo", artist: "Joan Manuel Serrat", seconds: 205, favorite: false },
  { id: 5, title: "Pienso en tu mirá", artist: "Rosalía", seconds: 193, favorite: false },
];
