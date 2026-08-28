// Ejercicio: Sistema de reservas de un teatro

// 1. Enunciado

// Un pequeño teatro necesita administrar las reservas de una función.

// Inicialmente existen las siguientes reservas:

// const reservasIniciales = [
//     "Ana",
//     "Carlos",
//     "María",
//     "Jorge",
//     "Lucía",
//     "Pedro"
// ];

// Durante el proceso de organización ocurren los siguientes eventos:

// Paso 1 — Nuevas reservas

// Llegan dos personas y deben agregarse al final de la lista:

// "Sofía"
// "Ricardo"

// Paso 2 — Reserva VIP

// Una persona con una reserva VIP debe ser colocada al principio:

// "Valentina - VIP"

// Paso 3 — Cancelación

// La última persona registrada cancela su reserva.

// Debes almacenar el nombre eliminado para mostrar un mensaje.

// Paso 4 — Ingreso al teatro

// La primera persona de la lista ingresa al teatro.

// Mostrar quién ingresó.

// Paso 5 — Capacidad actual

// Mostrar cuántas reservas permanecen utilizando length.

// Paso 6 — Vista de recepción

// El personal de recepción solamente necesita visualizar las primeras cuatro reservas.

// Crear una nueva lista.

// No se debe modificar la lista original.

// Paso 7 — Cambio de reserva

// Jorge solicita cambiar su reserva.

// En lugar de una sola reserva:

// Jorge

// ahora tendrá dos registros:

// Jorge - Fila A
// Jorge - Fila B

// Buscar primero la posición de "Jorge" y posteriormente reemplazarlo.

// Mostrar qué elemento fue eliminado.

// Paso 8 — Reservas de otra sala

// Existe una segunda sala con:

// [
//     "Elena",
//     "Miguel",
//     "Daniel"
// ]

// Combinar ambas listas.

// Paso 9 — Comprobación de reservas

// Comprobar si "Carlos" tiene una reserva.

// Después determinar en qué posición se encuentra.

// También comprobar si "Fernando" tiene una reserva.

// Paso 10 — Generar reporte

// Convertir la lista final en un texto utilizando.

// El resultado debe ser similar a:

// Carlos | María | Jorge - Fila A | Jorge - Fila B | ...
// 2. Funciones requeridas

// El programa debe incluir tres tipos diferentes de funciones.

// Función declarada

// Crear:

// mostrarResumen(reservas)

// Debe mostrar:

// Número de reservas.
// Primera reserva.
// Última reserva.
// Función expresión

// Crear:

// obtenerReservasIniciales = function(reservas) {}

// Debe recibir una lista y devolver las primeras tres reservas.

// Función flecha

// Crear:

// reservaExiste = (reservas, nombre) => {}

// Debe devolver true o false.
