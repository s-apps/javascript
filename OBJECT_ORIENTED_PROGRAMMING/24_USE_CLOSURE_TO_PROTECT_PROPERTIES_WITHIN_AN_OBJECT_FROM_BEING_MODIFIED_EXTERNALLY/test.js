function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
        return weight;
    }
  
  }

  let bird = new Bird();
  console.log(bird.getWeight());