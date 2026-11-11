import { createFormGames, createGameItemUl, createSearchInput, createTitle, createUlGames, getElement } from "./components/dom";
import { initialGames } from "./services/games";
import type { Game } from "./types/game";


//declaracion de variables
const divApp = getElement("#app", HTMLDivElement);
const title = createTitle("Videoteca");
const listGames = createUlGames();
const formulario = createFormGames();
const inputSearch = createSearchInput();

interface AppState {
  initialGames: readonly Game[];
  inputSearch: string;
}

let state: AppState = { initialGames: initialGames, inputSearch: "" };

// declaracion de funciones
function render(): void {
  const text = state.inputSearch.trim().toLowerCase();
  const game = state.initialGames.filter(g => g.title.toLowerCase().includes(text) || g.platform.toLowerCase().trim().includes(text));

  const games = game.map(g => createGameItemUl(g, toggleState, gameDelete));
  listGames.replaceChildren(...games);
}


// eventos
function toggleState(id: number): void {
  state = {
    ...state,
    initialGames: state.initialGames.map(g => g.id === id ? { ...g, played: !g.played } : g)
  };
  render();
}

function gameDelete(id: number): void {
  state = {
    ...state,
    initialGames: state.initialGames.filter(g => g.id !== id)
  }
  render();
}

inputSearch.addEventListener("input", () => {
  state = { ...state, inputSearch: inputSearch.value.toLowerCase().trim() }
  render();
});

// inicio de la aplicacion 
divApp.append(title, formulario, inputSearch, listGames);
render();
