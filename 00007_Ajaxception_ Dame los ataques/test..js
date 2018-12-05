/*<output#*//*#output>*/
/*<tests#*/it("AJAX", function() {
  _nock_.cleanAll();
  
  var ataques = {
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
  
  const mockedGet = _nock_("https://pokeapi.co")
    .get("/api/v2/type/16")
    .reply(200, ataques);
    
  _dispatch_('load', document);
  
  
  var lis = document.querySelectorAll("li")
  
  for (var i = 0; i < lis.length; i++) {
    _dispatch_('click', lis[i])
  }
  
  

    _wait_for_(() => mockedGet.isDone(), function() {
    
    
    
    })

  
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/