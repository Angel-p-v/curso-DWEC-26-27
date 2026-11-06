
// tipos para los productos
export interface Producto {
  readonly id: number; // el id no cambia nunca
  name: string;
  price: number;
  favorite: boolean; // true si el usuario a marcado como favorito
}

export interface NewProduct {
  name: string;
  price: number;
}
