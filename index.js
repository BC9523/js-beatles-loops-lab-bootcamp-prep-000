function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var whoPlays = [];
  var string;
  for(var i = 0; i < 4; i++) {
    string = `${arrayMusicians[i]} plays ${arrayInstruments[i]}`;
    whoPlays.push(string);
  }  
  return whoPlays;
}

function johnLennonFacts(){
  
}