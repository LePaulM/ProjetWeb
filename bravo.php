<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>GAGNÉ !</title>
    <link rel= "stylesheet" href="bravo.css"/>
  </head>
  <? session_start() ?>
  <body>
    <h1 id=titre>TITRE DU JEU</h1>
    <img id=logoENSG src="/ENSG.png" alt="">
    <p id=text>Bravo agent! Grâce à vous nous avons pu confondre ces criminels.<br> Si vous n'êtes pas satisfait de votre prestation lors de cette mission, vous pouvez toujours retenter votre chance : </p>
    <a  href="index.php" title=""><input id=rejouer type="submit" name="rejouer" value="Rejouer"></a>
    <footer id=footer>2018 - Paul Miancien - Enzo Corvi - ENSG<footer>
  </body>
</html>
