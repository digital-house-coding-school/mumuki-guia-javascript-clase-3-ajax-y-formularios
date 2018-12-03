Vamos a aprovechar esta altura del curso para hacer una bomba de Strings.

Tu objetivo es completar la función `stringBomb` que recibe como parámetro `unTexto`. Este parámetro será un string que tendrá muchos nombres separados por "," con el siguiente formato:

**"Dario,Alejandro,   Javier   , Carolina, Camila , Santiago"**

Como verán, no esta del todo estandarizado si hay espacios o no antes y después de las comas.

La función debe hacer lo siguiente:

> 1. Separar `unTexto` por comas para obtener un array con cada uno de los nombres. Esto podes hacerlo mediante la función `split`

> 2. Por cada uno de los nombres, quitarle los espacios que sobren. Esto podes hacerlo mediante la función `trim`

> 3. Generar un nuevo array que contenga únicamente los nombres que tengan más de 3 caracteres y que incluyan la letra **A** minúscula. Esto podes hacerlo mediante los métodos `length` e `indexOf`. Para esto tendrás que preguntar las condiciones para **cada uno** de los elementos e ir agregando los valores que pasen el filtro al array nuevo. No olvides usar `push`

> 4. Convertir el array resultado en un string mediante el método `toString`

> 5. `toString` genera un string con los elementos separados por comas. Te pedimos que reemplaces esas comas por un espacio. Esto podes hacerlo mediante el método `replace`

> 6. Finalmente retorna el string resultado

¡Éxitos!
