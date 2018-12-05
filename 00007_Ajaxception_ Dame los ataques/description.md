**Aclaración: Los errores de este ejercicio no se visualizan tan lindos como nos gustaría. Prestale atención al texto en negrita y subrayado para encontrar una buena pista**

Llegamos al final del cuento.

Traemos todos los tipos. Tenemos eventos en cada `<li>`. Sabemos como obtener la URL de referencia al clickear en el `<li>`. Inclusive, simplificamos un poco el código para que podamos partir de un estado un poco más fresco.

¿Qué nos falta?

Agregamos además en el HTML un `<ul class="ataques">` que quisieramos que se rellene con los ataques del tipo elegido.

Tu desafío entonces es agregar en el evento definido para el `<li>` la siguiente lógica:

> 1. Limpiar todo el contenido del `<ul class="ataques">`

> 2. Hacer un pedido por AJAX a la URL del tipo elegido

> 3. El JSON que retornará el pedido tiene un atributo llamado "moves" que contiene un array con todos los ataques

> 4. Una vez obtenido el array de ataques, **por cada uno** deberías agregar un `<li>` en el `<ul class="ataques">` que diga en el contenido el nombre del ataque. Cada uno de los ataques tiene un atributo "name" con el texto que necesitas

¡Muchiiisimos éxitos!