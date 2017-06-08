const herokuProjekt={
  "one": {
    "class": ".votingApp",
    "url": "https://derdrache-voting-app.herokuapp.com/#/"
  }
};


function weiterleitung (auswahl, url){
  $(auswahl).click(function(){
    window.open(url, '_blank');
  })
}

weiterleitung(herokuProjekt.one.class, herokuProjekt.one.url);
