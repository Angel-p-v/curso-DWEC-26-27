import type { Song } from "../types/song";


export function getElement<T extends Element>(id: string, type: new () => T): T {
  const element = document.querySelector(id);

  if (!(element instanceof type)) {
    throw new Error("Error en el selector");
  }

  return element;
}

export function createTitle(text: string): HTMLHeadingElement {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

export function createSearchInput(): HTMLInputElement {
  const inputSearch = document.createElement("input");

  inputSearch.type = "text";

  inputSearch.placeholder = "Buscar por nombre de la cancion";

  return inputSearch;

}

export function createCheckBoxInput(): HTMLInputElement {
  const checkBox = document.createElement("input");

  checkBox.type = "checkbox";

  return checkBox;
}

export function createLabel(text: string): HTMLLabelElement {
  const label = document.createElement("label");
  label.textContent = text;
  return label;
}

export function createForm(): HTMLFormElement {
  const form = document.createElement("form");

  const inputTitle = document.createElement("input");
  const inputArtista = document.createElement("input");
  const inputDuracion = document.createElement("input");
  const btnAdd = document.createElement("button");

  inputTitle.type = "text";
  inputArtista.type = "text";
  inputDuracion.type = "number";
  btnAdd.type = "submit";

  inputTitle.name = "title";
  inputArtista.name = "artista";
  inputDuracion.name = "duracion";

  inputTitle.required = true;
  inputArtista.required = true;
  inputDuracion.required = true;

  inputTitle.placeholder = "Nombrede la cancion";
  inputArtista.placeholder = "Artista de la cancion";
  inputDuracion.placeholder = "Duracion en segundos";
  btnAdd.textContent = "Add";

  form.append(inputTitle, inputArtista, inputDuracion, btnAdd);
  return form;
}

export function createSongsUl(): HTMLUListElement {
  return document.createElement("ul");
}

export function formatDuration(seconds: number): string {
  const totalSeconds = seconds;

  const minutes = Math.floor(totalSeconds / 60);
  const segundos = Math.floor(totalSeconds % 60);

  return `${String(minutes)}:${String(segundos).padStart(2, "0")}`;
}

export function createSongElementLi(song: Song, onToggleFav: (id: number) => void, onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");

  const label = document.createElement("label");
  const btnFavorito = document.createElement("button");
  const btnRemove = document.createElement("button");

  btnFavorito.type = "button";
  btnRemove.type = "button";

  label.textContent = `${song.title} · ${song.artist} · ${formatDuration(song.seconds)} `;
  btnFavorito.textContent = song.favorite ? "🌟" : "⭐";
  btnRemove.textContent = "Eliminar";

  btnFavorito.addEventListener("click", () => onToggleFav(song.id));
  btnRemove.addEventListener("click", () => onDelete(song.id));

  li.append(label, btnFavorito, btnRemove);
  return li;
}   
