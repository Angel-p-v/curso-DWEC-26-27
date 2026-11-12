import type { Recipe } from "../types/recipe";

export function getElement<T extends Element>(id: string, type: new () => T): T {
  const element = document.querySelector(id);
  if (!(element instanceof type)) {
    throw new Error("Error en la seleccion del elemento");
  }
  return element;
}

export function createTitle(title: string): HTMLHeadingElement {
  const titulo = document.createElement("h1");
  titulo.textContent = title;
  return titulo;
}

export function createForm(): HTMLFormElement {
  const form = document.createElement("form");

  const inputTitleRecipe = document.createElement("input");
  const inputMinuteRecipe = document.createElement("input");
  const checkBoxVegetariano = document.createElement("input");
  const btnCrearReceta = document.createElement("button");
  const labelCheckBox = document.createElement("label");

  inputTitleRecipe.type = "text";
  inputMinuteRecipe.type = "number";
  checkBoxVegetariano.type = "checkbox";

  inputTitleRecipe.name = "name";
  inputMinuteRecipe.name = "minutes";
  checkBoxVegetariano.name = "vegane";

  inputTitleRecipe.required = true;
  inputMinuteRecipe.required = true;


  inputTitleRecipe.placeholder = "Nombre de la receta...";
  inputMinuteRecipe.placeholder = "Tiempo de preparacion...";
  labelCheckBox.textContent = "Vegetariano";
  btnCrearReceta.textContent = "Crear";

  form.append(inputTitleRecipe, inputMinuteRecipe, labelCheckBox, checkBoxVegetariano, btnCrearReceta);
  return form;
}

export function createRecipesUl(): HTMLUListElement {
  return document.createElement("ul");
}

export function createRecipeElementLi(recipe: Recipe, onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");

  const label = document.createElement("label");
  const btnBorrar = document.createElement("button");

  const text = label.textContent = `${recipe.name} · ${recipe.minutes} `;
  btnBorrar.textContent = "Borrar";

  if (recipe.vegetarian) {
    label.textContent = `${text} · [V] `;
  }

  btnBorrar.addEventListener("click", () => onDelete(recipe.id));

  li.append(label, btnBorrar);
  return li;
}

export function labelResumen(): HTMLLabelElement {
  return document.createElement("label");
}

export function createCheckBoxFilter(filter: (opt: boolean) => void): HTMLLabelElement {
  const text = document.createElement("label");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  text.textContent = "Solo recetas vegetarianas? ";

  checkbox.name = "opt";

  checkbox.addEventListener("change", () => filter(checkbox.checked));

  text.append(checkbox);
  return text;
}
