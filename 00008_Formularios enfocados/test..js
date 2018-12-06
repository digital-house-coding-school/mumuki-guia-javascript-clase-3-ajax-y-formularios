/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  _dispatch_('load', document);
  
  _dispatch_("change", document.querySelectorAll("input")[0])
  
  var hayUltimaAlerta = _last_alert_message_ !== null
  
  true.should.eql(hayUltimaAlerta, "<b><u>¿Llamaste a la función alert al hacer cambios en el primer input?</u></b>")
  
  _last_alert_message_.should.eql("Gracias por dejar tu nombre", "<b><u>La alerta debería decir 'Gracias por dejar tu nombre' al hacer foco en el primer campo</u></b>")
  
  _dispatch_("change", document.querySelectorAll("input")[1])
  
  _last_alert_message_.should.eql("Gracias por dejar tu email", "<b><u>La alerta debería decir 'Gracias por dejar tu email' al hacer cambios en el segundo campo</u></b>")
 
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/