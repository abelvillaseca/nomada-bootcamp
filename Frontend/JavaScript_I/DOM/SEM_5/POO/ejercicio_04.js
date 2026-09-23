// Crea una clase ConversorMoneda con un método estático que convierta dólares a euros.

class ConversorMoneda {
  static dolaresAEuros(dolares) {
    const tipoCambio = 0.85;
    const euros = dolares * tipoCambio;
    return euros;
  }
}

const resultado = ConversorMoneda.dolaresAEuros(100);

console.log(`100 dólares equivalen a: ${resultado} euros`);
