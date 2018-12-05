/*<script.js#*/window.addEventListener("load", function() {
  
  var lis = document.querySelectorAll("li")
  
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      document.querySelector("p").innerHTML = this.innerHTML + ": " + this.getAttribute("url")
      
      // Tu código va acá!!
      
    });
  }  
    
});/*#script.js>*/
/*<index.html#*/<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Tipos de Pokemon!</h1>
    <section class="principal">
      <ul>

        <li url="https://pokeapi.co/api/v2/type/16/">dragon</li>

      </ul>
      <p>
        
      </p>
      <ul class="ataques">
        
      </ul>
    </section>
  

</body>
</html>/*#index.html>*/