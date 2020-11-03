<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



<?php

  include("funcs.inc.php");

  if (file_exists("desayunos.txt")) { //Comprobamos que el fichero exista
    echo mostrarLista("toDo.txt");
  } else {
      echo "No hay lista creada";
  }

?>    
</body>
</html>