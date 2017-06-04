$(document).ready(function(){

  function umdrehen(auswahl){

    $(auswahl).mouseover(function(){
      $(auswahl+" .cube-front").css({"top": "-100","opacity":"0"});
      $(auswahl+" .cube-bottom").css({"top":"80","opacity": "1"});
    })

    $(auswahl).mouseout(function(){
      $(auswahl+" .cube-front").css({"top":"80","opacity":"1"});
      $(auswahl+" .cube-bottom").css({"top":"610","opacity": "0"});
    })
  }

  function weiterleitung (auswahl, url){
    $(auswahl).click(function(){
      window.open(url, '_blank');
    })
  }

// funktionen auf alle felder ausweiten

umdrehen(".projektHeroku");
umdrehen(".projektGitHub");
umdrehen(".projektFreeCodeCamp");
umdrehen(".projektWordpress");
umdrehen(".projektLebenslauf");


weiterleitung(".projektHeroku", "/projekte/heroku.html");

})
