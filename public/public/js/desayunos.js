function loadLocations() {

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

}