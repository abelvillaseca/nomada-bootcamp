// FUNCIÓN DECLARADA
// function calcularPrecioFinal(precioBase) {
//   let IGV = precioBase * 0.18
//   let precioFinal = precioBase + IGV
//   return {
//     IGV: IGV,
//     precioFinal: precioFinal,
//   }
// }

// FUNCIÓN EXPRESADA
// const calcularPrecioFinal = function (precioBase) {
//   let IGV = precioBase * 0.18
//   let precioFinal = precioBase + IGV
//   return {
//     IGV: IGV,
//     precioFinal: precioFinal,
//   }
// }

// FUNCIÓN FLECHA
// const calcularPrecioFinal = (precioBase) => {
//   let IGV = precioBase * 0.18
//   let precioFinal = precioBase + IGV
//   return {
//     IGV: IGV,
//     precioFinal: precioFinal,
//   }
// }

// FUNCIÓN FLECHA SIMPLIFICADA
// RETORNO IMPLÍCITO
// const calcularPrecioFinal = (precioBase) => ({
//   IGV: precioBase * 0.18,
//   precioFinal: precioBase + IGV,
// })

const calcularPrecioFinal = (precioBase) => {
  let IGV = precioBase * 0.18
  let precioFinal = precioBase + IGV
  return precioFinal
}

let total1 = calcularPrecioFinal(100)
let total2 = calcularPrecioFinal(250)
let total3 = calcularPrecioFinal(50)

console.log(`Precio final 1: ${total1.toFixed(2)}`)
console.log(`Precio final 2: ${total2.toFixed(2)}`)
console.log(`Precio final 3: ${total3.toFixed(2)}`)

let sumaTotal = total1 + total2 + total3

console.log(`Suma total: ${sumaTotal.toFixed(2)}`)

function procesar() {
  let precioBase = parseFloat(document.getElementById('precioBase').value)

  if (isNaN(precioBase) || precioBase <= 0) {
    alert('Por favor, ingrese un precio base válido (número positivo).')
    return
  }

  let resultado = calcularPrecioFinal(precioBase)

  document.getElementById('resultado').innerHTML = `
    Precio Base: <span>S/. ${precioBase.toFixed(2)}</span><br>
    IGV (18%): <span>S/. ${resultado.IGV.toFixed(2)}</span><br>
    Precio Final: <span>S/. ${resultado.precioFinal.toFixed(2)}</span>
  `
}
