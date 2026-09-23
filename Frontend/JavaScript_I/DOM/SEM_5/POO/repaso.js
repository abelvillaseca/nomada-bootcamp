// const usuario = {
//   nombre: "Edgard",
//   edad: 33,
//   activo: true,
//   saludar() {
//     console.log(`Hola, soy ${this.nombre}`);
//   },
// };

// console.log(usuario.nombre);
// console.log(usuario.edad);

// usuario.saludar();

class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const usuario = new Usuario("Ana", 25);

// this.nombre
// usuario.nombre

class Cuenta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
  }

  retirar(cantidad) {
    this.saldo -= cantidad;
  }

  consultar() {
    console.log(`Saldo: ${this.saldo}`);
  }
}

const cuenta = new Cuenta(1000);
cuenta.depositar(500);
cuenta.consultar();
cuenta.retirar(200);
cuenta.consultar();

// Getters => permite acceder a un valor mediante una propiedad
// Setters => permite controlar la modificación de una propiedad

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  get informacion() {
    return `${this.nombre} tiene ${this.edad} años.`;
  }

  set cambiarEdad(nuevaEdad) {
    if (nuevaEdad < 0) {
      return;
    }

    this.edad = nuevaEdad;
  }
}

const persona = new Persona("Mariana", 19);

console.log(persona.informacion);
persona.cambiarEdad = 14;

console.log(persona.informacion);

class EmailService {
  enviar(destinatario, mensaje) {
    this.#conectar();
    this.#autenticar();
    this.#enviarMensaje(destinatario, mensaje);
  }

  #conectar() {
    console.log("Conectando...");
  }

  #autenticar() {
    console.log("Autenticando");
  }

  #enviarMensaje(destinatario, mensaje) {
    console.log(`Enviando a ${destinatario}: ${mensaje}`);
  }
}

const email = new EmailService();

email.enviar("usuario@gmail.com", "Hola, cómo estás");

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  comer() {
    console.log(`${this.nombre} está comiendo`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
  ladrar() {
    console.log("Guau");
  }
}

const perro = new Perro("Lyon");

perro.comer();
perro.ladrar();

const perro2 = new Perro("Max", "Labrador");

perro.nombre;
perro.raza;

class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Matematica.sumar(10, 20));

const matematica = new Matematica();

matematica.sumar(10, 20);

// PROTOTIPOS
// CLASS y los prototipos
// prototype chain
// duck typing

// OBJETOS:
//   - Propiedades
//   - Métodos

// CLASES:
//   - Constructor
//   - Propiedades
//   - Métodos

// INSTANCIAS:
//   - new

// this

// 4 PILARES:
//   - Encapsulación
//   - Abstracción
//   - Herencia
//   - Polimorfismo

// PROTOTIPOS
//   - prototype
//   - _proto_ (evitar usarlo directamente)
//   - Prototype chain

// MODIFICADORES / CARACTERÍSTICAS
//  - public
//  - #
//  - get
//  - set
//  - static

// RELACIONES
//   - is-a => herencia
//   - has-a => composición

// DISEÑO
//   - SOLID
//   - Cohesión
//   - Acomplamiento
//   - composición
//   - Patrones de diseño
