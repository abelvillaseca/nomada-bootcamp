const contieneCaracter = function (texto, caracter) {
    const textoMinusculas = texto.toLowerCase() // "javascript"
    const caracterMinusculas = caracter.toLowerCase() // a
    return textoMinusculas.includes(caracterMinusculas)
}

const resultado1 = contieneCaracter('JavaScript', 'a') // A
console.log(resultado1)
