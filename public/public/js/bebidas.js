function loadLocations() {

    db = firebase.firestore();
    processLocations();
}

function processLocations() {

    db.collection("Locales").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if(doc.data().type === "drinks"){
                let bebida = document.createElement("div");
                bebida.setAttribute("id", doc.id);
                bebida.setAttribute("class", "card col-xl-3 ml-3 mb-1 mt-2");
                document.getElementById("content").appendChild(bebida);
    
                let bebidaBodyObj = document.createElement("div");
                bebidaBodyObj.setAttribute("class", "card-body");
                bebida.appendChild(bebidaBodyObj);
    
                let nameBebida = document.createElement("h5");
                nameBebida.setAttribute("class", "card-title");
                nameBebida.innerHTML = doc.data().name;
                bebidaBodyObj.appendChild(nameBebida);
    
                let descBebida = document.createElement("p");
                descBebida.setAttribute("class", "card-text");
                descBebida.innerHTML = doc.data().description;
                bebidaBodyObj.appendChild(descBebida);

                let locationBebida = document.createElement("p");
                locationBebida.setAttribute("class", "card-text");
                locationBebida.innerHTML = "Dirección: " + doc.data().location;
                bebidaBodyObj.appendChild(locationBebida);

                let tags = doc.data().tags;
                let tagsBebida = document.createElement("div");
                tagsBebida.setAttribute("class", "card-text");
                for (let i = 0; i < tags.length; i++) {
                    let tag = document.createElement("h8");
                    tag.innerHTML = "<i>" + tags[i] + " </i>";
                    tag.setAttribute("class", "border border-secondary ml-1 px-2 rounded-top bg-secondary text-light");
                    tagsBebida.appendChild(tag);
                }

                bebidaBodyObj.appendChild(tagsBebida);

            }
        });
    });

}