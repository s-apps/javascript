function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(5);

console.log(myHouse instanceof House);