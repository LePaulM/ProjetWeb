// Déclarer la carte (coord ecole :48.83889, 2.588889)
var map = L.map('map').setView([48.83889, 2.588889],15);
// les tuiles de la carte me mettent "Image corrupt or truncated."

// Ajouter la couche "Carte"
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    zoom: 10,
}).addTo(map);

// Ajouter une échelle à la carte
L.control.scale().addTo(map);

//données test
let test = ['Observatoire de Paris',48.805,2.231111,'enigme n°1','Obs-Paris-coupole-Arago.jpg'];
let test2 = ['Hôtel des Invalides',48.86,2.311944,'enigme n°2','Invalides_aerial_view.jpg'];
let test3 = ["Tour Eiffel",48.85833,2.294444,"engime n°1","toureiffel.jpg"];
let test4 = ["Palais Bourbon",48.86194,2.318611,"engime n°12","260px-Palais_Bourbon_Paris_7e_NW_View_140402_1.jpg"];
let test5 = ["Panthéon",48.846111,2.3458333,"engime n°11","Pantheon_of_Paris_007.JPG"];
let tests = [test,test2,test3,test4,test5];

// permettra d'accéder au HTML du nombre d'objets trouvés
var nbTrouver = document.getElementById('nbTrouver');
// permettra d'accéder au HTML donnant l'énigme en cours
var enigmeEnCours = document.getElementById('enigmeEnCours');
// permettra d'accéder au HTML donnant les monuments déjà trouvés
var monumentTrouve = document.getElementById('monumentTrouve');

//permettra de définir le logo
var iconStart = null;
// permettra d'afficher le monument
var monument = null;
// permettra de mettre à jour le nombre d'objets trouvés
var nbClick = 0;
// permettra de mettre à jour le nombre d'objets trouvés
var nbClick = 0;

var necessaryZoom = 15;
// permettra d'afficher les énigmes
var enigmeSuivante = L.popup(autoClose = false);
// permettra d'afficher 'Bravo! Tu as réussi à trouver ... !!' quand le joueur réussi une énigme
var bravo = L.popup(autoClose = false);
// permet d'accéder à l'objet en cours dans toutes les fonctions
var bite = null;
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//map.on('click', onMapClick);   // permet d'appliquer la fonction ci-dessus
function afficherIcone(bite) {
  //console.log(bite[4]);
  // permet de mettre une icone à la place de l'icone standard des marker
  icon = L.icon({
      iconUrl: bite[4],
      //shadowUrl: 'leaf-shadow.png',

      iconSize:     [60, 60], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [25, 94], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [40, 0] // point from which the popup should open relative to the iconAnchor
  });

  return icon;
}

//fonction d'initialisation du jeu
function init() {
  //Math.random() *
//  while (map.getZoom() > 30) {
    tourJeu(tests[0]);
    monument.addEventListener('click', onMonumentClick);
  //}
}

// compte à rebours
countdownManager = {

	// Configuration
	targetTime: null, // Date cible du compte à rebours (00:00:00)
  jeuFini: false, //la variable qui dira si le jeu est fini ou non

  displayElement: { // Elements HTML où sont affichés les informations
		hour: null,
		min:  null,
		sec:  null

	},

	// Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
	init: function(){
    this.targetTime = new Date();   // on initialise la date cible à chaque nouveau niveau. Pour mettre un temps global on peut initialiser la date dès sa création
		// Récupération des références vers les éléments pour l'affichage
		// La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
		this.displayElement.min  = document.getElementById('countdown_min');
		this.displayElement.sec  = document.getElementById('countdown_sec');
		// Lancement du compte à rebours
		this.tick(); // Premier tick tout de suite
    if (this.jeuFini == false){
		    window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
    }
  },

	// Met à jour le compte à rebours (tic d'horloge)
	tick: function(){
		// Instant présent
		var timeNow  = new Date();

		// Calcul du temps restant
		var diff = this.dateDiff(timeNow, this.targetTime);
    // Si il reste moins de 5 minutes le temps se met en gras et en rouge
    if (diff.min < 5) {
      this.displayElement.min.innerHTML = "<b>" + diff.min + "<b>";
      this.displayElement.min.style.color = "red";
      this.displayElement.sec.innerHTML = "<b>" +  diff.sec + "<b>";
      this.displayElement.sec.style.color = "red";
    } else {
      this.displayElement.min.innerHTML = diff.min;
      this.displayElement.sec.innerHTML = diff.sec;
    }

    // Si le temps est écoulé on affiche une fenêtre avec un bouton confirmer qui permet de recommencer
    // et un bouton annuler qui nous fait retourner à la page d'intro du jeu
    if (diff.min <= 0 && diff.sec <= 0){

      this.displayElement.min.innerHTML = 0;
  		this.displayElement.sec.innerHTML = 0;
      this.jeuFini = true;
      if (confirm("Oh non, le temps est écoulé!\n Voulez-vous recommencer?") == true){
          window.open("index.php","_self");
          //break;
      } else if (confirm("Oh non, le temps est écoulé!\n Voulez-vous recommencer?") == false){
          window.open("intro.php","_self");
          //break;
      }
    }
	},

	// Calcul la différence entre 2 dates, en jour/heure/minute/seconde
	dateDiff: function(date1, date2){
		var diff = {}                           // Initialisation du retour
    //console.log('date1 : '+ date1);
    //console.log('date2 : '+ date2);
    var tmp = date2 - date1 + 1200000 / 2 ;  //1200000 correspondent à 20 minutes, 1200000 ms / 60 = 20s

		tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
		diff.sec = tmp % 60;                    // Extraction du nombre de secondes
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
		diff.min = tmp % 60;                    // Extraction du nombre de minutes

		return diff;
	}
};

function tourJeu(truc) {
  //console.log(truc);
  countdownManager.init();
  bite = truc;
  trouve = false;
    console.log(bite);
    //console.log('coucou');
    enigmeEnCours.innerHTML = "Enigme en cours : <br>" + bite[3];

    //permet d'afficher un marker avec pour icone une image (celle de l'URL)
    var icon = afficherIcone(bite);

    monument = L.marker([bite[1]-0.0002,bite[2]-0.0002], {icon: icon}).addTo(map);
    monument.setZIndexOffset(12);
}

function onMonumentClick() {
  //console.log("L'événement a été déclenché");
  //console.log(bite);
  var popuplatlong = L.latLng(bite[1],bite[2])
  bravo
      .setLatLng(popuplatlong)
      .setContent("Bravo! Tu as réussi à trouver " + bite[0] + " !!")
      .openOn(map);

  nbClick++;
  nbTrouver.innerHTML = "Nombre d'énigmes résolues : " + nbClick + "/20";
  enigmeEnCours.innerHTML = "Enigme en cours : <br>" + bite[3];
  var p = document.createElement("p");
  p.append(bite[0])
  monumentTrouve.append(p);
  map.removeLayer(monument);
  trouve = true;
  if (nbClick < tests.length) {
    necessaryZoom = Math.round(Math.random() * 15 + 4);
    tourJeu(tests[nbClick]);
    //console.log('coucou');
    monument.addEventListener('click', onMonumentClick);
  } else {
    window.open("bravo.php","_self");
  }

};

map.on('zoomend', function() {
    var currentZoom = map.getZoom();

    console.log(necessaryZoom);
    if (currentZoom < necessaryZoom) {
      map.removeLayer(monument);
    }
    else{
      map.addLayer(monument);
    }
    console.log(map.getZoom());
});
