/*<output#*//*#output>*/
/*<tests#*/it("AJAX", function() {
  _nock_.cleanAll();
  
  var tipos = {
    "count": 20,
    "next": null,
    "previous": null,
    "results": [
        {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
        },
        {
            "name": "fighting",
            "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
            "name": "flying",
            "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
            "name": "ground",
            "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
            "name": "rock",
            "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
            "name": "bug",
            "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
            "name": "ghost",
            "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
            "name": "steel",
            "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
            "name": "fire",
            "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
            "name": "water",
            "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
            "name": "electric",
            "url": "https://pokeapi.co/api/v2/type/13/"
        },
        {
            "name": "psychic",
            "url": "https://pokeapi.co/api/v2/type/14/"
        },
        {
            "name": "ice",
            "url": "https://pokeapi.co/api/v2/type/15/"
        },
        {
            "name": "dragon",
            "url": "https://pokeapi.co/api/v2/type/16/"
        },
        {
            "name": "dark",
            "url": "https://pokeapi.co/api/v2/type/17/"
        },
        {
            "name": "fairy",
            "url": "https://pokeapi.co/api/v2/type/18/"
        },
        {
            "name": "unknown",
            "url": "https://pokeapi.co/api/v2/type/10001/"
        },
        {
            "name": "shadow",
            "url": "https://pokeapi.co/api/v2/type/10002/"
        }
    ]
}
  
  const mockedGet = _nock_("https://pokeapi.co")
    .get("/api/v2/type/")
    .reply(200, tipos);
    
  _dispatch_('load', document);
  
  _wait_for_(() => mockedGet.isDone(), function() {
    
    
    var lis = document.querySelectorAll("li")
  
    tipos.results.length.should.eql(lis.length, "<b><u>No hay la misma cantidad de elementos li como elementos retornados por la API</u></b>")
    
    for (var i = 0; i < tipos.results.length; i++) {
      tipos.results[i].name.should.eql(lis[i].innerHTML, "<b><u>El li número " + i + " debería decir '" + tipos.results[i].name + "' pero dice '" + lis[i].innerHTML + "'</u></b>")
      
      tipos.results[i].url.should.eql(lis[i].getAttribute("url"), "<u><b>El atributo url del li número " + i + " no tiene la URL correspondiente con el tipo</b></u>") 
    }
    
    
    _dispatch_('click', document.querySelectorAll("li")[0]);
    
    document.querySelector("p").innerHTML.should.eql("click!", "<b><u>Al clickear en el primer tipo no aparece la palabra 'click!'</u></b>")
    
    document.querySelector("p").innerHTML = ""
    
    _dispatch_('click', document.querySelectorAll("li")[3]);
    
    document.querySelector("p").innerHTML.should.eql("click!", "<b><u>Al clickear en el cuarto tipo no aparece la palabra 'click!'</u></b>")
  });
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/