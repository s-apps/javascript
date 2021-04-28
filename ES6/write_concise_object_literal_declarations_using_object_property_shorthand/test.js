const createPerson = (name, age, gender) => {
    return {
      name: name,
      age: age,
      gender: gender
    };
};

/*
Use object property shorthand with object literals to create and return an object with name, 
age and gender properties.
*/

const createPersonShorthand = (name, age, gender) => {
    return {
      name,
      age,
      gender
    };
};

console.log(createPersonShorthand('Silverio', 54, 'masculine'));


