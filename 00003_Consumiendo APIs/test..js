/*<output#*//*#output>*/
/*<tests#*/it("AJAX", function() {
  
  _nock_.cleanAll();
  
  const mockedGet = _nock_("https://dev.digitalhouse.com")
    .get("/api/getCursos")
    .reply(200, {
      "data": [
        {
          "curso":"Desarrollo Web Full Stack",
          "id":1,
          "descripcion":"Lorem Ipsum"
        }
      ]
    });
    
  _dispatch_('load', document);
  
  _wait_for_(() => mockedGet.isDone(), () => {
    document.body.innerHTML.should.be.eql("Desarrollo Web Full Stack");
  });
  
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/