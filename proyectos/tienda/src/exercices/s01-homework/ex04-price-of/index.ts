import type { Product } from "../../../types/product";

export function priceOf(list: Product[], id: number): number | null {
  return list.find(p => p.id === id) !== undefined ? list[id].price : null
}
