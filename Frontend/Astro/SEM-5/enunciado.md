# Proyecto: Nómada Store

Una pequeña tienda online que consume productos de:

- Fake Store API

El proyecto tendrá:

- listado de productos;
- categorías;
- búsqueda por categoría;
- página individual para cada producto;
- datos obtenidos mediante fetch();
- rutas dinámicas;
- getStaticPaths();
- componentes Astro reutilizables;
- props;
- manejo de errores;
- estados de carga;
- diseño responsive;

# 1. Enunciado completo

## Nómada Store — Catálogo dinámico de productos

La empresa ficticia Nómada Store necesita una aplicación web que permita visualizar un catálogo de productos obtenidos desde una API externa.

El objetivo del proyecto es desarrollar una aplicación utilizando Astro 7.2 y Tailwind CSS 4.3, demostrando el consumo de datos externos y la generación dinámica de páginas.

La información de los productos no debe estar escrita manualmente en el HTML. Todos los productos deberán obtenerse mediante peticiones HTTP a Fake Store API.

## API

La aplicación utilizará:

https://fakestoreapi.com

Endpoint principal:

https://fakestoreapi.com/products

Endpoint individual:

https://fakestoreapi.com/products/:id

Endpoint de categorías:

https://fakestoreapi.com/products/categories

# 2. Requisitos funcionales

### RF01 — Página principal

Crear una página / que muestre:

- nombre de la tienda;
- descripción breve;
- cantidad total de productos;
- listado de productos;
- imagen;
- título;
- precio;
- categoría;
- botón para consultar el producto.

Los productos deben obtenerse mediante:

fetch("https://fakestoreapi.com/products")

### RF02 — Componente ProductCard

Crear un componente:

src/components/ProductCard.astro

El componente debe recibir mediante props:

id
title
price
image
category
rating

y mostrar la información del producto.

RF03 — Página individual

Al hacer clic en un producto debe abrirse:

/products/1
/products/2
/products/3
...

La ruta debe ser dinámica:

src/pages/products/[id].astro

Astro utiliza los segmentos entre corchetes para crear rutas dinámicas. En modo estático, esas rutas deben conocerse durante el build mediante getStaticPaths().

RF04 — Detalle del producto

La página individual deberá mostrar:

imagen;
título;
descripción;
precio;
categoría;
valoración;
cantidad de votos;
botón para regresar al catálogo.
RF05 — Categorías

Crear una página:

/categories

que muestre las categorías disponibles.

Ejemplo:

electronics
jewelery
men's clothing
women's clothing
RF06 — Productos por categoría

Crear una ruta dinámica:

/category/[category]

Ejemplo:

/category/electronics
/category/jewelery
/category/men's%20clothing

Cada página deberá realizar su propio fetch().

RF07 — Manejo de errores

La aplicación deberá contemplar:

error de conexión;
respuesta HTTP incorrecta;
producto inexistente;
categoría inexistente. 3. Requisitos técnicos

El proyecto debe utilizar:

Tecnología Versión
Astro 7.2.x
Tailwind CSS 4.3.x
Node.js ≥ 22.12
pnpm 12.x
JavaScript ES Modules
API Fake Store API

No utilizaremos:

React;
Vue;
Svelte;
TypeScript;
Axios;
@astrojs/tailwind de Tailwind 3;
tailwind.config.js.

Esto último es importante: Tailwind 4 cambió la integración respecto a Tailwind 3. La documentación actual recomienda el plugin de Vite @tailwindcss/vite.
