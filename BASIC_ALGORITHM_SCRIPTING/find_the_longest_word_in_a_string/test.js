function findLongestWordLength(str) {
 const array = str.split(' ');
 let maior = array[0].length;
 for(let i = 0; i < array.length; i++){
     if(array[i].length > maior){
         maior = array[i].length;
     }
 }
 return maior;
}
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));