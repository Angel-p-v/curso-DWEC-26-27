export interface Activity {
  readonly id: number;
  name: string;
  places: number; // plazas totales
  enrolled: number; // inscritos (nunca más que places)
}

export interface Appstate {
  activities: Activity[];
  search: string;
}
