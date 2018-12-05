``` javascript
window.addEventListener("load", function() {
  
  var url = "https://dev.digitalhouse.com/api/getCursos"
  
  fetch(url).then(function(response) {
    return response.json()
  }).then(function(data) {
    var cursos = data.data;
     
  })
})
```

En este caso la variable cursos es un array de objetos literales.

Cada uno de estos objetos tiene el atributo "curso" con el nombre que estas buscando :wink:
