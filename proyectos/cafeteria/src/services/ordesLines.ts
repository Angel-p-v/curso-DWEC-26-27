import type { OrderLine } from "../types/orderLine";

export const initialOrder: readonly OrderLine[] = [
  { id: 1, product: "Café con leche", unitPrice: 1.3, quantity: 2 },
  { id: 2, product: "Tostada con tomate", unitPrice: 1.8, quantity: 1 },
  { id: 3, product: "Zumo de naranja", unitPrice: 2.2, quantity: 1 },
];
