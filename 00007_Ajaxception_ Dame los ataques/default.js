/*<script.js#*/window.addEventListener("load", function() {
  
  var lis = document.querySelectorAll("li")
  
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      document.querySelector("p").innerHTML = this.innerHTML + ": " + this.getAttribute("url")
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
        <li url="https://pokeapi.co/api/v2/type/1/">normal</li>
        <li url="https://pokeapi.co/api/v2/type/2/">fighting</li>
        <li url="https://pokeapi.co/api/v2/type/3/">flying</li>
        <li url="https://pokeapi.co/api/v2/type/4/">poison</li>
        <li url="https://pokeapi.co/api/v2/type/5/">ground</li>
        <li url="https://pokeapi.co/api/v2/type/6/">rock</li>
        <li url="https://pokeapi.co/api/v2/type/7/">bug</li>
        <li url="https://pokeapi.co/api/v2/type/8/">ghost</li>
        <li url="https://pokeapi.co/api/v2/type/9/">steel</li>
        <li url="https://pokeapi.co/api/v2/type/10/">fire</li>
        <li url="https://pokeapi.co/api/v2/type/11/">water</li>
        <li url="https://pokeapi.co/api/v2/type/12/">grass</li>
        <li url="https://pokeapi.co/api/v2/type/13/">electric</li>
        <li url="https://pokeapi.co/api/v2/type/14/">psychic</li>
        <li url="https://pokeapi.co/api/v2/type/15/">ice</li>
        <li url="https://pokeapi.co/api/v2/type/16/">dragon</li>
        <li url="https://pokeapi.co/api/v2/type/17/">dark</li>
        <li url="https://pokeapi.co/api/v2/type/18/">fairy</li>
        <li url="https://pokeapi.co/api/v2/type/10001/">unknown</li>
        <li url="https://pokeapi.co/api/v2/type/10002/">shadow</li>
      </ul>
      <p>
        
      </p>
      <ul class="ataques">
        
      </ul>
    </section>
  

</body>
</html>/*#index.html>*/