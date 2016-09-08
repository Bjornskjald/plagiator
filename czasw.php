<?php 
$zmienna = "http://sjp.pwn.pl/szukaj/" . $_GET['plag_word'] . ".html";
$cont = file_get_contents($zmienna);
$con1 = explode("sjp.pwn.pl/so/", $cont);
$con2 = explode("</span>", $con1[1]);
$con3 = explode(">", $con2[0]);
$con4 = explode("<", $con3[1]);
echo $con4[0];
?>
