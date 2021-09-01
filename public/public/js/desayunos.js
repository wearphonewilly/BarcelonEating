/*function loadLocations() {
    db = firebase.firestore();
    processLocations();
}

function processLocations() {

    db.collection("Locales").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if(doc.data().type === "bakery"){
                let comida = document.createElement("div");
                comida.setAttribute("id", doc.id);
                comida.setAttribute("class", "card col-xl-3 ml-3 mb-1 mt-2");
                document.getElementById("content").appendChild(comida);
    
                let comidaBodyObj = document.createElement("div");
                comidaBodyObj.setAttribute("class", "card-body");
                comida.appendChild(comidaBodyObj);
    
                let nameComida = document.createElement("h5");
                nameComida.setAttribute("class", "card-title");
                nameComida.innerHTML = doc.data().name;
                comidaBodyObj.appendChild(nameComida);
    
                let descComida = document.createElement("p");
                descComida.setAttribute("class", "card-text");
                descComida.innerHTML = doc.data().description;
                comidaBodyObj.appendChild(descComida);

                let locationComida = document.createElement("p");
                locationComida.setAttribute("class", "card-text");
                locationComida.innerHTML = "Dirección: " + doc.data().location;
                comidaBodyObj.appendChild(locationComida);

                let tags = doc.data().tags;
                let tagsComida = document.createElement("div");
                tagsComida.setAttribute("class", "card-text");
                for (let i = 0; i < tags.length; i++) {
                    let tag = document.createElement("h8");
                    tag.innerHTML = "<i>" + tags[i] + " </i>";
                    tag.setAttribute("class", "border border-secondary ml-1 px-2 rounded-top bg-secondary text-light");
                    tagsComida.appendChild(tag);
                }

                comidaBodyObj.appendChild(tagsComida);

            }
        });
    });
}*/
function loadLocations() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", "../db/barcelonEatingDB.json", true);
    xmlhttp.onreadystatechange = processLocations;
    xmlhttp.send(null);
}

function processLocations() {
    if ((this.readyState == 4) && (this.status == 200)) {
        let locations = JSON.parse(this.responseText);
        console.log(locations);

        for (let i = 0; i < locations.Locations.length; i++) {

            /*let bebidaObj = document.createElement("div");

            document.getElementById("content").appendChild(bebidaObj);

            let nameBebida = document.createElement("h1");
            nameBebida.innerHTML = locations.Bebidas[i].name;
            bebidaObj.appendChild(nameBebida);*/

            /*let descBebida = document.createElement("h4");
            /*descBebida.innerHTML = locations.Bebidas[i].description;
            bebidaObj.appendChild(descBebida);*/

            // console.log(locations.Desayunos[i].name);
            console.log(locations.Locations[i].tags);

            let nameDesayunos = locations.Locations[i].name;
            let locationDesayunos = locations.Locations[i].location;
            let descriptionDesayunos = locations.Locations[i].description;
            let tagsDesayunos = locations.Locations[i].tags;
            let tagDesayunos = JSON.stringify(tagsDesayunos);
            let tag = tagDesayunos.replace('["', '');
            tag = tag.replace('"]', '');
            console.log(tag);
            if (tag.includes('","')) {
                tag = tag.replace('","', '');
            }
            
            let visitado = locations.Locations[i].visitado
            console.log(visitado);

            let comida = document.createElement("div");
            comida.setAttribute("class", tag + " card filterDiv col-xl-3 ml-3 mb-1 mt-2 show ");
            document.getElementById("content").appendChild(comida);

            let comidaBodyObj = document.createElement("div");
            comidaBodyObj.setAttribute("class", "card-body");
            comida.appendChild(comidaBodyObj);

            let nameComida = document.createElement("h5");
            nameComida.setAttribute("class", "card-title");
            nameComida.innerHTML = nameDesayunos;
            comidaBodyObj.appendChild(nameComida);

            let descComida = document.createElement("p");
            descComida.setAttribute("class", "card-text");
            descComida.innerHTML = descriptionDesayunos;
            comidaBodyObj.appendChild(descComida);

            let locationComida = document.createElement("p");
            locationComida.setAttribute("class", "card-text direction");
            locationComida.innerHTML = "Dirección: " + locationDesayunos;
            comidaBodyObj.appendChild(locationComida);

            let visitadoPlace = document.createElement("p");
            visitadoPlace.setAttribute("class", "card-text");
            visitadoPlace.innerHTML =  "Visitado: " + visitado;
            comidaBodyObj.appendChild(visitadoPlace);
        }
    }
}