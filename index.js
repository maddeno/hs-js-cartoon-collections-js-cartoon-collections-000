function dwarfRollCall(dwarves) {
  var string=``;
  for (let i=0; i<dwarves.length; i++){
    string+=`${i+1}. ${dwarves[i]} `;
  }
return string;
}

function summonCaptainPlanet(planeteerCalls){
  for (let i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i]=planeteerCalls[i].toUpperCase();
    planeteerCalls[i]+=`!`;
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (let i=0; i<words.length; i++){
    var string= words[i];
    if (string.length>4)
    return true;
  }
  return false;
}

function findTheCheese (foods) {
  var cheese=["cheddar", "gouda", "camembert"];
  for(let i=0; i<foods.length; i++){
    var currentFood= foods[i];
    if(cheese.includes(currentFood)){
      return currentFood;
    }
  }
  return "no cheese!";
}
