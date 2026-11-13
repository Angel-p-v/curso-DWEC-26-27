import { addActivityLi, createActivityUl, createFormActivity, createInputSearch, createLabelResumen, createTitle, getElement } from './compoenets/dom';
import { initialActivities } from './services/activities';
import { loadActivities, saveActivities } from './services/storage';
import type { Activity, Appstate } from './types/activity';

// declaracion de variables
let state: Appstate = { activities: loadActivities() ?? initialActivities.slice(), search: "" };
const divApp = getElement("#app", HTMLDivElement);
const title = createTitle("Actividades extraescolares");
const inputSearch = createInputSearch();
const listActivities = createActivityUl();
const form = createFormActivity();
const resumen = createLabelResumen();


// declaracion de funciones
function render(): void {
  saveActivities(state.activities);
  const visibles = state.activities.filter(a => a.name.toLowerCase().trim().includes(state.search));

  resumen.textContent = `Plazas Libres: ${visibles.reduce((acc, a) => acc += (a.places - a.enrolled), 0)}`;

  listActivities.replaceChildren(...visibles.map(a => addActivityLi(a, onAdd, onRemove)));
}

function onAdd(id: number): void {
  state = {
    ...state, activities: state.activities
      .map(a => a.id === id ? { ...a, enrolled: a.enrolled < 30 ? a.enrolled + 1 : 0 } : a)
  };
  render();
}

function onRemove(id: number): void {
  state = {
    ...state, activities: state.activities
      .map(a => a.id === id ? { ...a, enrolled: a.enrolled > 0 ? a.enrolled - 1 : 0 } : a)
  };
  render();
}

// declaracion de eventos
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const name = String(data.get("name"));
  const places = Number(data.get("plazas"));
  const newId = Math.max(0, ...state.activities.map(a => a.id));

  if (places <= 0 || places > 30) return;

  const newActivity: Activity = {
    id: newId,
    name,
    places,
    enrolled: 0
  };

  state = { ...state, activities: [...state.activities, newActivity] };
  form.reset();
  render();
});

inputSearch.addEventListener("input", () => {
  state = { ...state, search: inputSearch.value.trim().toLowerCase() };
  render();
});

// inicio de la aplicacion 
divApp.append(title, form, inputSearch, resumen, listActivities);
render();
