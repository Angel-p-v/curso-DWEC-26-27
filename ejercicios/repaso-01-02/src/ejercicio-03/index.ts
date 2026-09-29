const stock: Record<string, number> = {
  teclados: 12,
  ratones: 0,
  monitores: 5,
  cables: 8
}

function resumenStock(stock: Record<string, number>): { total: number; sinStock: number } {
  let total = 0;
  let sinStock = 0;

  for (const clave in stock) {
    if (Object.hasOwn(stock, clave)) {
      const cantidad = stock[clave];
      total += cantidad;
      
      sinStock += cantidad === 0 ? 1 : 0; 
    }
  }

  return { total, sinStock };
}

export function ejercicio03(): void {
  console.log(resumenStock(stock));
}
