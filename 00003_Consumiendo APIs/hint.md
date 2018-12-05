``` javascript
window.addEventListener("load", function() {
  
  var url = "https://dev.digitalhouse.com/api/getCursos"
  
  fetch(url).then(function(response) {
    return response.json()
  }).then(function(data) {
    var cursos = data.data;
     
  }).catch(function(error) {
    
  })
})
```
