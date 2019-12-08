<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>GAGNÉ !</title>
    <link rel= "stylesheet" href="bravo.css"/>
    <link rel="shortcut icon" href="favicon.ico" />
  </head>
  <? session_start() ?>
  <body onload="gagne();">
    <audio> <source src="270466__littlerobotsoundfactory__jingle-win-00.wav" type="audio/wav">Your browser does not support the audio element.</audio>
    <h1 id=titre>TITRE DU JEU</h1>
    <img id=logoENSG src="ENSG.png" alt="">
    <p id=text>Bravo agent! Grâce à vous nous avons pu confondre ces criminels.</p>
    <p id=reessayer>Si vous n'êtes pas satisfait de votre prestation lors de cette mission, vous pouvez toujours retenter votre chance : </p>
    <a  href="index.php" title=""><input id=rejouer type="submit" name="rejouer" value="Rejouer"></a>
    <footer id=footer>2019 - Paul Miancien - Enzo Corvi - ENSG<footer>

    <script src=bravo.js></script>
  </body>
</html>
