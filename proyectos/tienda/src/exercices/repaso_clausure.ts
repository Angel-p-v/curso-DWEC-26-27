
export function makeGreeter(greeting: string): (name: string) => string {
  return (name) => `${greeting} - ${name}`
}

const morning = makeGreeter("Buenos dias")
const evening = makeGreeter("Buenas noches")

export function makeConvert(factor: number): (value: number) => number {
  return (valor) => valor * factor;
}

const kmToMiles = makeConvert(0.621)
const euroToDolars = makeConvert(1.08)

console.log(makeConvert(10))

// crear un marcador de un partido 

export function makeScoreBoard(): { scoreHome: () => void; scoreAway: () => void; result: () => string } {
  let home = 0;
  let away = 0;
  return {
    scoreHome: () => { home += 1 },
    scoreAway: () => { away += 1 },
    result: () => `${home} - ${away}`
  }
}

const granadaToMalaga = makeScoreBoard()
const finalChampion = makeScoreBoard()
granadaToMalaga.scoreHome()
granadaToMalaga.scoreHome()
granadaToMalaga.scoreAway()
console.log(granadaToMalaga.result())

