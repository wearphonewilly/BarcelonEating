function loadEvents() {

    db = firebase.firestore();

    document.getElementById("submitButton").addEventListener("click", addLocation);
    //document.getElementById("searchButton").addEventListener("click", searchLocation);
    //document.getElementById("recalculate").addEventListener("click", recalculateTags);
}

function recalculateTags(){
    db.collection("Locales").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let tags = doc.data().tags;
            let arrayTags = tags.split(",");

            db.collection("Locales").doc(doc.id).update({tags: arrayTags});
        });
    });
}

function processLocations() {
    /*
    db.collection("Locales").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
    */

    if ((this.readyState == 4) && (this.status == 200)) {
        let locations = JSON.parse(this.responseText);
        console.log(locations);

        for (let i = 0; i < locations.Bebidas.length; i++) {

            let bebidaObj = document.createElement("div");

            document.getElementById("content").appendChild(bebidaObj);

            let nameBebida = document.createElement("h1");
            nameBebida.innerHTML = locations.Bebidas[i].name;
            bebidaObj.appendChild(nameBebida);

            let descBebida = document.createElement("h4");
            descBebida.innerHTML = locations.Bebidas[i].description;
            bebidaObj.appendChild(descBebida);

        }
    }
}

function searchLocation() {

    let name = document.getElementById("locationName").value.toUpperCase();
    let flag = false;

    db.collection("Locales").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let localName = doc.data().name;

            localName = localName.toUpperCase();
            
            if(localName.localeCompare(name) == 0){
                console.log(doc.id);
                flag = true;
            }

        });
    });

    return flag;
}

function addLocation() {

    let locationName = document.getElementById("locationName").value;
    let locationDescription = document.getElementById("locationDescription").value;
    let locationLocation = document.getElementById("locationLocation").value;
    let locationTags = getSelectValues(document.getElementById("locationTags"));
    let locationType = document.getElementById("locationType").value;

    if (!searchLocation() && locationName != "" && locationLocation != "" && locationTags != "" && locationType != "") {
        
        db.collection("Locales").add({
            name: locationName,
            description: locationDescription,
            location: locationLocation,
            tags: locationTags,
            type: locationType
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
        
    } else {
        alert("Invalid inputs");
    }

}

function getSelectValues(select) {
    let result = [];
    let options = select && select.options;
    let opt;
  
    for (let i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
}


