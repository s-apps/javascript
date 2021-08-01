function nonMutatingSplice(cities) {
  // Only change code below this line
  //return cities.splice(3);
  return cities.slice(0, cities.length - 2);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));