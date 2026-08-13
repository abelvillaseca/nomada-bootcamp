const nombre = prompt('Ingrese su nombre:')

const nota1 = Number(prompt('Ingrese la primera nota:'))
const nota2 = Number(prompt('Ingrese la segunda nota:'))
const nota3 = Number(prompt('Ingrese la tercera nota:'))
const nota4 = Number(prompt('Ingrese la cuarta nota:'))

const promedio = (nota1 + nota2 + nota3 + nota4) / 4

if (promedio >= 13) {
    alert(`Felicidades ${nombre}, su promedio es ${promedio} y ha aprobado el curso.`)
} else {
    alert(`Lo siento ${nombre}, su promedio es ${promedio} y ha reprobado el curso.`)
}
