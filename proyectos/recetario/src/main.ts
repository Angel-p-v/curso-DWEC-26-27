import { createCheckBoxFilter, createForm, createRecipeElementLi, createRecipesUl, createTitle, getElement, labelResumen } from "./components/dom";
import { initialRecipes } from "./services/recetes";
import { loadRecipes, saveRecipes } from "./services/storage";
import type { AppState } from "./types/appState";
import type { Recipe } from "./types/recipe";

// declaracion de variables
let state: AppState = { recipe: loadRecipes() ?? initialRecipes.slice(), onlyVegan: false };

const divApp = getElement("#app", HTMLDivElement);
const form = createForm();
const title = createTitle("Recetario");
const listaRecetasUl = createRecipesUl();
const checkBoxFiltro = createCheckBoxFilter(showCheckBoxVegan);
const resumen = labelResumen();


// declaracion de funciones
function render(): void {
  saveRecipes(state.recipe);
  const visibles = state.onlyVegan ? state.recipe.filter(r => r.vegetarian) : state.recipe;

  const recetasShow = visibles.length;
  const mediaMinutos = Math.round(visibles.reduce((acc, r) => acc += r.minutes, 0) / recetasShow);
  resumen.textContent = `${recetasShow} recetas · tiempo medio: ${mediaMinutos} min`;


  listaRecetasUl.replaceChildren(...visibles.map(v => createRecipeElementLi(v, recipeDelete)));
}

// declaracion de eventos
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const nombreR = String(data.get("name"));
  const minuteR = Number(data.get("minutes"));
  const vegane = Boolean(data.get("vegane"));
  const newId = Math.max(0, ...state.recipe.map(r => r.id)) + 1;

  const newRecipe: Recipe = {
    id: newId,
    name: nombreR,
    minutes: minuteR,
    vegetarian: vegane
  };

  state = { ...state, recipe: [...state.recipe, newRecipe] };
  form.reset();
  render();
});

function recipeDelete(id: number): void {
  state = {
    ...state,
    recipe: state.recipe.filter(r => r.id !== id)
  };
  render();
}

function showCheckBoxVegan(opt: boolean) {
  state = { ...state, onlyVegan: opt };
  render();
}


// inicio de la aplicacion 
divApp.append(title, form, checkBoxFiltro, listaRecetasUl, resumen);
render();
