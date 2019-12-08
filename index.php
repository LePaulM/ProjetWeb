<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>TITRE DU JEU</title>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/master/leaflet.css" />
    <script src="http://cdn.leafletjs.com/leaflet/master/leaflet.js"></script>
   <link rel= "stylesheet" href="jeuGeo.css"/>
   <link rel="shortcut icon" href="favicon.ico" />
  </head>
  <body onload="init();">
    <?php /*
        $link = mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');

        if (!$link) {
          die('Erreur de connexion');
        } else {
          echo 'Succès... ';
        }
  */  ?>
    <p id=regle>Règle du jeu : <br>Trouver le monument désigné par l'énigme. L'ennemi les aura caché en profondeur, donc si vous pensez avoir trouvé la solution à leur énigme, n'hésitez pas à zoomer et dézoomer à sa position afin de ne pas passer à côté!</p>
    <p id=enigmeEnCours>Enigme en cours : </p>
    <div id="countdown">
    	<strong>Temps restant</strong> :<br>
    	<span id="countdown_min" >--</span>
      <span> : </span>
    	<span id="countdown_sec" >--</span>
    </div>
    <p id=nbTrouver>Nombre d'énigmes résolues : 0/10</p>
    <a  href="index.php" title=""><input id=reset type="submit" name="jouer" value="Reset"></a>
    <p id=monumentTrouve><b>Monuments trouvés : </b></p>
    <div id=map> </div>

    <footer id=footer>2019 - Paul Miancien - Enzo Corvi - ENSG<footer>

    <script src=jeuGeo.js></script>
  </body>
</html>
