/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  _dispatch_('load', document);
  
  _dispatch_("submit", document.querySelector("form"))
  
  var hayUltimaAlerta = _last_alert_message_ !== null
  
  true.should.eql(hayUltimaAlerta, "<b><u>¿Llamaste a la función alert al enviar el formulario?</u></b>")
  
  _last_alert_message_.should.eql("Gracias!", "<b><u>La alerta debería decir 'Gracias!' al enviar el formulario</u></b>")
 
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/