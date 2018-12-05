/*<output#*//*#output>*/
/*<tests#*/it("AJAX", function() {
  
  _nock_.cleanAll();
  const mockedGet = _nock_("https://some-domain.com/")
    .get("/some-data.json")
    .reply(200, { content: "Some remote data" });
    
  _dispatch_('load', document);
  
  _wait_for_(() => mockedGet.isDone(), () => {
    
    
  });
})/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/