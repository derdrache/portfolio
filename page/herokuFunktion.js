const herokuProjekt={
  "one": {
    "class": ".votingApp",
    "url": "https://derdrache-voting-app.herokuapp.com/#/"
  },
  "two":{
    "class": ".nightlife",
    "url": "https://derdrache-nightlife.herokuapp.com/"
  },
  "three":{
    "class": ".bookTrading",
    "url": "https://derdrache-book-trading.herokuapp.com/#/"
  }

};


function weiterleitung (auswahl, url){
  $(auswahl).click(function(){
    window.open(url, '_blank');
  })
}

weiterleitung(herokuProjekt.one.class, herokuProjekt.one.url);
weiterleitung(herokuProjekt.two.class, herokuProjekt.two.url);
weiterleitung(herokuProjekt.three.class, herokuProjekt.three.url);
