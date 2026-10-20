import type { PriceRule } from "../../../types/priceRule";

const addVat: PriceRule = (price: number) => (price * 1.21)
export function applyAll(prices: number[], rule: PriceRule): number[] {
  return prices.map(rule);
}

export function createDiscount(percent: number): PriceRule {
  return (price: number) => {
    return price * (1 - percent / 100);
  }
}


