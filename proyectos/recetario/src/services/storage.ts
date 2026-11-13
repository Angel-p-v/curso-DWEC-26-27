import type { Recipe } from "../types/recipe";

const key = "recetas:recipes";

export function saveRecipes(recipes: Recipe[]) {
  localStorage.setItem(key, JSON.stringify(recipes));
}

export function loadRecipes(): Recipe[] | null {
  const result = localStorage.getItem(key);
  if (result === null) return null;

  try {
    const data: unknown = JSON.parse(result);
    if (!Array.isArray(data)) return null;
    return data;
  } catch {
    return null;
  }
}
