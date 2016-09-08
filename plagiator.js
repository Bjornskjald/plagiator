var tresc = new String;
var tablica = new Array;


function makeOutput() {
  console.log("wlaczyles funkcje");
  tresc = document.getElementById('plagiat').value;
  tablica = tresc.split(' ');
  for(var i in tablica){
    var temp = new Array;
    temp.push('<span id="')
    temp.push(i)
    console.log("i" + i)
    temp.push('" class="')
    temp.push(tablica[i])
    console.log(tablica[i])
    temp.push('">')
    temp.push('<a href="javascript:pobierzSlowo(\'')
    temp.push(tablica[i])
    temp.push('\')">')
    temp.push(tablica[i])
    temp.push('</a></span> ')
    console.log(temp.join(''))
    document.getElementById('output').innerHTML += temp.join('');
  }
}

function pobierzSlowo(slowo) {
	var synonim,diakryb;
	console.log(slowo);
	if(encodeURI(slowo.charAt(slowo.length-1)) === "%C4%85"){
		diakryb=true;
		slowo = slowo.substring(0, slowo.length-1) + "y";
		console.log(slowo);
	};
	if(slowo.charAt(slowo.length-1) === ","){
		slowo = slowo.substring(0, slowo.length-1);
		console.log(slowo);
	};
	if(slowo.charAt(slowo.length-1) === "."){
		slowo = slowo.substring(0, slowo.length-1);
		console.log(slowo);
	};
	var bezokolicznik = znajdzCzas(slowo)
	if(encodeURI(slowo.charAt(slowo.length-1)) === "%C4%87"){
		slowo = bezokolicznik;
	}
  $.ajax({
    url: "plagiator.php?plag_word="+slowo,
    success: function(result){
    	var temp = new Array;
			temp.push('<span id="choose_slowo">');
			temp.push(slowo);
			temp.push('</span>');
      var temp2 = result.split('<dd class="last">')[1].split('</dd>')[0].split(',');
      for(var i in temp2) {
        if(temp2[i].includes('href')) {
        	synonim = decodeURI(temp2[i].split('/synonim/')[1].split('/"')[0]);
        	if(diakryb){synonim = synonim.substring(0, synonim.length-1) + decodeURI("%C4%85")}
        	if(diakryb){slowo = slowo.substring(0, slowo.length-1) + decodeURI("%C4%85")}
        	var button = new Array;
        	button.push('<button onclick="zamienSlowa(\'');
					button.push(slowo);
					button.push('\', \'');
					button.push(synonim);
					button.push('\')">');
					button.push(synonim);
					button.push('</button>');
					console.log(button.join(''));
					temp.push(button.join(''));
        }
      }
      temp.push('<input type="text" placeholder="Ręcznie" id="ptx" />')
      temp.push('<button onclick="zamienSlowa(\'')
      temp.push(slowo + '\', ')
      temp.push('document.getElementById(\'ptx\').value')
      temp.push('">Zamien</button>')
      document.getElementById('choose').innerHTML = temp.join('');
      console.log('dodano')
    }
  })
}

function zamienSlowa(z, na) {
	var tekst = document.getElementById('output').innerHTML;
	var regex = new RegExp(z, "g")
	var nowyTekst = tekst.replace(regex, na);
	console.log(nowyTekst);
	document.getElementById('output').innerHTML = nowyTekst;
}

function znajdzCzas(slowo) {
  $.ajax({
    url: "czasw.php?plag_word="+slowo,
    success: function(result){
    	 console.log(result);
    }
  })
}
