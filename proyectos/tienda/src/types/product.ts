// un tipo describe la forma de un dato.
export type Category = 'audio' | 'monitors' | 'GPU' | 'peripherals';

// una interfaz es como un contrato con los valores que debe de teener y el tipo. Typescript firma el contrato y si se rompe se queja
// los elementos de una interfaz van separados por ; o enter
export interface Product {
  id: number;
  name: string;
  price: number; // precio sin iva
  category: Category;
  stock: number;
}
