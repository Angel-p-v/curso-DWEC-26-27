import type { Contact } from "../types/contact"

export function createContactRow(c: Contact): HTMLLIElement {
  const li = document.createElement('li')
  if (c.favorite) {
    li.classList.add('favorite')
  }
  const star = c.favorite ? '★ ' : ''
  li.textContent = `${star}${c.name} - ${c.phone}`
  return li
}
