import type { Activity } from "../types/activity";


export function getElement<T extends Element>(id: string, type: new () => T): T {
  const item = document.querySelector(id);
  if (!(item instanceof type)) {
    throw new Error("Error en el selector");
  }
  return item;
}

export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

export function createLabelResumen(): HTMLLabelElement {
  return document.createElement("label");
}

export function createActivityUl(): HTMLUListElement {
  return document.createElement("ul");
}

export function createInputSearch(): HTMLInputElement {
  const inputSearch = document.createElement("input");
  inputSearch.type = "text";
  inputSearch.placeholder = "Buscar actividad...";

  return inputSearch;
}

export function createFormActivity(): HTMLFormElement {
  const form = document.createElement("form");

  const inputName = document.createElement("input");
  const inputPlazas = document.createElement("input");
  const btnAddActivity = document.createElement("button");

  inputName.type = "text";
  inputPlazas.type = "number";
  btnAddActivity.type = "submit";

  inputName.required = true;
  inputPlazas.required = true;

  inputName.name = "name";
  inputPlazas.name = "plazas";

  inputName.placeholder = "Nombre de la actividad";
  inputPlazas.placeholder = "Maximo de plazas";
  btnAddActivity.textContent = "Add";

  form.append(inputName, inputPlazas, btnAddActivity);
  return form;
}

export function addActivityLi(activity: Activity, onAdd: (id: number) => void, onRemove: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");

  const nameActivity = document.createElement("label");
  const plazasActivity = document.createElement("label");
  const btnAdd = document.createElement("button");
  const btnRemove = document.createElement("button");

  btnAdd.type = "button";
  btnRemove.type = "button";

  nameActivity.textContent = `${activity.name} `;
  plazasActivity.textContent = `${activity.enrolled} / ${activity.places} `;
  btnAdd.textContent = "Add";
  btnRemove.textContent = "Eliminar";

  btnAdd.addEventListener("click", () => onAdd(activity.id));
  btnRemove.addEventListener("click", () => onRemove(activity.id));

  if (activity.places === activity.enrolled) {
    btnAdd.style.display = "none";
  }

  li.append(nameActivity, plazasActivity, btnAdd, btnRemove);
  return li;
}
