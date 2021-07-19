function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newArray.join(' ');
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));