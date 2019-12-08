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

//données test (j'en  ai retiré certaines parce que j'avais pas d'idées sur les énigmes)
let test0 = ["École nationale des sciences géographiques",48.83889, 2.588889,"Tutoriel","ENSGreal.jpg" ]
let test1 = ["Tour Eiffel",48.85833,2.294444,"Plus haut édifice bâti en France","toureiffel.jpg"];
let test2 = ["Tour Montparnasse",48.84167,2.32222,"Sa terrasse panoramique permet d'admirer la capitale","260px-Tour_montparnasse_view_arc.jpg"];
let test3 = ["Musée du Louvre",48.86111,2.335833,"Mondialement reconnu pour le oeuvres qu'il possède","louvre.jpg"];
//let test4 = ["Cité des Sciences",48.89556,2.388056,"engime n°4","Cité_des_Sciences_et_de_l'Industrie_@_Parc_de_La_Villette_@_Paris_(28957995305).jpg"];
//let test5 = ["BNF François Mittérand",48.83361,2.375833,"engime n°5","Bibliothèque_nationale_de_France_(site_Richelieu),_Paris_-_Salle_Ovale.jpg"];
//let test6 = ["Arc de triomphe de l'Étoile",48.87389,2.295,"engime n°6","800px-Front_view_of_the_Arc_de_Triomphe,_Paris_23_February_2016.jpg"];
//let test7 = ["Obélisque de Louxor",48.86556,2.321111,"engime n°7","327px-Obélisque_Louqsor_Concorde_a.jpg"];
//let test8 = ["Fontaine Saint-Sulpice",48.85089,2.333444,"engime n°8","Fontaine_Saint-Sulpice_Paris_2008-03-14.jpg"];
let test9 = ["Le Monument de la République",48.8675,2.363889,"Statue représentant l'allégorie de la République","800px-A_la_Gloire_de_la_République_Française.jpg"];
let test10 = ["Palais-Royal",48.86333,2.336944,"Lieu de spectacle historique","260px-Palais_Royal_Paris_8_September_2019.jpg"];
let test11 = ["Panthéon",48.846111,2.3458333,"Y entrent les plus grandes figures françaises","Pantheon_of_Paris_007.JPG"];
let test12 = ["Palais Bourbon",48.86194,2.318611,,"Lieu de résidence du pouvoir législatif Français","260px-Palais_Bourbon_Paris_7e_NW_View_140402_1.jpg"];
let test13 = ["Hôtel des Invalides",48.86,2.311944,"Monument militaire, encore utilisé à notre époque","Invalides_aerial_view.jpg"];
let test14 = ["Observatoire de Paris",48.805,2.231111,"Dirigé autrefois par Cassini","Obs-Paris-coupole-Arago.jpg"];
let test15 = ["Notre-Dame",48.85306,2.349722,"Monument le plus visité de Paris","444px-Notre-Dame_de_Paris_2013-07-24.jpg"];
let test16 = ["Saint-Chapelle",48.85528,2.345,"Édifice religieux bâti sur l'Ile de la Cité, elle est l'un des deux vestiges du Palais de la Cité","280px-Sainte_chapelle_-_Upper_level.jpg"];
let test17 = ["Cimetierre Pierre Lachaise",48.86194,2.394167,"De nombreuses personnalités célèbres y reposent","120px-Chapelle_du_Cimetière_du_Père_Lachaise_Paris_20ème.jpg"];
let test18 = ["Bois de Boulogne",48.86347,2.252197,"Étendue boisée de l'ouest parisien","280px-Lac_supérieur_bois_de_boulogne.jpg"];
let test19 = ["Bois de Vincennes",48.83,2.433333,"Parc de l'est parisien","280px-Bois_de_Vincennes_20060816_16.jpg"];
let test20 = ["Opéra Garnier",48.87194,2.332222,"Théâtre National","220px-Paris_Opera_full_frontal_architecture,_May_2009.jpg"];

let tests = [test1,test2,test3,test9,test10,test11,test12,test13,test14,test15,test16,test17,test18,test19,test20];
let tableauDeJeu = [test0]

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
// zoom nécessaire au début du jeu pour trouver le premier monument
var necessaryZoom = 15;
// permettra d'afficher les énigmes
var enigmeSuivante = L.popup(autoClose = false);
// permettra d'afficher 'Bravo! Tu as réussi à trouver ... !!' quand le joueur réussi une énigme
var bravo = L.popup(autoClose = false);
// permet d'accéder à l'objet en cours dans toutes les fonctions
var tab = null;
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//map.on('click', onMapClick);   // permet d'appliquer la fonction ci-dessus
function afficherIcone(tab) {
  //console.log(tab[4]);
  // permet de mettre une icone à la place de l'icone standard des marker
  icon = L.icon({
      iconUrl: tab[4],
      //shadowUrl: 'leaf-shadow.png',

      iconSize:     [60, 60], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [25, 94], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [40, 0] // point from which the popup should open relative to the iconAnchor
  });

  return icon;
}

