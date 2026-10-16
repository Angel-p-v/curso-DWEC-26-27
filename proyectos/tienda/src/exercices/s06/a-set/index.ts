// Enunciado: Ejercicios set
// Autor: Ángel Puertas Villegas
// Investigación: 
//

// Ejercicio A1
export function uniqueTags(posts: string[][]): string[] {
  return [...new Set(posts.flat())];
}


// Ejercicio A2
export function firstRepeated(votes: string[]): string | undefined {
  const dnis = new Set<string>();
  for (const vote of votes) {
    if (dnis.has(vote)) {
      return vote
    }
    dnis.add(vote)
  }
  return undefined
}

// Ejercicio A3
export function inBoth(a: string[], b: string[]): string[] {
  const setSongs = new Set<string>(b);
  const repetidas = []
  for (const song of a) {
    if (setSongs.has(song)) {
      repetidas.push(song)
    }
  }
  return repetidas;
}
