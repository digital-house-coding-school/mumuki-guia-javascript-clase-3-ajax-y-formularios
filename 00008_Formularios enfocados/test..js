/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  _dispatch_('load', document);
  
  _dispatch_("focus", document.querySelectorAll("input")[0])
  
  document.querySelectorAll("input")[0].style.border.should.eql("3px solid blue", "Al hacer foco sobre el primer input no se agrega el borde esperado")
  
  _dispatch_("blur", document.querySelectorAll("input")[0])
  
  document.querySelectorAll("input")[0].style.border.should.eql("none", "Al quitar el foco sobre el primer input no se quita el borde")
  
  _dispatch_("focus", document.querySelectorAll("input")[1])
  
  document.querySelectorAll("input")[1].style.border.should.eql("3px solid blue", "Al hacer foco sobre el segundo input no se agrega el borde esperado")
  
  _dispatch_("blur", document.querySelectorAll("input")[1])
  
  document.querySelectorAll("input")[1].style.border.should.eql("1", "Al quitar el foco sobre el primer segundo no se quita el borde")
  
  
  
 
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/