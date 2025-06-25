# 🛒 Mi Tienda Online - Etapa 4

En esta etapa se implementaron funcionalidades clave que transforman la tienda en una experiencia interactiva real para el usuario.

## ✅ Funcionalidades desarrolladas

- ✅ **Carga dinámica de productos desde JSON** usando `fetch()`.
- ✅ **Visualización de productos por categoría** en `tienda.html`.
- ✅ **Carrusel en `index.html`** con desplazamiento horizontal y navegación por flechas.
- ✅ **Botones de cantidad (+ y –)** en cada producto.
- ✅ **Carrito de compras individual por usuario** usando `localStorage`.
- ✅ **Asociación de productos al usuario activo**.
- ✅ **Persistencia del carrito por sesión**.
- ✅ **Mensajes de alerta al agregar productos**.

## 📁 Archivos destacados

- `data/productos.json`: contiene los productos organizados por categoría.
- `js/cards.js`: carga los productos en la tienda, controla cantidades y agrega al carrito.
- `js/tienda.js`: lógica específica para `tienda.html`.
- `index.html`: incluye carrusel de productos destacados.
- `css/estilos.css`: mejoras visuales y estructura del carrusel.
- `img/productos/`: nuevas imágenes categorizadas.

## 💻 Cómo ver esta etapa

1. Clonar el repositorio y cambiar de rama:

   ```bash
   git clone https://github.com/danielmoy4/mi-tienda-online.git
   cd mi-tienda-online
   git checkout etapa4
