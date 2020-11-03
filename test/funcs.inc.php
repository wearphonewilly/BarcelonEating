<?php

  //Función con la que mostraremos la lista de elementos que hay

    function mostrarLista($fileName){
        $todoFile = fopen($fileName, "r");

        while(!feof($todoFile)){
           echo fgets($todoFile)."<br>";
        }

        fclose($todoFile);
    }

?>
