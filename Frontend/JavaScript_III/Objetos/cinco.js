// Crea un objeto cuenta bancaria que use this para manipular su propio saldo.

// Requerimientos

// Objeto cuenta con propiedad saldo en 0.
// Método depositar(monto) que sume usando this.saldo.
// Método retirar(monto) que reste, pero no permita saldo negativo.
// Método consultar() que retorne el saldo actual.

const readline = require('readline-sync');

let cuenta = {
    saldo: 0,
    depositar: function (monto) {
        this.saldo += monto;
        console.log("Depósito realizado correctamente.");
    },
    retirar: function (monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log("Retiro realizado correctamente.");
        } else {
            console.log("Fondos insuficientes, misio.");
        }
    },
    consultar: function () {
        return this.saldo;
    }
};

console.log("\n=== CUENTA BANCARIA ===");
console.log("Saldo inicial: S/ " + cuenta.consultar());

let deposito = Number(readline.question("\nIngresa el monto a depositar: "));
cuenta.depositar(deposito);
console.log("Saldo actual: S/ " + cuenta.consultar());

let retiro = Number(readline.question("\nIngresa el monto a retirar: "));
cuenta.retirar(retiro);
console.log("Saldo actual: S/ " + cuenta.consultar());