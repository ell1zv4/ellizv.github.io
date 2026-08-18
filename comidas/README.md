# Plan de comidas

La web carga todas las semanas desde `data.json`.

## Añadir una semana

No edites `index.html`.

1. Abre `comidas/data.json`.
2. Dentro de `weeks`, duplica uno de los bloques existentes.
3. Cambia `start` y `end` (formato `YYYY-MM-DD`).
4. Cambia los objetos de `days` con fecha, comida y cena.
5. Cambia `shopping` con la lista de compra.
6. Guarda el archivo.

La web detecta automáticamente todas las semanas y crea botones como `17–23 agosto`, `24–30 agosto`, etc.

Los checks de compra se guardan en el navegador mediante `localStorage` y están separados por semana.
