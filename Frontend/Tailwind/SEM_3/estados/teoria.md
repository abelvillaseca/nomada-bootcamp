ESTADOS (Variants)

Sin variante:
<button class="bg-blue-600">Guardar</button>

Con variante:
<button class="hover:bg-blue-700">Guardar</button>

.hover\:bg-blue-700:hover{
background-color: #1d4ed8;
}

variant
condición
utilidad
estilo

- Clasificación de las variantes

- Encadenamiento de variantes

<button class="hover:bg-blue-600 focus:bg-red-600 active:scale-95">Guardar</button>

dark:md:hover:bg-red-500

1. El tema oscuro está activo
2. La pantalla es md o superior
3. El elemento está en hover
4. Entonces se aplica bg-red-500

Landing responsiva con dark mode y menú interactivo
Reúne todo lo de las Semanas 1 y 2 en una sola página: un hero responsivo, una cuadrícula de features que pase de 1 a 3 columnas, un botón que alterna modo oscuro y un menú que se abre/cierra con JS. Estética minimalista, un solo acento cyan.
