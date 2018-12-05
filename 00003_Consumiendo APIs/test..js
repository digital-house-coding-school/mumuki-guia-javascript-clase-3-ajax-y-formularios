/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  
  _dispatch_('load', document);

  var cursos = [
    "Desarrollo Web Full Stack",
    "React JS",
    "Desarrollo Mobile Android",
    "Desarrollo Mobile IOS"
  ]
  
  var lis = document.querySelectorAll("li")
  
  cursos.length.should.eql(lis.length, "La cantidad de etiquetas <li> no equivale con la cantidad de cursos")
      
  for (var i = 0; i < cursos.length; i++) {
    cursos[i].curso.should.eql(lis[i].innerHTML, "El curso número " + i + " dice dentro del <li> '" + lis[i].innerHTML + "' y debería decir '" + cursos[i].curso + "'") 
  }
})/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/