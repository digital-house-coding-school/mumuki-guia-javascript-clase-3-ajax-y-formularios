/*<script.js#*/window.addEventListener("load", function() {
  fetch("https://pokeapi.co/api/v2/type/")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      ul = document.querySelector("ul")
      tipos = json.results
    
      for (var i = 0; i < tipos.length; i++) {
        ul.innerHTML += "<li url='" + tipos[i].url + "'>" + tipos[i].name + "</li>"
      }
      
      // Tu código va acá!
      var lis = document.querySelectorAll("li")
      
      for (var i = 0; i < lis.length; i++) {
        
      
      lis[i].addEventListener("click", function() {
        document.querySelector("p").innerHTML = this.innerHTML + ": " + this.getAttribute("url")
      });
        
      }  
    });
});/*#script.js>*/
/*<index.html#*/<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Tipos de Pokemon!</h1>
    <section class="principal">
      <ul>
        
      </ul>
      <p>
        
      </p>
      <ul class="ataques">
        
      </ul>
    </section>
  </body>
</html>/*#index.html>*/