const entradas = ['7', '4.5', '9', '3', '5.5', 'hola']

function mediaNotas(entradas: string[]): { 
  validas: number;
  media: string | null 
} {
  let validas = 0;
  let suma = 0;

  for (const entrada of entradas) {
    const nota = Number(entrada);
    
    if (entrada !== '' && Number.isFinite(nota) && nota >= 0 && nota <= 10) {
      validas++;
      suma += nota;
    }
  }

  return {
    validas,
    media: validas > 0 ? (suma / validas).toFixed(1) : null
  }
}

export function ejercicio08(): void {
  console.log(mediaNotas(entradas));
}
