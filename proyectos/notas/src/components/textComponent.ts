export function createTextSpan(text: string, cssArray: string[]): HTMLSpanElement {
  const span = document.createElement("span")
  span.classList.add(...cssArray)
  span.textContent = text
  return span
}
