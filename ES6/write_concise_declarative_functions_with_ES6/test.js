const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

/*
Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
*/

const bicycleConcise = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
