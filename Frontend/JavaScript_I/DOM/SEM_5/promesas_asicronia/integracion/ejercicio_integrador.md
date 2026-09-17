# Ejercicio integrador: Centro de control de expediciones

## 1. Enunciado

Una organización científica necesita un pequeño Centro de Control de Expediciones para administrar investigadores que participan en diferentes expediciones.

La aplicación debe obtener información desde JSONPlaceholder y combinarla con datos locales.

### Objetivo

Construir una aplicación web que permita:

- Consultar varios investigadores desde una API.
- Obtener las publicaciones asociadas a cada investigador.
- Mostrar la información en el DOM.
- Buscar investigadores.
- Filtrar investigadores según la cantidad de reportes.
- Seleccionar un investigador.
- Agregar investigadores a una lista de seguimiento.
- Eliminar investigadores de esa lista.
- Calcular estadísticas generales.
- Manejar operaciones asíncronas y errores.

## 2. Requisitos funcionales

La aplicación debe cumplir los siguientes requisitos.

### Requisito 1 — Datos iniciales

Utilizar el siguiente arreglo:

const idsInvestigadores = [1, 2, 3, 4, 5];

Cada ID representa un investigador de JSONPlaceholder.

Para cada investigador se debe realizar una petición:

https://jsonplaceholder.typicode.com/users/{id}

y otra para obtener sus reportes:

https://jsonplaceholder.typicode.com/posts?userId={id}

Las peticiones de todos los investigadores deben ejecutarse utilizando:

Promise.all()

### Requisito 2 — Construir objetos

Por cada investigador se debe crear un objeto con una estructura similar a:

{
id: 1,
nombre: "Leanne Graham",
email: "Sincere@april.biz",
ciudad: "Gwenborough",
reportes: 10,
activo: true
}

El objeto debe almacenarse en un array.

### Requisito 3 — Mostrar investigadores

Los investigadores deben mostrarse dinámicamente en el HTML.

Cada tarjeta debe mostrar:

- Nombre.
- Email.
- Ciudad.
- Cantidad de reportes.
- Estado.

### Requisito 4 — Buscador

Agregar un 'input' para buscar investigadores.

- La búsqueda debe realizarse en tiempo real mediante:

input

- Debe utilizarse:

filter()

La búsqueda debe ignorar mayúsculas y minúsculas.

### Requisito 5 — Selección

Cada tarjeta debe tener un botón:

Seleccionar

Al hacer clic:

- El investigador pasa a ser el investigador seleccionado.
- Se debe utilizar findIndex() para localizarlo.
- Se debe modificar su propiedad activo.

### Requisito 6 — Lista de seguimiento

Debe existir una sección denominada:

Investigadores en seguimiento

El usuario podrá agregar investigadores a esta lista.

- Para evitar duplicados debe utilizarse:

includes()

o una comprobación equivalente.

- Al agregar un investigador:

push()

debe utilizarse para incorporarlo.

- Al eliminarlo:

splice()

debe utilizarse para eliminarlo.

### Requisito 7 — Cola de expediciones

Crear una cola de expediciones utilizando:

unshift()
shift()

Por ejemplo:

Expedición Amazonas
Expedición Andes
Expedición Pacífico

El usuario podrá:

- Agregar una expedición al comienzo de la cola.
- Procesar la primera expedición.

### Requisito 8 — Historial

Crear un historial de expediciones procesadas.

- Cuando una expedición sea procesada debe agregarse al historial utilizando:

push()

- Debe existir también un botón para eliminar la última expedición del historial utilizando:

pop()

### Requisito 9 — Estadísticas

La aplicación debe calcular:

- Cantidad total de investigadores.
- Cantidad total de reportes.
- Promedio de reportes.
- Cantidad de investigadores con más de 5 reportes.
- Si todos los investigadores están activos.
- Si existe al menos un investigador con más de 8 reportes.

Para ello deben utilizarse:

reduce()
filter()
every()
some()

### Requisito 10 — Información adicional

Utilizar:

slice()

para mostrar solamente los primeros 3 investigadores.

Utilizar:

join()

para mostrar una lista textual de las ciudades.

Utilizar:

concat()

para combinar dos listas de expediciones.

Utilizar:

indexOf()

para localizar una expedición concreta.

### Requisito 11 — Manejo de errores

Todas las operaciones relacionadas con la API deben manejar errores mediante:

try {
// ...
} catch (error) {
// ...
}

Además, debe comprobarse:

response.ok

antes de procesar la respuesta.
