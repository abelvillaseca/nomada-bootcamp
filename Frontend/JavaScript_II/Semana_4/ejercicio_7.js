// Crea una lista de invitados (let invitados = ["Ana", "Luis", "Maria", "Juan", "Sofia", "Carlos"];).
// Alugnos invitados llegan temprano (usa slice( ) para obtener los primeros 3)
// Juan no puede venir, hay que quitarlo y en su lugar añadir a “Elena” y “Pedro” (usa splice ( ))
// Solo queremos quedarnos con los 4 primeros invitados de la nueva lista (usa splice( ) para eliminar del 4to en adelante)
// Ejecuta y analiza cómo slice no cambia el original y cómo splice lo modifica y devuelve los elementos eliminados.

let invitados = ["Ana", "Luis", "Maria", "Juan", "Sofia", "Carlos"];

function administrarInvitados() {
    console.log("Lista original de invitados:", invitados);

    let invitadosTemprano = invitados.slice(0, 3);
    console.log("\nInvitados que llegan temprano (slice):", invitadosTemprano);
    console.log("Lista de invitados después de slice (sin cambios):", invitados);

    let eliminados = invitados.splice(3, 1, "Elena", "Pedro");
    console.log("\nInvitado eliminado (splice):", eliminados);
    console.log("Lista de invitados después de splice (modificada):", invitados);

    let eliminadosFinales = invitados.splice(4);
    console.log("\nInvitados eliminados para quedarse con los 4 primeros (splice):", eliminadosFinales);
    console.log("Lista final de invitados:", invitados);
}

administrarInvitados();