function calcularPrecioFinal(precioBase) {
  let IGV = precioBase * 0.18
  let precioFinal = precioBase + IGV
  return {
    IGV: IGV,
    precioFinal: precioFinal,
  }
}

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
