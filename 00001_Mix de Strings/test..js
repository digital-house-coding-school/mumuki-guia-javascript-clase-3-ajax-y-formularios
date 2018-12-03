describe("Ejercicio 1", function() {
  it("Test 1", function() {
    var input = "Juan    ,    Sol  ,  Pepe, Marta,    Dan"
    
    var output = stringBomb(input)
    
    assert(typeof output === "string", "La función debe retornar un string")
    
    assert(output.indexOf(",") !== -1, "No hay ninguna coma en el string resultado y los nombres deberían estar separados por comas")
    
    assert(output.indexOf("Dan") === -1, "El nombre 'Dan' no debería estar en el resultado ya que NO tiene más de 3 caracteres. No olvides dicha validación y de hacer el trim de antemano")
    
    assert(output.indexOf("Pepe") === -1, "El nombre 'Pepe' no debería estar en el resultado ya que NO tiene la letra A minúscula. No olvides dicha validación")
    
    var nombres = output.split(",")
    
    assert(nombres.length === 2, "La cantidad de nombres retornados no es la correcta")
    
    assert(output === "Juan,Marta", "Si bien la cantidad de nombres es la correcta no se recibie el string esperado. Se esperaba 'Juan,Marta' y se recibió '" + output + "'")
  })
})