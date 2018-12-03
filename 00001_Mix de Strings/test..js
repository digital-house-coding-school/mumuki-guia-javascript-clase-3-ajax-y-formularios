describe("Ejercicio 1", function() {
  it("Test 1", function() {
    var input = "Juan,    Sol  ,  Pepe, Marta"
    
    var output = stringBomb(input)
    
    assert(typeof output === string, "La función debe retornar un string")
  })
})