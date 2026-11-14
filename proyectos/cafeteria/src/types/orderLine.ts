export interface OrderLine {
  readonly id: number;
  product: string;
  unitPrice: number;
  quantity: number; // siempre 1 o más
}

export interface AppState {
  orders: OrderLine[];
}
