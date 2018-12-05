/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  
  _dispatch_('load', document);

  var url = "https://dev.digitalhouse.com/api/getCursos"
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         var cursos = JSON.parse(xhttp.responseText).data;
         
         var lis = document.querySelectorAll("li")
    
        cursos.length.should.eql(lis.length, "Debería haber tantos <li> como cursos retornados por la API")
        
        for (var i = 0; i < cursos.length; i++) {
          cursos[i].curso.should.eql(lis[i].innerHTML, "El curso número " + i + " dice dentro del <li> '" + lis[i].innerHTML + "' y debería decir '" + cursos[i].curso + "'") 
          }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
})/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/