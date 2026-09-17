// Crea una función asíncrona llamada simularOperacion que reciba un valor booleano como argumento. Si el valor es true, la función debe simular una operación exitosa con setTimeout y resolver una promesa con el mensaje “Operación exitosa”. Si el valor es false, la función debe simular un error con setTimeout y lanzar un error con el mensaje “Operación fallida”. Llama a la función con ambos valores y muestra los resultados en la consola.

async function simularOperacion(exito) {
  // PENDIENTE, RESOLVE, REJECT
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("Operación exitosa");
      } else {
        reject("Operación fallida");
      }
    }, 1500);
  });
}

async function ejecutar() {
  try {
    const resultado = await simularOperacion(true);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }

  try {
    const resultado = await simularOperacion(false);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

ejecutar();
