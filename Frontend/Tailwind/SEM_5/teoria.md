FLEXBOX Y GRID CON UTILIDADES

- FLEXBOX => Organiza elementos en una dirección (una fila o una columna) => barra de navegación, listas y agrupar cosas
- GRID => Organiza elementos en dos dimensiones (filas y columnas a la vez) => layouts, cuadrículas, catálogo

justify-start / center / between / end / around => reparte los elementos en el eje principal
items-start / center / stretch => alinean en el eje cruzado

flex-1 => crece y ocupa todo el espacio disponible
flex-none => mantiene su tamaño y no se encoge
flex-wrap => permite que los hijos salten de línea si no caben

GRID => grid

grid grid-cols-3
col-span-2

Una galería de tarjetas

Crea una cuadrícula de 3 columnas con 6 tarjetas iguales (fondo blanco, borde sutil, esquinas redondeadas, algo de altura). Sepáralas con gap. Luego haz que la primera tarjeta ocupe 2 columnas. Mantén la estética minimalista de siempre.

Mobile-first => da prioridad a los tamaños en móvil

breakpoints:

sm (40rem)
md (48rem)
lg (64rem)
xl (80rem)
2xl (96rem)

md:flex
max-md:hidden

Container queries

@container
@sm:
@md:
@lg: