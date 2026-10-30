import type { Light, TrafficLight } from "../../../types/light";
import type { LoginAnswer } from "../../../types/login";

export function createTurnDispenser(letter: string): () => string {
  let n = 1
  function turn() {
    let numero = n
    n = n + 1
    return letter + String(numero).padStart(3, '0');
  }
  return turn
}

export function createTrafficLight(): TrafficLight {
  const colores: Light[] = ['rojo', 'verde', 'ámbar']
  let index = 0
  return {
    current() {
      return colores[index]
    },
    next() {
      index = (index + 1) % 3
      return colores[index]
    }
  }
}

export function createPasswordCheck(password: string, maxAttempts: number): (attempt: string) => LoginAnswer {
  let failures = 0;

  return (attempt: string): LoginAnswer => {
    if (failures >= maxAttempts) {
      return 'bloqueada';
    }

    if (attempt !== password) {
      failures = failures + 1;
      return 'incorrecta';
    }
    failures = 0;
    return 'correcta';
  };
}


