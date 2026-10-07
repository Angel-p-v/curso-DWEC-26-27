import type { Product } from "../../../types/product";

export function totalUnits(list: Product[]): number {
  return list.reduce((stock, p) => stock += p.stock, 0)
}

