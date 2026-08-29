## FRONTMATTER / SCRIPT (CEREBRO)

## build/servidor

---

<script src="main.js"></script>

LAS LLAVES EN ASTRO
{} => insertar una expresión: sumas, condiciones, funciones
OJO: no pongas if/for
${} => template literal

renderizado condicional

false && "Hola" => false

% Debes construir una página de productos utilizando Astro 7.2 y Tailwind CSS 4.3.

% La página debe mostrar una colección de productos mediante tarjetas dinámicas.

% Cada producto tendrá la siguiente información:

% nombre
% descripcion
% precio
% categoria
% imagen
% disponible
% destacado

% La información estará almacenada en un arreglo de objetos dentro del frontmatter de la página.

% La página deberá recorrer el arreglo utilizando .map() y generar una tarjeta reutilizable mediante un componente llamado ProductCard.astro.

% Cada tarjeta deberá:

% Mostrar la imagen del producto.
% Mostrar su categoría.
% Mostrar su nombre.
% Mostrar su descripción.
% Mostrar su precio.
% Mostrar un indicador "Disponible" únicamente cuando el producto esté disponible.
% Mostrar una etiqueta "Destacado" únicamente cuando el producto tenga destacado: true.
% Recibir la información mediante Astro.props.

% Además, la interfaz deberá:

% utilizar Tailwind CSS 4.3;
% ser responsive;
% tener un diseño minimalista;
% utilizar bordes sutiles;
% utilizar sombras muy suaves;
% tener bastante espacio en blanco;
% utilizar tipografía limpia;
% utilizar rounded moderados;
% tener efectos hover discretos;
% evitar colores excesivamente llamativos.

% El resultado debe parecer una pequeña sección de productos de una página web premium.

Astro.props

<ProductCard producto={producto}>
