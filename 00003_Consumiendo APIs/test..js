/*<output#*//*#output>*/
/*<tests#*/it("Carrousel", function() {
  
  _dispatch_('load', document);

  var peliculas = {
    peliculas: [
      "Toy Story",
      "Buscando a Nemo",
      "Wall-e"
    ]
  }
  
  _nock_.cleanAll();
  const mockedGet = _nock_("https://api-peliculas-dh/")
    .get("/peliculas")
    .reply(200, peliculas);
})/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/