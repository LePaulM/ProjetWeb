// Déclarer la carte
var map = L.map('map').setView([48.83889, 2.588889],13);

// Ajouter la couche "Carte"
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(map);

// permettra d'afficher les énigmes
var popup = L.popup();

// permettra d'accéder au HTML du nombre d'objets trouvés
var texte = document.getElementById('trouver');

// permettra de mettre à jour le nombre d'objets trouvés
var nbClick = 0;

function onMapClick(e) {
  // permet de mettre une popup à l'endroit d'un clic.
  // S'en servir pour afficher l'énogme suivante lorsque le joueur résoud une énigme
  // ajoute également un au nombre d'énigmes résolues
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    nbClick++;
    texte.innerHTML = "Nombre d'éngmes résolues : " + nbClick + "/21"

}
//map.on('click', onMapClick);    permet d'appliquer la fonction ci-dessus

// permet de mettre une icone à la place de l'icone standard des marker
var greenIcon = L.icon({
    iconUrl: 'earth-1706130_1920.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [95, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
//permet d'afficher un marker avec pour icone une image (celle de l'URL)
L.marker([48.805,2.231111], {icon: greenIcon}).addTo(map);


/*
L.marker([48.83889, 2.588889]).addTo(map)
    .bindPopup('"Ler premier indice".')
    .openPopup();
*/
