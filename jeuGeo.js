// Déclarer la carte (coord ecole :48.83889, 2.588889)
var map = L.map('map').setView([48.80589, 2.238889],13);

// Ajouter la couche "Carte"
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(map);

let test = ['Observatoire de Paris',48.805,2.231111,'enigme n°1','Obs-Paris-coupole-Arago.jpg','descripion du monument'];
let test2 = ['Hôtel des Invalides',48.86,2.311944,'enigme n°2','Invalides_aerial_view.jpg','description du monument 2']

// permettra d'accéder au HTML du nombre d'objets trouvés
var nbTrouver = document.getElementById('nbTrouver');
// permettra d'accéder au HTML donnant l'énigme en cours
var enigmeEnCours = document.getElementById('enigmeEnCours');
// permettra d'accéder au HTML donnant les monuments déjà trouvés
var monumentTrouve = document.getElementById('monumentTrouve');

// permettra de mettre à jour le nombre d'objets trouvés
var nbClick = 0;

// permettra de mettre à jour le nombre d'objets trouvés
var nbClick = 0;

// permettra d'afficher les énigmes
var enigmeSuivante = L.popup(autoClose = false);

// permettra d'afficher 'Bravo! Tu as réussi à trouver ... !!' quand le joueur réussi une énigme
var bravo = L.popup(autoClose = false);

function onMonumentClick(e) {
  // permet de mettre une popup à l'endroit d'un clic.
  // S'en servir pour afficher l'énogme suivante lorsque le joueur résoud une énigme
  // ajoute également un au nombre d'énigmes résolues
    bravo
        .setLatLng(e.latlng)
        .setContent("Bravo! Tu as réussi à trouver "+ test[0] + " !!<br>" + test[5])
        .openOn(map);

    enigmeSuivante
        .setLatLng(e.latlng)
        .setContent("l'énigme suivante")
        .openOn(map);

    nbClick++;
    nbTrouver.innerHTML = "Nombre d'énigmes résolues : " + nbClick + "/21";
    enigmeEnCours.innerHTML = "Enigme en cours : <br>" + test2[3];
    monumentTrouve.append(test[0] + " ");

}
//map.on('click', onMapClick);   // permet d'appliquer la fonction ci-dessus

// permet de mettre une icone à la place de l'icone standard des marker
var icon = L.icon({
    iconUrl: 'earth-1706130_1920.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [95, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [25, -76] // point from which the popup should open relative to the iconAnchor
});
//permet d'afficher un marker avec pour icone une image (celle de l'URL)
var monument = L.marker([48.805,2.231111], {icon: icon}).addTo(map);
//monument.bindPopup('Bravo! Tu as réussi à trouver ... !!')
monument.on('click', onMonumentClick);
