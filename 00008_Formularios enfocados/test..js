/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  _dispatch_('load', document);
  
  _dispatch_("focus", document.querySelectorAll("input")[0])
  
  var hayUltimaAlerta = _last_alert_message_ !== null
  
  true.should.eql(hayUltimaAlerta, "<b><u>¿Llamaste a la función alert al hacer focus en el primer input?</u></b>")
  
  _last_alert_message_.should.eql("Complete su nombre", "<b><u>La alerta debería decir 'Complete su nombre' al hacer foco en el primer campo</u></b>")
  
  _dispatch_("focus", document.querySelectorAll("input")[1])
  
  _last_alert_message_.should.eql("Complete su email", "<b><u>La alerta debería decir 'Complete su email' al hacer foco en el segundo campo</u></b>")
 
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/