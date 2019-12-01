function dwarfRollCall(dwarves){
  var string="";
  for(let i=dwarves.length/2; i<dwarves.length; i++){
    string+=`${i+1}. ${dwarves[i]} `;
  }
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  var newArray=[];
  for(let i=0; i<planeteerCalls.length; i++){
    newArray.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return newArray;
}

function longPlaneteerCalls(calls){
  for(let i=0; i<calls.length; i++){
    if(calls[i].length>4)
    return true;
  }
  return false;
}

function findTheCheese(strings){
  for(let i=0; i<strings.length; i++){
    var cheese=["cheddar", "gouda", "camembert", "swiss"];
    if(cheese.includes(strings[i]))
    return strings[i];
  }
  return "no cheese!";
}

function wordsWithB(words){
  var newArray=[];
  for(let i=0; i<words.length; i++){
    if(words[i].startsWith("b")){
      newArray.push(words[i]);
    }
    return newArray;
  }
}
