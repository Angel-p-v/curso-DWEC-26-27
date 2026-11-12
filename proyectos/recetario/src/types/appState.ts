import type { Recipe } from "./recipe";

export interface AppState {
  recipe: Recipe[];
  onlyVegan: boolean;
}

