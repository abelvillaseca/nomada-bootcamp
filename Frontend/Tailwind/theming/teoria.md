Design Token:

color: gray;
background: gray;
border-color: gray;

======================
azul principal
espaciado grande
fuente principal

primary color => #2563eb
primary font
large radius

======================
@theme { => DIRECTIVA
--color-primary: #2563eb;
--primary: red; => MAL
}

<h1 class="text-primary">Hola mundo</h1>

<!-- El tema de tu propia marca
Define en @theme un tema completo con: un color principal y uno secundario, una familia tipográfica y un radio de esquina propio. Luego construye una tarjeta que use solo tus tokens (nada de colores de fábrica). Mantén la estética minimalista. -->

@theme {
--color-primary
// bg-primary
// text-
// border-
// outline-
// fill-
// stroke-
--spacing-128: 32rem;
} => CSS At-Rule

CSS:
@media{

}

@supports{

}

@keyframes{

}

-- => Indica que es una CUSTOM PROPERTY
namespace => lo que TAILWIND reconoce
nombre del token => puede llevar cualquier nombre

p-128
m-
gap-
w-
h-

@theme {
--color-primary: #2563eb;
<!-- --color-primary: oklch(62% 0.19 256); -->
--font-primary: Inter;
--spacing-primary: 4rem;
}

NAMESPACE === PREFIJO

--pizza-grande: 200px

width: var(--pizza-grande)

<div class="w-pizza-grande"></div>
