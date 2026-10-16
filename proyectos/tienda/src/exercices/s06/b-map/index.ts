export function goalsByPlayer(goals: string[]): Map<string, number> {
  const contador = new Map<string, number>()
  for (const gol of goals) {
    const previo = contador.get(gol) ?? 0
    contador.set(gol, previo + 1)
  }
}
