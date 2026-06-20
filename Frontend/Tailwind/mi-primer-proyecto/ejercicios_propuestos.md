TARJETA DE AVISO

Crea un card que represente un aviso informativo: fondo muy claro, padding, esquinas redondeadas,
un texto principal y uno secundario. Agrega un botón con esquinas redondeadas y que cambie el cursor
al pasar por él.

.algo {
    padding: 13px;
}

/* 0.25 rem (4px) */

/* p-1 => 4px 
   p-2 => 8px
   p-4 => 16px
   p-6 => 24px
*/

padding, margin y gap

PADDING:
p-4 => TODOS LOS LADOS 
px-4 => HORIZONTAL
py-4 => VERTICAL
pt-4 => ARRIBA
pr-4 => DERECHA
pb-4 => ABAJO
pl-4 => IZQUIERDA

MARGIN: UTILIZAMOS LOS MISMOS SUFIJOS
mx-auto => centrar horizontalmente un bloque con ancho.

GAP: SEPARA LOS HIJOS DE UN CONTENEDOR FLEX O GRID

TAMAÑO, PESO Y ESPACIADO DE TEXTO

TAMAÑO
text-sm
lg
xl
2xl
3xl...

GROSOR
font-normal
medium
semibold
bold...

INTERLINEADO
leading-tight
normal
relaxed

ESPACIADO ENTRE LETRAS
tracking-tight
wide

ALINEACIÓN
text-left
center
right

TAILWIND => OKLCH
CSS => RGB y HEX

bg-cyan-600

USA:
50-200 => PARA FONDOS
400-600 => PARA ACENTUAR
700-900 => PARA TEXTO

EJERCICIO:

Reproduce una "estadística" de un dashboard

Crea un bloque que muestre una métrica: una etiqueta pequeña en gris arriba
(usuarios activos), un número grande debajo y a su lado una variación
pequeña en cyan. Solo utiliza utilidades. Cuida la jerarquía y el espaciado de
la escala.