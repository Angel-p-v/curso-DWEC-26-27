// 1. crear un type (cart.ts) llamado Carline q tenga el id del producto y la cantidad a comprar (exportarlo)
export interface Carline {
  productId: number,
  quantity: number
}
export type Cart = Carline[]
