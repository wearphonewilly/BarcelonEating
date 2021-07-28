function loadEvents(){
    
    db = firebase.firestore();

    document.getElementById("submitButton").addEventListener("click", addLocation);
}

function processLocations()
{
    /*
    db.collection("Locales").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
    */
   
    if((this.readyState == 4) && (this.status == 200))
    {
        var locations = JSON.parse(this.responseText);
        console.log(locations);

        for (let i = 0; i < locations.Bebidas.length; i++) {
            
            var bebidaObj = document.createElement("div");
            
            document.getElementById("content").appendChild(bebidaObj);


            var nameBebida = document.createElement("h1");
            nameBebida.innerHTML = locations.Bebidas[i].name;
            bebidaObj.appendChild(nameBebida);

            var descBebida = document.createElement("h4");
            descBebida.innerHTML = locations.Bebidas[i].description;
            bebidaObj.appendChild(descBebida);
            
        }
    }
}

function addLocation(){

    var locationName = document.getElementById("locationName").value;
    var locationDescription = document.getElementById("locationDescription").value;
    var locationLocation = document.getElementById("locationLocation").value;
    var locationTags = document.getElementById("locationTags").value;
    var locationType = document.getElementById("locationType").value;

    if(locationName != "" && locationLocation != "" && locationTags != "" && locationType != ""){
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
    }else{
        alert("Invalid inputs");
    }
    
}