import { createCheckBoxInput, createForm, createLabel, createSearchInput, createSongElementLi, createSongsUl, createTitle, formatDuration, getElement } from "./components/dom";
import { initialSongs } from "./services/songs";
import { loadSongs, saveSongs } from "./services/storage";
import type { AppState, Song } from "./types/song";


// declaracion de variables
let state: AppState = { songs: loadSongs() ?? initialSongs.slice(), search: "", favorites: false };
const app = getElement("#app", HTMLDivElement);
const title = createTitle("Mi lista");
const inputSearch = createSearchInput();
const checBoxInput = createCheckBoxInput();
const labelCheckBox = createLabel("Favoritas");
const listSongs = createSongsUl();
const form = createForm();
const resumen = createLabel("");

// declaracion de funciones
function render(): void {
  saveSongs(state.songs);
  let visibles = state.songs
    .filter(s => s.title.toLowerCase().trim().includes(state.search) ||
      s.artist.toLowerCase().trim().includes(state.search));

  if (state.favorites) {
    visibles = visibles.filter(s => s.favorite);
  }

  resumen.textContent = `${visibles.length} canciones · duracion total:  ${formatDuration(visibles.reduce((acc, s) => acc += s.seconds, 0))}`;

  listSongs.replaceChildren(...visibles.map(s => createSongElementLi(s, onToggleFav, onDelete)));

}

function onToggleFav(id: number): void {
  state = { ...state, songs: state.songs.map(s => s.id === id ? { ...s, favorite: !s.favorite } : s) };
  render();
}

function onDelete(id: number): void {
  state = { ...state, songs: state.songs.filter(s => s.id !== id) };
  render();
}


// declaracion de eventos
inputSearch.addEventListener("input", () => {
  state = { ...state, search: inputSearch.value };
  render();
});

checBoxInput.addEventListener("change", () => {
  state = { ...state, favorites: checBoxInput.checked };
  render();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const titulo = String(data.get("title"));
  const artista = String(data.get("artista"));
  const duracion = Number(data.get("duracion"));
  let newId = Math.max(0, ...state.songs.map(s => s.id)) + 1;

  if (duracion < 0) return;
  if (duracion > 59) {
    newId = Number(formatDuration(duracion));
  }

  const newSong: Song = {
    id: newId,
    title: titulo,
    artist: artista,
    seconds: duracion,
    favorite: false
  };

  state = { ...state, songs: [...state.songs, newSong] };

  form.reset();
  render();
});


// inicio de la aplicacion 
app.append(title, form, inputSearch, checBoxInput, labelCheckBox, listSongs, resumen);
render();
