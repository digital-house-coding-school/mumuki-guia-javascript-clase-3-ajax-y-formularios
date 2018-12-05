``` javascript
window.addEventListener("load", function() {
  
  var url = "https://dev.digitalhouse.com/api/getCursos"
  
  fetch(url).then(function(response) {
    return response.json()
  }).then(function(data) {
    cursos = data.data;
     
  }).catch(function(error) {
    
  })
})
```
