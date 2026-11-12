import { createFormGames, createGameItemUl, createLabelResumen, createSearchInput, createTitle, createUlGames, getElement } from "./components/dom";
import { initialGames } from "./services/games";
import type { Game } from "./types/game";


//declaracion de variables
interface AppState {
  games: Game[];
  inputSearch: string;
}

let state: AppState = { games: initialGames.slice(), inputSearch: "" };

const divApp = getElement("#app", HTMLDivElement);
const title = createTitle("Videoteca");
const listGames = createUlGames();
const formulario = createFormGames();
const inputSearch = createSearchInput();
const labelResumen = createLabelResumen();


// declaracion de funciones
function render(): void {
  const text = state.inputSearch.trim().toLowerCase();
  const filtered = state.games.filter(g => g.title.toLowerCase().includes(text) || g.platform.toLowerCase().trim().includes(text));

  const jugados = state.games.reduce((acc, g) => g.played ? acc + 1 : acc, 0);
  labelResumen.textContent = `Jugados ${jugados} de ${state.games.length}`;

  const games = filtered.map(g => createGameItemUl(g, toggleState, gameDelete));
  listGames.replaceChildren(...games);
}

// eventos
function toggleState(id: number): void {
  state = {
    ...state,
    games: state.games.map(g => g.id === id ? { ...g, played: !g.played } : g)
  };
  render();
}

function gameDelete(id: number): void {
  state = {
    ...state,
    games: state.games.filter(g => g.id !== id)
  };
  render();
}


inputSearch.addEventListener("input", () => {
  state = { ...state, inputSearch: inputSearch.value.toLowerCase().trim() };
  render();
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(formulario);

  const titulo = String(data.get("title") ?? "").trim();
  const platform = String(data.get("platform") ?? "").trim();

  const newId = Math.max(0, ...state.games.map((g) => g.id)) + 1;
  const newGame = {
    id: newId,
    title: titulo,
    platform: platform,
    played: false
  };

  state = { ...state, games: [...state.games, newGame] };
  formulario.reset();
  render();
});


// inicio de la aplicacion 
divApp.append(title, formulario, inputSearch, listGames, labelResumen);
render();
