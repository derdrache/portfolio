const projekt={
  "one" :{
    "class": ".projektHeroku",
    "url": "heroku.html"
  },
  "two": {
    "class":".projektGitHub",
    "url": "https://github.com/derdrache"
  },
  "three":{
    "class":".projektFreeCodeCamp",
    "url": "https://www.freecodecamp.com/derdrache"
  },
  "four":{
    "class": ".projektWordpress",
    "url": "http://programmieren-lernen.blog/"
  },
  "five":{
    "class": ".projektLebenslauf",
    "url": ""
  }
}

$(document).ready(function(){

  function umdrehen(auswahl){

    $(auswahl).mouseover(function(){
      $(auswahl+" .cube-front").css({"top": "-100","opacity":"0"});
      $(auswahl+" .cube-bottom").css({"top":"80","opacity": "1"});
    })

    $(auswahl).mouseout(function(){
      $(auswahl+" .cube-front").css({"top":"80","opacity":"1"});
      $(auswahl+" .cube-bottom").css({"top":"450","opacity": "0"});
    })
  }

  function weiterleitung (auswahl, url){
    $(auswahl).click(function(){
      window.open(url, '_blank');
    })
  }


// Aktivierung der Funktionen

umdrehen(projekt.one.class);
umdrehen(projekt.two.class);
umdrehen(projekt.three.class);
umdrehen(projekt.four.class);
umdrehen(projekt.five.class);


$(".projektHeroku").click(function(){window.location.href = projekt.one.url})
weiterleitung(projekt.two.class,projekt.two.url);
weiterleitung(projekt.three.class, projekt.three.url);
weiterleitung(projekt.four.class, projekt.four.url);

})
