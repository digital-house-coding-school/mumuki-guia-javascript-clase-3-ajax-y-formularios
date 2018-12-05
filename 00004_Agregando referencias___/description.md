**Aclaración: Los errores de este ejercicio no se visualizan tan lindos como nos gustaría. Prestale atención al texto en negrita y subrayado para encontrar una buena pista**

Lo que vamos a intentar hacer es que al clickear en el nombre de un tipo...¡te muestre los pokemones asociados!

Si recuerdan la API se veía de esta manera:

``` javascript
{
  "results": [
    {
      "name":"fire",
      "url":"https://pokeapi.co/api/v2/type/10/",

    }
  ]
}
```

Es decir, cada tipo tiene una URL de referencia con más información.

Para poder recuperar luego esta URL deberíamos tenerla en algún lugar del `<li>`

Por eso te pedimos que agregues al ejercicio anterior un atributo en el `<li>` llamado "url" que contenga la url dada por la API.