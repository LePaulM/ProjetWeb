<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>TITRE DU JEU</title>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/master/leaflet.css" />
    <script src="http://cdn.leafletjs.com/leaflet/master/leaflet.js"></script>
   <link rel= "stylesheet" href="jeuGeo.css"/>
  </head>
  <body>
    <p id=regle>Regle du jeu : <br>Trouver le monument désigné par l'énigme.</p>
    <p id=enigmeEnCours>Enigme en cours : </p>
    <p id=nbTrouver>Nombre d'énigmes résolues : 0/21</p>
    <a  href="index.php" title="lien vers le jeu une fois que le joueur a cliqué"><input id=reset type="submit" name="jouer" value="Reset"></a>
    <p id=monumentTrouve>Monuments trouvés : </p>
    <div id=map> </div>
    <script src=jeuGeo.js></script>
  </body>
</html>
