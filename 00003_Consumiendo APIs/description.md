**Aclaración: Los errores de este ejercicio no se visualizan tan lindos como nos gustaría. Prestale atención al texto en negrita y subrayado para encontrar una buena pista**

Para este ejercicio finalmente vamos a implementar AJAX consumiento una API externa. El objetivo será listar los tipos de Pokemon existentes. La URL de esta API será **https://pokeapi.co/api/v2/type/"**

Es importante, antes de continuar, entender el formato de retorno de esta API. Una respuesta se vería así:

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

Dicho de otro modo: Si consultasemos la API retornaría un JSON con toda esta información. Si lo transformasemos en un objeto tendría un **atributo "results"** que tiene internamente un array de tipos. Cada tipo tiene "name" y "url"

¿Cual es tu trabajo?

Consumir esta API y agregarle al `<ul>` de nuestro HTML un `<li>` por cada uno de los tipos incluyendo el nombre del tipo como contenido.

Dicho de otro modo, el `<ul>` debería verse así: 

``` html
<ul>
  <li>normal</li>
  <li>fighting</li>
  <li>poison</li>
  ...
</ul>
```

Para quienes se sientan valientes, pueden empezar con el ejercicio prácticamente en blanco. Sin embargo, como sabemos que el desafío es complejo les dejamos en la pista de abajo un molde que ya se encarga de obtener los cursos de la API para que luego puedan operar con esos cursos y crear los `<li>`

¡Muchos éxitos!
