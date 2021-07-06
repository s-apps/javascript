// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   const arr = list;
//   return arr;
// }
// const arr = removeFirstTwo(source);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [ a, b, ...array ] = list;
  return array;
}
const arr = removeFirstTwo(source);
console.log('arr', arr);