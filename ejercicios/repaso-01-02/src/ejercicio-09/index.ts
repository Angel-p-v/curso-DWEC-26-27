type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 25, rebajado: false },
  { id: 2, nombre: 'Ratón', precio: 15, rebajado: true },
  { id: 3, nombre: 'Monitor', precio: 180, rebajado: false },
  { id: 4, nombre: 'Altavoces', precio: 45, rebajado: true },
  { id: 5, nombre: 'Webcam', precio: 60, rebajado: false }
]

function rebajar(catalogo: Producto[], id: number): Producto[] {
  return catalogo.map(producto => {
    if (producto.id === id) {
      return {
        ...producto,
        rebajado: true,
        precio: Number((producto.precio * 0.90).toFixed(2))
      };
    }
    return producto; 
  })
}


export function ejercicio09(): void {
  console.log('Resultado con descuento aplicado:', rebajar(productos, 3));
  console.log('Catálogo original (debe seguir igual):', productos); 
}
