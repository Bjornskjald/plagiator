function plagiat() {
  console.log("wlaczyles funkcje")
  var tresc = document.getElementById('plagiat').value
  var tablica = tresc.split(' ');
  var min = 1, max = tablica.length;
  var random = Math.floor(Math.random() * (max - min +1)) + min;
  console.log(random)
  console.log(tablica[random])
}
