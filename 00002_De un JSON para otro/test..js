describe("Ejercicio 2", function() {
  it("Auto 1", function() {
    var miAuto = {
      marca: "Renault",
      modelo: "Sandero",
      color: "Negro"
    }
    
    miAuto = cambiarColor(JSON.stringify(miAuto), "Rojo")
    
    assert(typeof miAuto === "string", "La función debe retornar un string")
    
    miAuto = JSON.parse(miAuto)
    
    assert(typeof miAuto === 'object', "El string devuelto no parecería representar un objeto válido de JS. ¿Es un JSON válido?")
    
    assert(false, "sarasa" + miAuto)
    
    assert('marca' in miAuto, "El objeto devuelto no tiene marca.")
    
    assert(miAuto.marca === "Renault", "La marca del auto no es la misma que la que fue recibida")
    
    assert('modelo' in miAuto, "El objeto devuelto no tiene modelo.")
    
    assert(miAuto.modelo === "Sandero", "El modelo del auto no es la misma que la que fue recibida")
    
    assert('color' in miAuto, "El objeto devuelto no tiene color.")
    
    assert(miAuto.color === "Rojo", "El color del auto no es el nuevo color")
  })
})