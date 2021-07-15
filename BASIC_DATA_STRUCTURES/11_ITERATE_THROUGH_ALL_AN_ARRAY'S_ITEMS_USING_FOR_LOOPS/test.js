function filteredArray(arr, elem) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
      if (!arr[i].includes(elem)) {
        newArr.push(arr[i]);
      }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));