// Crea una función llamada verificarNumero que reciba un número como argumento. La función debe retornar una promesa. Si el número es par, la promesa debe resolverse con el mensaje “Número par”. Si el número es impar, la promesa debe rechazarse con el mensaje “Número impar”.

function verificarNumero(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve("Número par");
    } else {
      reject("Número impar");
    }
  });
}

verificarNumero(8)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

// then(), catch()

// async function verificarNumero2(numero) {
//   return new Promise((resolve, reject) => {
//     if (numero % 2 === 0) {
//       resolve("Número par");
//     } else {
//       reject("Número impar");
//     }
//   });
// }

// async function ejecutar() {
//   try {
//     const resultado = await verificarNumero2(19);
//     console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ejecutar();
