import type { Book } from "../../../types/book"

export function goalsByPlayer(goals: string[]): Map<string, number> {
  const contador = new Map<string, number>()
  for (const gol of goals) {
    const previo = contador.get(gol) ?? 0
    contador.set(gol, previo + 1)
  }
  return contador
}

export function topScorer(count: ReadonlyMap<string, number>): string | undefined {
  let bestPlayer = undefined
  let previo = -1
  for (const [player, goals] of count) {
    if (previo < goals) {
      bestPlayer = player
      previo = goals
    }
  }
  return bestPlayer
}

export function titlesByAuthor(books: Book[]): Map<string, string[]> {
  const authors = new Map<string, string[]>;
  for (const book of books) {
    authors.set(book.author, [...(authors.get(book.author) ?? []), book.title]);
  }
  return authors
}


export function capitalOf(capitals: ReadonlyMap<string, string>, country: string): string {
  let resultado: string = ''
  if (capitals.has(country)) {
    resultado = 'La capital de ' + country + ' es ' + capitals.get(country);
  } else {
    resultado = 'No conozco ' + country
  }
  return resultado
}
