<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>TITRE DU JEU</title>
    <link rel= "stylesheet" href="intro.css"/>
  </head>
  <? session_start() ?>
  <body>
    <h1 id=titre>TITRE DU JEU</h1>
    <p id=intro>Bienvenue agent! Votre mission aujourd'hui sera de retrouver les monuments parisiens. <br>En effet, nos adversaires ont caché les monuments afin de dérouter les touristes.</p>
    <!-- c'est débile comme énigme puisque les gens savent où sont les monuments -->
    <label id=pseudo>Pseudo : <input type="text" name="pseudo"></label>
    <? //$_SESSION.append(pseudo)         //pourrait permettre de conserver les scores?> 
    <a href="index.php" title=""><input id=jouer  type="submit" name="jouer" value="Jouer"></a>
    <p id=regle>Regle du jeu : retrouver les monuments. Ils apparaissent en fonction du zoom et de la position de la carte.</p>
  </body>
</html>
