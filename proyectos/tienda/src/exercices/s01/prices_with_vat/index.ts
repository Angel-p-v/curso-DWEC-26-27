import type { Product } from "../../../types/product";
// array con los precios de los productos con iva

/** 
  *
  * Recibe una lista de productos y devuelve una lista de numeros con el precio con iva 
  * */
const vat = 0.21;
export function pricesWithVat(products: Product[]): number[] {
  return products.map((product) => Math.round(product.price * (1 + vat)));
}
