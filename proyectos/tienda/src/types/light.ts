export type Light = 'rojo' | 'verde' | 'ámbar'
export interface TrafficLight {
  current: () => Light
  next: () => Light
}
