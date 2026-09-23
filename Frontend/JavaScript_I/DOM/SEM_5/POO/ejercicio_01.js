// Crea una clase abstracta Vehiculo con un método arrancar(). Luego, crea dos clases Coche y Moto que implementen este método.

class Vehiculo {
  constructor() {
    if (new.target === Vehiculo) {
      throw new Error(
        "Vehículo es una clase abstracta y no puede ser instanciada directamente",
      );
    }
  }

  arrancar() {
    throw new Error(
      "El método arrancar() debe ser implementado por la clase hija",
    );
  }
}

class Coche extends Vehiculo {
  arrancar() {
    console.log("El coche arranca.");
  }
}

class Moto extends Vehiculo {
  arrancar() {
    console.log("La moto arranca.");
  }
}

const coche = new Coche();
const moto = new Moto();

coche.arrancar();
moto.arrancar();
