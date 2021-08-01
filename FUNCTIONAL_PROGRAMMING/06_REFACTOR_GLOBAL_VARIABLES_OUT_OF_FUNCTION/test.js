// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(array, bookName) {
  let newArray = [...array] 
  //bookList.push(bookName);
  //return bookList;
  newArray.push(bookName)
  return newArray;
  
}

function remove (array, bookName) {
    let newArray = [...array];
  //var book_index = bookList.indexOf(bookName);
  var book_index = newArray.indexOf(bookName)
  if (book_index >= 0) {

    //bookList.splice(book_index, 1);
    //return bookList;
    newArray.splice(book_index, 1);
    return newArray;

    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log('newBookList', newBookList)
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);