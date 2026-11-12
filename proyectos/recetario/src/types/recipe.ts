export interface Recipe {
  readonly id: number;
  name: string;
  minutes: number; // tiempo de preparación
  vegetarian: boolean;
}
