function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var whoPlays = [];
  var string;
  for(var i = 0; i < 4; i++) {
    string = `${arrayMusicians[i]} plays ${arrayInstruments[i]}`;
    whoPlays.push(string);
  }  
  return whoPlays;
}

function johnLennonFacts(arrayFacts){
  var string;
  var i = 0;
  var facts = [];
   while(i< arrayFacts.length){
     string = `${arrayFacts[i]}!!!`;
     facts.push(string);
   }
   return facts
}