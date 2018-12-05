/*<output#*//*#output>*/
/*<tests#*/it("AJAX", function() {
  
  _nock_.cleanAll();
  
  const mockedGet = _nock_("https://foo.bar")
    .get("/baz")
    .reply(200, {
      "data": "HOLA"
    });
    
  _dispatch_('load', document);
  
  _wait_for_(() => mockedGet.isDone(), () => {
    document.body.innerHTML.should.be.eql("HOLA");
  });
})/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/