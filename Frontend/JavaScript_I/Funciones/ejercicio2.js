// Crea una expresión de función asignada a una constante llamada estaEnRango. La función debe aceptar tres números:
// un valor a verificar, un límite inferior y un límite superior. Debe devolver true si el valor está dentro del rango
// (incluyendo los límites) y false en caso contrario.

const estaEnRango = function (valor, limiteInferior, limiteSuperior) {
    return valor >= limiteInferior && valor <= limiteSuperior
}

console.log(estaEnRango(50, 1, 100)) // true
console.log(estaEnRango(1, 1, 100)) // true
console.log(estaEnRango(150, 1, 100)) // false
