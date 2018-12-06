/*<output#*//*#output>*/
/*<tests#*/it("Formularios", function() {
  _dispatch_('load', document);
  
  _dispatch_("submit", document.querySelector("form"))
  
  var inputs = document.querySelectorAll("input")
  
  for (var i = 0; i < inputs.length; i++) {
    inputs.value = "sarasa";
  }
  
  var hayUltimaAlerta = _last_alert_message_ !== null
  
  true.should.eql(!hayUltimaAlerta, "Si el formulario esta lleno no deberías enviar ninguna alerta")
  
  inputs[0].value = ""
  
  _dispatch_("submit", document.querySelector("form"))
  
  var hayUltimaAlerta = _last_alert_message_ !== null
  
  true.should.eql(hayUltimaAlerta, "Si se deja un campo vacío debería haber alertas...")
 
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/