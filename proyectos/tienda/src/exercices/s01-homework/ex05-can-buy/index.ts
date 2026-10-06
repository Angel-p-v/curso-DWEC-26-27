import type { Product } from "../../../types/product";

export function canBuy(list: Product[], id: number, quantity: number): boolean {
  const product = list.find(p => p.id === id);
  return product !== undefined && product.stock >= quantity;
}
