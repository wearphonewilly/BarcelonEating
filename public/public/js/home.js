window.addEventListener("load", function() {
    var request = new XMLHttpRequest();
    request.open("GET", "restaurantes.json");
    request.onload = function() {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        mostrarRestaurantes(data);
        
        var form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
          event.preventDefault();
          
          var busqueda = document.querySelector("#search").value.toLowerCase();
          var tipoComida = document.querySelector("#type").value;
          var precio = document.querySelector("#price").value;
          
          var resultados = data.filter(function(restaurante) {
            return (
              restaurante.nombre.toLowerCase().indexOf(busqueda) > -1 &&
              restaurante.tipoComida.indexOf(tipoComida) > -1 &&
              restaurante.precio <= precio
            );
          });
          
          mostrarRestaurantes(resultados);
        });
      } else {
        console.log("Error al cargar el archivo JSON");
      }
    };
    request.send();
  });
  
  function mostrarRestaurantes(restaurantes) {
    var seccionRestaurantes = document.querySelector("#restaurantes");
    seccionRestaurantes.innerHTML = "";
    
    restaurantes.forEach(function(restaurante) {
      var restauranteHTML = "<article>";
      restauranteHTML += "<h3>" + restaurante.nombre + "</h3>";
      restauranteHTML += "<p><strong>Barrio:</strong> " + restaurante.barrio + "</p>";
      restauranteHTML += "<p><strong>Precio:</strong> ";
      for (var i = 0; i < restaurante.precio; i++) {
        restauranteHTML += "€";
      }
      restauranteHTML += "</p>";
      restauranteHTML += "</article>";
      seccionRestaurantes.insertAdjacentHTML("beforeend", restauranteHTML);
    });
  }
  