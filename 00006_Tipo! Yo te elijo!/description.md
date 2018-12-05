<**Aclaración: Los errores de este ejercicio no se visualizan tan lindos como nos gustaría. Prestale atención al texto en negrita y subrayado para encontrar una buena pista**

Vamos a modificar la palabra "click!" por algo más interesante.

Quisieramos que si el usuario clickear en el tipo "fire" la etiqueta `<p>` diga "fire: https://pokeapi.co/api/v2/type/10/"

¿Cómo podes hacer para lograr esto?

Dentro del evento definido para el `<li>` podes utilizar la variable `this` que representará el `<li>` clickeado.

Es decir:

> Dentro del evento, `this.innerHTML` te dará el nombre del tipo clickeado y `this.getAttribute("url")` te dará la URL del tipo elegido :wink:

¡Éxitos!
