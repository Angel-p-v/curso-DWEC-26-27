import type { Product } from "../../types/product";

export function soldOutNames(list: Product[]): string[] {
  return list.filter(p => p.stock === 0).map(p => p.name)
}
