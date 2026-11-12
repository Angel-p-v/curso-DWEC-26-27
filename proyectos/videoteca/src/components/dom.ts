import type { Game } from "../types/game";


export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error("Error en el selector de tipos");
  }
  return element;
}

// funcion para crear titulos
export function createTitle(title: string): HTMLHeadingElement {
  const label = document.createElement("h1");
  label.textContent = title;
  return label;
}

// funcion para crear un campo de busqueda 
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar un juego...";
  return input;
}

// funcion para crear el formulario para meter nuevos juegos y sus campos
export function createFormGames(): HTMLFormElement {
  const form = document.createElement("form");

  const inputNombreJuego = document.createElement("input");
  const inputPlataformaJuego = document.createElement("select");
  const buttonEnviar = document.createElement("button");

  inputNombreJuego.required = true;
  inputPlataformaJuego.name = "platform";
  inputNombreJuego.name = "title";

  const consolas: string[] = ["PC", "Switch", "Ps4"];
  const plataformas = consolas.map(plataforma => {
    const opcion = document.createElement("option");
    opcion.value = plataforma;
    opcion.textContent = plataforma;
    return opcion;
  });
  inputPlataformaJuego.append(...plataformas);

  inputNombreJuego.type = "text";
  buttonEnviar.type = "submit";

  inputNombreJuego.placeholder = "Nombre del juego";
  buttonEnviar.textContent = "Añadir";

  form.append(inputNombreJuego, inputPlataformaJuego, buttonEnviar);
  return form;
}

// funcion para crear la lista ul
export function createUlGames(): HTMLUListElement {
  return document.createElement("ul");
}

// funicion para crear los elementos de la lista 
export function createGameItemUl(game: Game, onToggle: (id: number) => void, onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");
  const content = document.createElement("span");
  const btnEstado = document.createElement("button");
  const btnBorrar = document.createElement("button");

  btnEstado.type = "button";
  btnBorrar.type = "button";

  btnEstado.textContent = `${game.played}`;
  btnBorrar.textContent = "Borrar";
  content.textContent = `${game.title} (${game.platform})`;

  btnEstado.addEventListener("click", () => onToggle(game.id));
  btnBorrar.addEventListener("click", () => onDelete(game.id));

  li.append(content, btnEstado, btnBorrar);
  return li;
}

export function createLabelResumen(): HTMLLabelElement {
  return document.createElement("label");
}


