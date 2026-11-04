export function filtrador(contenido: (texto: string) => void): HTMLLabelElement {
  const label = document.createElement('label');
  label.textContent = 'Filtrar por nombre: ';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Escribe para filtrar...';

  // Dispara el filtro inmediatamente al escribir o borrar cualquier carácter
  input.addEventListener('input', () => {
    contenido(input.value);
  });

  label.appendChild(input);
  return label;
}
