// Crea una función flecha llamada calcularIMC que reciba dos argumentos: peso en kilogramos y altura en metros.
// Debe devolver el Índice de Masa Corporal (IMC), calculado como IMC=peso/altura al cuadrado. Asegúrate de devolver
// el resultado redondeado a dos decimales.

// peso = 70
// altura = 1.75
// IMC = 70 / (1.75 * 1.75)
// IMC = 22.85...

const calcularIMC = (peso, altura) => {
    const imc = peso / Math.pow(altura, 2)
    return Number(imc.toFixed(2))
}

const formulario = document.querySelector('#imcForm')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')
const valorIMC = document.querySelector('#valorIMC')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (peso <= 0 || altura <= 0) {
        valorIMC.textContent = 'Datos inválidos'
        return
    }

    const resultado = calcularIMC(peso, altura)

    valorIMC.textContent = resultado
})
