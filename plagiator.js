function plagiat() {
  console.log("wlaczyles funkcje");
  var tresc = document.getElementById('plagiat').value
  var tablica = tresc.split(' ');
  var min = 1, max = tablica.length;
  var zapis
  var url="https://www.synonimy.pl/synonim/"+tablica[random]+"/"
  var method = "get"
  var random = Math.floor(Math.random() * (max - min +1)) + min - 1;
  console.log(random);
  console.log(tablica[random]);

  $.ajax({
    url: "plagiator.php?plag_word="+tablica[random],
    success: function(result){
      console.log(result);
    }
  })
}
