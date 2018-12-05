/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  
  var peliculas = {
    peliculas: [
      "Toy Story",
      "Buscando a Nemo",
      "Wall-e"
    ]
  }
  
  _nock_.cleanAll();
  const mockedGet = _nock_("https://some-domain.com/")
    .get("/some-data.json")
    .reply(200, { content: "Some remote data" });
    
    _dispatch_('load', document);
})/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/