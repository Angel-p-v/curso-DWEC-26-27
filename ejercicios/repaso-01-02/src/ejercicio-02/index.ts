const numeros = [7, 12, 0, -3, 8, 15, 4]

function contarPorParidad(numeros: number[]) {
  let pares: number = 0;
  let impares: number = 0;
  
  for (const numero of numeros) {
    if (numero % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  return {pares, impares}
}

export function ejercicio02(): void {
  console.log(contarPorParidad(numeros))
}
