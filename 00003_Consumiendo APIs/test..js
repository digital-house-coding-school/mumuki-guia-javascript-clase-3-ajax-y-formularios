/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  
  _dispatch_('load', document);

  var url = "https://dev.digitalhouse.com/api/getCursos"
  
  fetch(url).then(function(response) {
    return response.json()
  }).then(function(data) {
    
    var cursos = data.data
    var lis = document.querySelectorAll("li")
    
    cursos.length.should.eql(lis.length, "Debería haber tantos <li> como cursos retornados por la API")
    
    for (var i = 0; i < cursos.length; i++) {
      cursos[i].curso.should.eql(lis[i].innerHTML, "El curso número " + i + " dice dentro del <li> '" + lis[i].innerHTML + "' y debería decir '" + cursos[i].curso + "'") 
    }
    
  }).catch(function(error) {
    false.should.eql(true, "Hubo un error en el pedido AJAX")
  })
})/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/