/*<output#*//*#output>*/
/*<tests#*/it("Formularios", function() {
  _dispatch_('load', document);
  
  var inputs = document.querySelectorAll("input")
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "sarasa";
  }
  
  _dispatch_("submit", document.querySelector("form"))
  
  var hayUltimaAlerta = _last_alert_message_ !== null
  
  
  
  true.should.eql(!hayUltimaAlerta, "Si el formulario esta lleno no deberías enviar ninguna alerta")
  
  inputs[0].value = ""
  
  _dispatch_("submit", document.querySelector("form"))
  
  hayUltimaAlerta = _last_alert_message_ !== null
  
  true.should.eql(hayUltimaAlerta, "Si se deja un campo vacío debería haber alertas...")
  
  hayUltimaAlerta.shoud.eql("Dejaste el campo nombre vacio", "No se esta enviado el mensaje correcto si se deja el nombre vacío")
  
  true.should.eql(false, "sarasa")
  
  inputs[0].value = "sarasa"
  inputs[1].value = ""
  
  _dispatch_("submit", document.querySelector("form"))
  
  hayUltimaAlerta.shoud.eql("Dejaste el campo email vacio", "No se esta enviado el mensaje correcto si se deja el email vacío")
 
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/