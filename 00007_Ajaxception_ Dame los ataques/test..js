/*<output#*//*#output>*/
/*<tests#*/it("AJAX", function() {
  _nock_.cleanAll();
  
  var ataquesFairy = {
    "moves": [
        {
            "name": "sweet-kiss",
            "url": "https://pokeapi.co/api/v2/move/186/"
        },
        {
            "name": "charm",
            "url": "https://pokeapi.co/api/v2/move/204/"
        },
        {
            "name": "moonlight",
            "url": "https://pokeapi.co/api/v2/move/236/"
        },
        {
            "name": "disarming-voice",
            "url": "https://pokeapi.co/api/v2/move/574/"
        },
        {
            "name": "draining-kiss",
            "url": "https://pokeapi.co/api/v2/move/577/"
        },
        {
            "name": "crafty-shield",
            "url": "https://pokeapi.co/api/v2/move/578/"
        },
        {
            "name": "flower-shield",
            "url": "https://pokeapi.co/api/v2/move/579/"
        },
        {
            "name": "misty-terrain",
            "url": "https://pokeapi.co/api/v2/move/581/"
        },
        {
            "name": "play-rough",
            "url": "https://pokeapi.co/api/v2/move/583/"
        },
        {
            "name": "fairy-wind",
            "url": "https://pokeapi.co/api/v2/move/584/"
        },
        {
            "name": "moonblast",
            "url": "https://pokeapi.co/api/v2/move/585/"
        },
        {
            "name": "fairy-lock",
            "url": "https://pokeapi.co/api/v2/move/587/"
        },
        {
            "name": "aromatic-mist",
            "url": "https://pokeapi.co/api/v2/move/597/"
        },
        {
            "name": "geomancy",
            "url": "https://pokeapi.co/api/v2/move/601/"
        },
        {
            "name": "dazzling-gleam",
            "url": "https://pokeapi.co/api/v2/move/605/"
        },
        {
            "name": "baby-doll-eyes",
            "url": "https://pokeapi.co/api/v2/move/608/"
        },
        {
            "name": "light-of-ruin",
            "url": "https://pokeapi.co/api/v2/move/617/"
        },
        {
            "name": "twinkle-tackle--physical",
            "url": "https://pokeapi.co/api/v2/move/656/"
        },
        {
            "name": "twinkle-tackle--special",
            "url": "https://pokeapi.co/api/v2/move/657/"
        },
        {
            "name": "floral-healing",
            "url": "https://pokeapi.co/api/v2/move/666/"
        },
        {
            "name": "guardian-of-alola",
            "url": "https://pokeapi.co/api/v2/move/698/"
        },
        {
            "name": "fleur-cannon",
            "url": "https://pokeapi.co/api/v2/move/705/"
        },
        {
            "name": "natures-madness",
            "url": "https://pokeapi.co/api/v2/move/717/"
        }
    ]
  }
  
  var ataquesDragon = {
    "moves": [
        {
            "name": "dragon-rage",
            "url": "https://pokeapi.co/api/v2/move/82/"
        },
        {
            "name": "outrage",
            "url": "https://pokeapi.co/api/v2/move/200/"
        },
        {
            "name": "dragon-breath",
            "url": "https://pokeapi.co/api/v2/move/225/"
        },
        {
            "name": "twister",
            "url": "https://pokeapi.co/api/v2/move/239/"
        },
        {
            "name": "dragon-claw",
            "url": "https://pokeapi.co/api/v2/move/337/"
        },
        {
            "name": "dragon-dance",
            "url": "https://pokeapi.co/api/v2/move/349/"
        },
        {
            "name": "dragon-pulse",
            "url": "https://pokeapi.co/api/v2/move/406/"
        },
        {
            "name": "dragon-rush",
            "url": "https://pokeapi.co/api/v2/move/407/"
        },
        {
            "name": "draco-meteor",
            "url": "https://pokeapi.co/api/v2/move/434/"
        },
        {
            "name": "roar-of-time",
            "url": "https://pokeapi.co/api/v2/move/459/"
        },
        {
            "name": "spacial-rend",
            "url": "https://pokeapi.co/api/v2/move/460/"
        },
        {
            "name": "dragon-tail",
            "url": "https://pokeapi.co/api/v2/move/525/"
        },
        {
            "name": "dual-chop",
            "url": "https://pokeapi.co/api/v2/move/530/"
        },
        {
            "name": "devastating-drake--physical",
            "url": "https://pokeapi.co/api/v2/move/652/"
        },
        {
            "name": "devastating-drake--special",
            "url": "https://pokeapi.co/api/v2/move/653/"
        },
        {
            "name": "core-enforcer",
            "url": "https://pokeapi.co/api/v2/move/687/"
        },
        {
            "name": "clanging-scales",
            "url": "https://pokeapi.co/api/v2/move/691/"
        },
        {
            "name": "dragon-hammer",
            "url": "https://pokeapi.co/api/v2/move/692/"
        }
    ]
  }
  
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
    
    const mockedGetFairy = _nock_("https://pokeapi.co")
    .get("/api/v2/type/18")
    .reply(200, ataquesFairy);
    
    const mockedGetDragon = _nock_("https://pokeapi.co")
    .get("/api/v2/type/16")
    .reply(200, ataquesDragon);
    
  _dispatch_('load', document);
  
  _wait_for_(() => mockedGet.isDone(), function() {
    
    
    var lis = document.querySelectorAll("li")
  
    tipos.results.length.should.eql(lis.length, "<b><u>No hay la misma cantidad de elementos li como elementos retornados por la API</u></b>")
    
    for (var i = 0; i < tipos.results.length; i++) {
      tipos.results[i].name.should.eql(lis[i].innerHTML, "<b><u>El li número " + i + " debería decir '" + tipos.results[i].name + "' pero dice '" + lis[i].innerHTML + "'</u></b>")
      
      tipos.results[i].url.should.eql(lis[i].getAttribute("url"), "<u><b>El atributo url del li número " + i + " no tiene la URL correspondiente con el tipo</b></u>") 
    }
    
    _dispatch_('click', document.querySelectorAll("li")[15]);
    
    document.querySelector("p").innerHTML.should.eql(tipos.results[15].name + ": " + tipos.results[15].url, "<b><u>Al clickear en el primer tipo no aparece el texto '" + tipos.results[15].name + ": " + tipos.results[15].url + "'</u></b>")
    
    document.querySelector("p").innerHTML = ""
    
    _dispatch_('click', document.querySelectorAll("li")[17]);
    
    document.querySelector("p").innerHTML.should.eql(tipos.results[17].name + ": " + tipos.results[17].url, "<b><u>Al clickear en el primer tipo no aparece el texto '" + tipos.results[17].name + ": " + tipos.results[17].url + "'</u></b>")
   
  });
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/