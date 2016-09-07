<?php 
$zmienna = "https://www.synonimy.pl/synonim/" . $_GET['plag_word'] . "/";
echo file_get_contents($zmienna);
?>
