EVENTOS:
- Evento: es una señal que emite el navegador cuando sucede algo: un clic, presión de una tecla, una carga, envío de formulario, etc.
- Event-driven: "dormidas" => funcionan a petición del usuario
- JS es mono hilo => un solo hilo => puede hacer solo una cosa a la vez.
- Event loop => bucle de eventos
- Si te mandas una función de eventos enorme, congelas TODA LA PÁGINA
- keydown / keyup 

NOTA: INVESTIGA LOS EVENTOS MÁS UTILIZADOS

Necesitas conectar un MANEJADOR
Event listener => oyente de eventos => event handler

event => (e)

EL EVENTO VIAJA POR EL ÁRBOL
- Cuando hacer clic en un elemento que está anidado, el evento no ocurre únicamente en el botón; sino que 
recorre todo el árbol en 3 fases:
1. Fase de captura (capturing) => el evento desciende desde el document hasta el elemento objetivo
2. Fase de objetivo (target) => el evento llega al elemento exacto donde ocurrió el clic
3. Fase de burbujeo (bubbling) => el evento sube de regreso desde el objetivo hacia el document

DELEGACIÓN DE EVENTOS
event.target => hace referencia al elemento donde realmente ocurrió un evento

DOS MÉTODOS
1. event.preventDefault() => Cancela una acción por defecto del navegador.
2. event.stopPropagation() => Detiene el viaje del evento por el árbol.

EJERCICIO:
Elabora una mini aplicación de TO-DO que combine: seleccionar, manipular y reaccionar usando delegación
para marcar tareas como completadas.
- Un input y un botón "Agregar" que al hacer clic, cree un <li> con el texto y lo añada a lista
- Limpia el input después de agregarl no permitas que se puedan agregar tareas vacías
- Debes tener un único listener en el <ul> que al hacer clic en un <li>, lo marque como completado con un toggle
- Debe funcionar también con tareas agregadas después de registrar el listener (delegación)