function dwarfRollCall(dwarves) {
  var dwarfList = [];
  for (var i = 0; i < dwarves.length; i++) {
    dwarfList.push(`${i+1}. ${dwarves[i]} `);
  }
  return dwarfList.join("");
}

function summonCaptainPlanet(planeteerCalls) {

  var planeteerList = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerList.push(`${planeteerCalls[i]}! `)
  }
  var allCaps = planeteerList.map(function(x){
    return x.toUpperCase();
  })
  return allCaps;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}


function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for (var i = 0; i < cheese.length; i++) {
  if (foods.indexOf(cheese[i]) >= 0) {
    return cheese[i];
  }
  }
  return 'no cheese!'
  }
