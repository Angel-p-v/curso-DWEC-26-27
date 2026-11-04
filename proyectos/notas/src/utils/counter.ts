export function mountClickCounter(btn: HTMLButtonElement, reset: HTMLButtonElement): void {
  let clicks = 0

  btn.addEventListener("click", () => {
    clicks++;
    btn.textContent = `Clicks: ${clicks}`;
  });

  reset.addEventListener("click", () => {
    clicks = 0;
    btn.textContent = `Clicks: ${clicks}`;
  });
}
