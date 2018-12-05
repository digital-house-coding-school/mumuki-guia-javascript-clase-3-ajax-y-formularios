**Aclaración: Los errores de este ejercicio no se visualizan tan lindos como nos gustaría. Prestale atención al texto en negrita y subrayado para encontrar una buena pista**

Para este ejercicio finalmente vamos a implementar AJAX consumiento una API externa. La URL de esta API será **"https://dev.digitalhouse.com/api/getCursos"**

Es importante, antes de continuar entender el formato de retorno de esta API. Una respuesta se vería así:

``` javascript
{
  "data": [
    {
      "curso":"Desarrollo Web Full Stack",
      "id":1,
      "descripcion":"Lorem Ipsum"
    }
  ]
}
```

Dicho de otro modo: Si consultasemos la API retornaría un JSON con toda esta información. Si lo transformasemos en un objeto tendría un **atributo "data"** que tiene internamente un array de cursos. Cada curso tiene "curso", "id" y "descripcion"

¿Cual es tu trabajo?

Consumir esta API y agregarle al `<ul>` de nuestro HTML un `<li>` por cada uno de los cursos incluyendo el nombre del curso como contenido.

Dicho de otro modo, el `<ul>` debería verse así: 

``` html
<ul>
  <li>Desarrollo Web Full Stack</li>
  <li>React JS</li>
  <li>Desarrollo Mobile Android</li>
  <li>Desarollo Mobile IOS</li>
</ul>
```

Para quienes se sientan valientes, pueden empezar con el ejercicio prácticamente en blanco. Sin embargo, como sabemos que el desafío es complejo les dejamos en la pista de abajo un molde que ya se encarga de obtener los cursos de la API para que luego puedan operar con esos cursos y crear los `<li>`

¡Muchos éxitos!
