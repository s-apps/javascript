let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
    obj.glide = function(){
        return 'glide';
    }
}

glideMixin(boat);
glideMixin(bird);

console.log(bird.glide())
console.log(boat.glide())