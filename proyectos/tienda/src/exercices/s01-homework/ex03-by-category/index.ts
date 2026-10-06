import type { Category, Product } from "../../../types/product";

export function byCategory(list: Product[], category: Category): Product[] {
  return list.filter(p => p.category === category)
}

