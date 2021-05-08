function whatIsInAName(collection, source) {
  var arr = [];

  var srcKeys = Object.keys(source);
  
    arr = collection.filter(function(obj) {
      for (var i = 0; i < srcKeys.length; i++) {
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
    return arr;
}

console.log(whatIsInAName(
    [
        { first: "Romeo", last: "Montague" }, 
        { first: "Mercutio", last: null }, 
        { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" }
));