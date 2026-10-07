import type { Product } from "../../../types/product";

export interface Summary {
  products: number; // cuántos productos distintos hay
  units: number; // suma del stock de todos
  value: number; // suma de price × stock de cada producto
}

export function summary(list: Product[]): Summary {
  return list.reduce((acc, p) => ({
    products: acc.products++,
    units: acc.units + p.stock,
    value: acc.value + (p.price * p.stock)
  }), { products: 0, units: 0, value: 0 })
}
