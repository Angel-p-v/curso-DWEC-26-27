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

  inputTitleRecipe.placeholder = "Nombre de la receta...";
  inputMinuteRecipe.placeholder = "Tiempo de preparacion...";
  checkBoxVegetariano.placeholder = "Vegetariano";
  labelCheckBox.textContent = "Vegetariano";
  btnCrearReceta.textContent = "Crear";

  form.append(inputTitleRecipe, inputMinuteRecipe, labelCheckBox, checkBoxVegetariano, btnCrearReceta);
  return form;
}

export function createRecipesUl(): HTMLUListElement {
  return document.createElement("ul");
}

export function createRecipeElementLi(recipe: Recipe): HTMLLIElement {

}
