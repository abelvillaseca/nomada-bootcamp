// Crea una función (puedes elegir declaración o flecha) llamada formatearNombre que reciba un nombre completo como un string.
// Debe devolver el nombre con la primera letra de cada palabra en mayúscula y el resto en minúscula (excepto artículos o
// preposiciones cortas si quieres complicarlo, pero para empezar, solo capitaliza cada palabra).
// Ejemplo: "jUan pERez gONzalez" -> "Juan Perez Gonzalez".

// map()
// toLowerCase()
// toUpperCase()
// join()

function formatearNombre(nombreCompleto) {
    // jUan pERez gONzalez
    const nombreLimpio = nombreCompleto.trim()
    const palabras = nombreLimpio.split(' ') // ["jUan", "pERez", "gONzalez"]
}
