<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>INTRO</title>
    <link rel= "stylesheet" href="intro.css"/>
  </head>
  <? session_start() ?>
  <body>
    <h1 id=titre>TITRE DU JEU</h1>
    <img id=logoENSG src="/ENSG.png" alt="">
    <img id=agents src="/silhouette-3129148_1280.png" alt="">
    <p id=intro>Bienvenue agent! Votre mission aujourd'hui sera de retrouver les monuments parisiens. <br>En effet, nos adversaires ont caché les monuments afin de dérouter les touristes. Les monuments ont été cachés à différentes échelles, vous devrez donc user de  </p>
    <a href="index.php" title=""><input id=jouer  type="submit" name="jouer" value="Jouer"></a>
    <p id=regle>Regle du jeu : retrouver les monuments. Ils apparaissent en fonction du zoom et de la position de la carte.</p>
    <footer id=footer>2018 - Paul Miancien - Enzo Corvi - ENSG<footer>
  </body>
</html>
