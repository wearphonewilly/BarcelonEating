function loadLocations() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", "../db/RestaurantesBBDD.json", true);
    xmlhttp.onreadystatechange = processLocations;
    xmlhttp.send(null);
}

function processLocations() {
    if ((this.readyState == 4) && (this.status == 200)) {
        var locations = JSON.parse(this.responseText);
        console.log(locations);

        for (let i = 0; i < locations.Bebidas.length; i++) {

            var bebidaObj = document.createElement("div");

            document.getElementById("content").appendChild(bebidaObj);


            /*var nameBebida = document.createElement("h1");
            nameBebida.innerHTML = locations.Bebidas[i].name;
            bebidaObj.appendChild(nameBebida);*/

            /*var descBebida = document.createElement("h4");
            /*descBebida.innerHTML = locations.Bebidas[i].description;
            bebidaObj.appendChild(descBebida);*/

            document.getElementById("content").innerHTML += "  <div class=\"row\"> <div class=\"col s12 \"> <div class=\"card light-blue darken-3\"> <div class=\"card-content white-text\"> <span class=\"card-title\">" +locations.Bebidas[i].name +"</span> <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. </p></div> </div> </div> </div> ";

        }
    }
}