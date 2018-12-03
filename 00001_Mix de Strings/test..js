describe("Ejercicio 1", function() {
  it("Test 1", function() {
    var input = "Juan,    Sol  ,  Pepe, Marta"
    
    var output = stringBomb(input)
    
    assert(typeof output === "string", "La función debe retornar un string")
    
    assert(output.indexOf(",") === -1, "Hay comas en el resultado. ¡Acordate que en el resultado final queremos que los nombres esten divididos por espacios!")
  })
})