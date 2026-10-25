import type { Contact } from "../types/contact";

export function filterContacts(list: readonly Contact[], text: string, onlyFavorites: boolean): Contact[] {
  return list.filter(list => (list.name.toLowerCase === text.toLowerCase || list.phone === text) && list.favorite === onlyFavorites)
}
