10 > 5 // true
10 < 5 // false

const resultado = 10 > 5 // true

// Una condición produce un booleano

// OPERADORES DE COMPARACIÓN: >, <, >=, <=, ==, ===, !=, !==

// = Asignación
// == Igualdad (compara valores) => igualdad abstracta
console.log(18 == '18') // true;
// === Igualdad estricta (compara valores y tipos de datos)
console.log(18 === '18') // false;

// != Desigualdad (compara valores) => desigualdad abstracta
console.log(18 != '18') // false;

// !== Desigualdad estricta (compara valores y tipos de datos)
console.log(18 !== '18') // true;

// OPERADORES LÓGICOS: &&, ||, !

// const activo = true
// conslole.log(!activo) // false

// console.log(!!'Hola') // true
// console.log(!!0) // false

// PRECEDENCIA DE OPERADORES
// const resultado = true || (false && false)

const usuarioActivo = false

if (usuarioActivo) {
    console.log('Bienvenido a la plataforma')
} else {
    console.log('Tu cuenta está desactivada')
}

const nombre = ''

if (nombre) {
    console.log('El nombre fue proporcionado')
} else {
    console.log('No existe un nombre')
}

// OPERADOR TERNARIO

// condicion ? valorTrue : valorFalse

const edad = 11
const mensaje = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad'
console.log(mensaje)

// SWTICH
const dia = 3

switch (dia) {
    case 1:
        console.log('lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miércoles')
        break
    default:
        console.log('Día no válido')
}
