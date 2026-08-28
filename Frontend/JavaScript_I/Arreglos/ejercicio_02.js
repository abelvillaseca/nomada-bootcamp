// Ejercicio: Gestor de lista de reproducción
// Objetivo

// Construir un pequeño sistema que permita administrar una lista de reproducción utilizando métodos de arreglos y
// diferentes tipos de funciones.

// El programa deberá permitir:

// Crear una lista de canciones.
// Agregar canciones nuevas al final.
// Agregar una canción destacada al principio.
// Eliminar la última canción agregada.
// Reproducir y retirar la primera canción.
// Consultar la cantidad de canciones.
// Crear una vista previa de determinadas canciones sin modificar la lista.
// Reemplazar canciones dentro de la lista.
// Crear una segunda lista y combinarla.
// Buscar canciones.
// Generar un texto con toda la playlist.
// Crear funciones declaradas, expresiones de función y funciones flecha.
// Crear una función que analice la playlist.

// La dificultad está en que cada función tendrá una responsabilidad concreta y el alumno deberá decidir qué método utilizar.

// 1. Enunciado

// Una aplicación de música necesita administrar una lista de reproducción.

// Al iniciar, la playlist contiene:

// [
//     "Blinding Lights",
//     "Save Your Tears",
//     "As It Was",
//     "Levitating",
//     "Stay"
// ]

// Durante la ejecución ocurren los siguientes eventos.

// Parte 1 — Nuevas canciones

// Llegan dos canciones nuevas:

// "Starboy"
// "Die For You"

// Deben agregarse al final.

// Después, un usuario solicita reproducir inmediatamente:

// "Popular"

// Esta canción debe colocarse al principio.

// Parte 2 — Eliminación

// El administrador detecta que la última canción agregada fue incorrecta.

// Debe eliminarse y mostrar cuál fue la canción eliminada.

// Después comienza la reproducción.

// La primera canción de la playlist debe retirarse.

// Mostrar qué canción comenzó a reproducirse.

// Parte 3 — Información de la playlist

// Mostrar:

// Cantidad actual de canciones.
// Primera canción.
// Última canción.

// Parte 4 — Vista previa

// La aplicación tiene una función de "vista previa" que muestra únicamente las canciones que ocupan las posiciones 2, 3 y 4.

// La playlist original no debe modificarse.

// Parte 5 — Edición

// El administrador descubre que:

// "Levitating"

// será reemplazada por:

// "Don't Start Now"
// "New Rules"

// Mostrar las canciones eliminadas.

// Parte 6 — Playlist recomendada

// El sistema tiene otra lista:

// [
//     "One Dance",
//     "Passionfruit",
//     "God's Plan"
// ]

// Combinar ambas listas.

// La nueva lista debe almacenarse en:

// playlistFinal
// Parte 7 — Búsquedas

// Comprobar si:

// "Starboy"

// se encuentra en playlistFinal.

// Después buscar la posición de:

// "New Rules"

// Finalmente buscar:

// "Shape of You"

// y determinar si existe o no.

// Parte 8 — Reporte

// Crear un string con todas las canciones.

// El resultado debería parecerse a:

// Save Your Tears → As It Was → Don't Start Now → ...
