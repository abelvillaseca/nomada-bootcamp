// Crea una función llamada obtenerDatoAleatorio que retorne una promesa. Dentro de la promesa, utiliza setTimeout para simular una operación asíncrona que tarda 1.5 segundos. Después del retraso, genera un número aleatorio entre 1 y 10. Si el número es mayor a 5, resuelve la promesa con el número. Si el número es menor o igual a 5, rechaza la promesa con el mensaje "Número muy bajo".

function obtenerDatoAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 10) + 1;
      console.log("Número generado: ", numero);

      if (numero > 5) {
        resolve(numero);
      } else {
        reject("Número muy bajo");
      }
    }, 1500);
  });
}

obtenerDatoAleatorio()
  .then((numero) => {
    console.log("Promesa resuelta: ", numero);
  })
  .catch((error) => {
    console.log("Promesa rechazada: ", error);
  });