//permet de mettre le nombre d'énigmes souhaitées (ici 10) en gérant la taille du tableau tableauDeJeu
// elle permet également de tirer au hasard dans le tableau "tests" les énigmes qui seront dans le jeu, afin que le joueur ne rejoue pas au jeu en boucle
function tirageMonuments() {
  while (tableauDeJeu.length < 10) {
    var ah = Math.round(Math.random() * 15);
    console.log(ah);
      console.log(tests[ah]);
      tableauDeJeu.push(tests[ah]);
      tableauDeJeu.forEach( function (item,index) {
        //console.log(item);
        if (item[0] == tests[ah][0]) {
          tableauDeJeu.splice(index, 1, tests[ah]);      //retire un élément en double du tableau
          //console.log(tableauDeJeu.length);
          //console.log(index);
        }
      })
      //console.log(tableauDeJeu);

    }

}

//fonction d'initialisation du jeu
function init() {
  tirageMonuments();

  tourJeu(tableauDeJeu[0]);
  monument.addEventListener('click', onMonumentClick);
  map.addEventListener('click', onMapClick);

}

function tourJeu(entree) {
  //console.log(entree);
  countdownManager.init();
  tab = entree;
  trouve = false;
    console.log(tab);
    //console.log('coucou');
    enigmeEnCours.innerHTML = "Enigme en cours : <br>" + tab[3];

    //permet d'afficher un marker avec pour icone une image (celle de l'URL)
    var icon = afficherIcone(tab);

    monument = L.marker([tab[1]-0.0002,tab[2]-0.0002], {icon: icon}).addTo(map);
    monument.setZIndexOffset(12);
}

function onMonumentClick() {
  //console.log("L'événement a été déclenché");
  //console.log(tab);

  var popuplatlong = L.latLng(tab[1],tab[2])
  bravo
      .setLatLng(popuplatlong)
      .setContent("Bravo! Tu as réussi à trouver " + tab[0] + " !!")
      .openOn(map);

  nbClick++;
  nbTrouver.innerHTML = "Nombre d'énigmes résolues : " + nbClick + "/" + tableauDeJeu.length;
  enigmeEnCours.innerHTML = "Enigme en cours : <br>" + tab[3];
  var p = document.createElement("p");
  p.append(tab[0])
  monumentTrouve.append(p);
  map.removeLayer(monument);
  trouve = true;
  if (nbClick < tableauDeJeu.length) {
    var snd = new Audio("391539__mativve__electro-win-sound.wav");
    snd.play();
    necessaryZoom = Math.round(Math.random() * 5 + 14);
    tourJeu(tableauDeJeu[nbClick]);
    //console.log('coucou');
    monument.addEventListener('click', onMonumentClick);
  } else {
    window.open("bravo.php","_self");
  }

};

map.on('zoomend', function() {
    var currentZoom = map.getZoom();

    console.log("zoom actuel : " + map.getZoom() + ", zoom max nécessaire : " + necessaryZoom,", zoom min nécessaire : " + 14);
    if (currentZoom > necessaryZoom) {
      map.removeLayer(monument);
    }
    else if (currentZoom < 14) {
      map.removeLayer(monument);
    } else {
      map.addLayer(monument);
    }
});

//permet de savoir à quel endroit on a cliqué. C'est utile pour la soluce
function onMapClick(e) {
    console.log(e.latlng);
};

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

	  window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)

  },

	// Met à jour le compte à rebours (tic d'horloge)
	tick: function(){
    //console.log(this.jeuFini);
    if (this.jeuFini == false){     // sie le temps n'est pas écoulé on fait le tick suivant
  		// Instant présent
  		var timeNow  = new Date();

  		// Calcul du temps restant
  		var diff = this.dateDiff(timeNow, this.targetTime);
      // Si il reste moins de 5 minutes le temps se met en gras et en rouge
      if (diff.min < 1) {
        this.displayElement.min.innerHTML = "<b>" + diff.min + "<b>";
        this.displayElement.min.style.color = "red";
        this.displayElement.sec.innerHTML = "<b>" +  diff.sec + "<b>";
        this.displayElement.sec.style.color = "red";
      } else {
        this.displayElement.min.innerHTML = diff.min;
        this.displayElement.min.style.color = "black";
        this.displayElement.sec.innerHTML = diff.sec;
        this.displayElement.sec.style.color = "black";
      }
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
    var tmp = date2 - date1 + 1200000 / 4 ;  //1200000 correspondent à 20 minutes, 1200000 ms / 60 = 20s

		tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
		diff.sec = tmp % 60;                    // Extraction du nombre de secondes
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
		diff.min = tmp % 60;                    // Extraction du nombre de minutes

		return diff;
	}
};
