// Una organización realizó un torneo de videojuegos y necesita analizar los resultados de los participantes.

// Tenemos un arreglo con los jugadores y sus estadísticas:

const jugadores = [
    {
        nombre: 'Alex',
        partidas: 12,
        victorias: 9,
        puntos: 270,
    },
    {
        nombre: 'Brenda',
        partidas: 10,
        victorias: 6,
        puntos: 180,
    },
    {
        nombre: 'Carlos',
        partidas: 15,
        victorias: 11,
        puntos: 330,
    },
    {
        nombre: 'Diana',
        partidas: 8,
        victorias: 3,
        puntos: 90,
    },
    {
        nombre: 'Eduardo',
        partidas: 14,
        victorias: 10,
        puntos: 300,
    },
]

// El programa debe realizar las siguientes operaciones:

const calcularPorcentajeVictorias = (jugador) => {
    return (jugador.victorias / jugador.partidas) * 100
}

// Mostrar un reporte de cada jugador.
console.log(`=== REPORTE DE JUGADORES ===`)

jugadores.forEach((jugador, index) => {
    const porcentaje = calcularPorcentajeVictorias(jugador)
    console.log(
        `${index + 1}. ${jugador.nombre} | ` +
            `Partidas: ${jugador.partidas} | ` +
            `Victorias: ${jugador.victorias} | ` +
            `Porcentaje: ${porcentaje.toFixed(2)}% | ` +
            `Puntos: ${jugador.puntos}`
    )
})

// Crear un nuevo arreglo con los nombres de los jugadores.
const nombres = jugadores.map((jugador) => {
    return jugador.nombre
})

console.log(`=== NOMBRES DE JUGADORES ===`)
console.log(nombres)

// Obtener los jugadores que consiguieron al menos 8 victorias.
const jugadoresDestacados = jugadores.filter((jugador) => {
    return jugador.victorias >= 8
})

console.log(`=== JUGADORES CON MÁS DE 8 VICTORIAS ===`)
console.log(jugadoresDestacados)

// Encontrar al primer jugador que consiguió más de 300 puntos.
const primerJugador = jugadores.find((jugador) => {
    return jugador.puntos > 300
})

console.log(`=== JUGADOR CON MÁS DE 300 PUNTOS ===`)
console.log(primerJugador)

// Encontrar la posición de "Diana".
const posicionDiana = jugadores.findIndex((jugador) => {
    return jugador.nombre === 'Diana'
})

console.log(`=== POSICIÓN DIANA ===`)
console.log(posicionDiana)

// Determinar si existe algún jugador que haya ganado más del 80% de sus partidas .
const existeJugadorCon80PorCiento = jugadores.some((jugador) => {
    const porcentaje = calcularPorcentajeVictorias(jugador)
    return porcentaje > 80
})

console.log(`=== ¿ALGÚN JUGADOR SUPERA EL 80%? ===`)
console.log(existeJugadorCon80PorCiento)

// Determinar si todos los jugadores tienen al menos 3 victorias.
const todosTiene3Victorias = jugadores.every((jugador) => {
    return jugador.victorias >= 3
})

console.log(`=== ¿TODOS TIENEN AL MENOS 3 VICTORIAS? ===`)
console.log(todosTiene3Victorias)

// Calcular la cantidad total de partidas disputadas entre todos los jugadores.
const totalPartidas = jugadores.reduce((total, jugador) => {
    return total + jugador.partidas
}, 0)

console.log(`=== TOTAL DE PARTIDAS ===`)
console.log(totalPartidas)

// Calcular el total de puntos obtenidos por todos los jugadores.
const totalPuntos = jugadores.reduce((total, jugador) => {
    return total + jugador.puntos
}, 0)

console.log(`=== TOTAL DE PUNTOS ===`)
console.log(totalPuntos)

// Mostrar un resumen final.
const mejorJugador = jugadores.reduce((mejor, jugador) => {
    if (jugador.puntos > mejor.puntos) {
        return jugador
    }
    return mejor
}, jugadores[0])

console.log(`=== MEJOR JUGADOR ===`)
console.log(mejorJugador)

console.log(`=== RESUMEN FINAL ===`)

console.log(`Cantidad de jugadores: ${jugadores.length}`)
console.log(`Jugadores: ${nombres.join(', ')}`)
console.log(`Total de partidas: ${totalPartidas}`)
console.log(`Total de puntos: ${totalPuntos}`)
console.log(`Posición Diana: ${posicionDiana}`)
console.log(`¿Alguno supera el 80%?: ${existeJugadorCon80PorCiento}`)
console.log(`¿Todos tienen al menos 3 victorias?: ${todosTiene3Victorias}`)
console.log(`Mejor jugador: ${mejorJugador.nombre}` + `(${mejorJugador.puntos} puntos)`)
