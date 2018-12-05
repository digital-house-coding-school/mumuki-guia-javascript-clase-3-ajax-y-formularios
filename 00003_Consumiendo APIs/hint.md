``` javascript
window.addEventListener("load", function() {
  fetch("https://pokeapi.co/api/v2/type/")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      tipos = json.results
    });
});
```

En este caso la variable tipos es un array de objetos literales.

Cada uno de estos objetos tiene el atributo "name" con el nombre que estas buscando :wink:
