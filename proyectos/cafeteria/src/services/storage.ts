import type { OrderLine } from "../types/orderLine";

const key = "examen:order";

export function saveOrders(orders: OrderLine[]): void {
  localStorage.setItem(key, JSON.stringify(orders));
}

export function loadOrders(): OrderLine[] | null {
  const result = localStorage.getItem(key);
  if (result === null) return null;

  try {
    const data: unknown = JSON.parse(result);
    if (!Array.isArray(data)) return null;
    return data as OrderLine[];
  } catch {
    return null;
  }
}
