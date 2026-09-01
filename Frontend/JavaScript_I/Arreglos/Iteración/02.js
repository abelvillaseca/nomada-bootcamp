// Una empresa quiere desarrollar un pequeño sistema para analizar el desempeño de sus empleados durante un trimestre.

// Se dispone del siguiente arreglo:

const empleados = [
    {
        nombre: 'Ana',
        departamento: 'Desarrollo',
        proyectos: 5,
        completados: 5,
        horas: 160,
        salario: 3200,
    },
    {
        nombre: 'Luis',
        departamento: 'Diseño',
        proyectos: 6,
        completados: 4,
        horas: 175,
        salario: 2800,
    },
    {
        nombre: 'María',
        departamento: 'Desarrollo',
        proyectos: 8,
        completados: 7,
        horas: 180,
        salario: 4000,
    },
    {
        nombre: 'Carlos',
        departamento: 'Marketing',
        proyectos: 4,
        completados: 3,
        horas: 150,
        salario: 2500,
    },
    {
        nombre: 'Sofía',
        departamento: 'Desarrollo',
        proyectos: 7,
        completados: 7,
        horas: 165,
        salario: 3800,
    },
    {
        nombre: 'Pedro',
        departamento: 'Marketing',
        proyectos: 9,
        completados: 6,
        horas: 190,
        salario: 3000,
    },
]

// El programa debe realizar un análisis completo.

// Requisitos

// 8. Encontrar la posición de "Sofía".
// 9. Determinar si existe algún empleado que haya completado todos sus proyectos.
// 10. Determinar si todos los empleados han trabajado al menos 150 horas.
// 11. Calcular el total de horas trabajadas.
// 12. Calcular el salario promedio.
// 13. Determinar quién es el empleado con mayor cantidad de proyectos completados.
// 14. Calcular cuántas horas trabajaron en total los empleados del departamento de Desarrollo (encadenamiento).
// 15. Mostrar un resumen final.

// 1. Mostrar un reporte de cada empleado.
const calcularPorcentaje = (empleado) => {
    return (empleado.completados / empleado.proyectos) * 100
}

const obtenerClasificacion = (porcentaje) => {
    if (porcentaje >= 90) {
        return 'Excelente'
    }

    if (porcentaje >= 70) {
        return 'Bueno'
    }

    return 'Regular'
}

console.log(`=== REPORTE DE EMPLEADOS ===`)

empleados.forEach((empleado, indice) => {
    const porcentaje = calcularPorcentaje(empleado)
    const clasificacion = obtenerClasificacion(porcentaje)

    console.log(
        `${indice + 1}. ${empleado.nombre} | ` +
            `${empleado.departamento} | ` +
            `Proyectos: ${empleado.completados}/${empleado.proyectos} | ` +
            `Cumplimiento: ${porcentaje.toFixed(2)}% | ` +
            `Clasificación: ${clasificacion}`
    )
})

// 2. Calcular el porcentaje de proyectos completados de cada empleado.
const evaluaciones = empleados.map((empleado) => {
    const porcentaje = calcularPorcentaje(empleado)
    const clasificacion = obtenerClasificacion(porcentaje)
    return {
        nombre: empleado.nombre,
        departamento: empleado.departamento,
        porcentaje: porcentaje,
        clasificacion: clasificacion,
    }
})

console.log(`=== EVALUACIONES ===`)
console.log(evaluaciones)

// 3. Clasificar a cada empleado:
//  - "Excelente" → 90% o más.
//  - "Bueno" → entre 70% y 89%.
//  - "Regular" → menos de 70%.

const empleadosExcelentes = evaluaciones.filter((empleado) => {
    return empleado.clasificacion === 'Excelente'
})

console.log(`=== EMPLEADOS EXCELENTES ===`)
console.log(empleadosExcelentes)

// 6. Obtener los empleados del departamento "Desarrollo" que además tengan al menos 7 proyectos.
const desarrolladoresConMuchosProyectos = empleados.filter((empleado) => {
    return empleado.departamento === 'Desarrollo' && empleado.proyectos >= 7
})

console.log(`=== DESARROLLO CON 7+ PROYECTOS ===`)
console.log(desarrolladoresConMuchosProyectos)

// 7. Encontrar al primer empleado que tenga más de 180 horas trabajadas.
