/*<output#*//*#output>*/
/*<tests#*/it("AJAX", function() {
  
  _nock_.cleanAll();
  
  const mockedGet = _nock_("https://dev.digitalhouse.com")
    .get("/api/getCursos")
    .reply(200, {"data":[{"curso":"Desarrollo Web Full Stack","id":1,"descripcion":"Este curso presencial de Desarrollo Web Full Stack de 200 horas de duración, te enseñará todo lo necesario para llevar a cabo proyectos web de principio a fin realizando programación orientada a objetos. Creá sitios y aplicaciones web sólidos, funcionales y atractivos. Incorporá los conocimientos técnicos y las metodologías de trabajo más actuales y usan en el mercado. En 5 meses aprendé los lenguajes y tecnologías que las empresas utilizan hoy. Vas a aprender Laravel, React, HTML, CSS, MySQL y PHP. Y todo lo necesario para dominar el Front End y el Back End de una aplicación."},{"curso":"React JS","id":2,"descripcion":"Este curso intensivo te enseñará todo lo necesario para crear aplicaciones web en Javascript soportada por una de las librerías más populares y en crecimiento de hoy en día: React.js. El objetivo del curso es generar un conocimiento completo de cómo modularizar una aplicación web en pequeños componentes, para que conformen una salida compleja: Single Page Application. No solamente estaremos enfocando el uso de React sino que haremos hincapié en la sintaxis moderna que presenta ECMAScript 2016, explorando la arquitectura que presenta Redux e incluyendo paquetes utilizados en el mercado actual como React Router. Al finalizar el curso, vas a poder ganar la habilidad de enfocar una aplicación web con este paradigma distinto que presenta React, profesionalizando tu perfil como Frontender."},{"curso":"Desarrollo Mobile Android","id":3,"descripcion":"Este programa presencial e intensivo de Desarrollo Mobile Android de 200 horas te enseñará todo lo necesario para desarrollar aplicaciones de principio a fin como un programador profesional. En 5 meses aprendé a crear aplicaciones mobile sólidas, funcionales y atractivas. Incorporá los conocimientos técnicos y las metodologías de trabajo más actuales y usadas en el mercado."},{"curso":"Desarrollo Mobile IOS","id":4,"descripcion":"El curso presencial e intensivo de Desarrollo Mobile iOS de 200 horas de duración te enseñará todo lo necesario para desarrollar aplicaciones de principio a fin. En 5 meses vas a realizar apps iOS con tecnología de programación orientada a objetos. Creá aplicaciones sólidas, funcionales y atractivas incorporando los conocimientos técnicos y las metodologías de trabajo más actuales y usadas en el mercado."}]});
    
  _dispatch_('load', document);
  
  ongoing = true
  
  _wait_for_(() => mockedGet.isDone(), function() {
    ongoing = false
  });
  
  
  while(ongoing) {
    
  }
  
  var cursos = [
    "Desarrollo Web Full Stack",
    "React JS",
    "Desarrollo Mobile Android",
    "Desarrollo Mobile IOS"
  ]
    
  var lis = document.querySelectorAll("li")
    
  cursos.length.should.eql(lis.length, "No hay la misma cantidad de elementos li como elementos retornados por la API")
  
    
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/