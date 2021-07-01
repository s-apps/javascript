var myArray = [];
var i = 10;

do {
    console.log(i)
    if (i == 10) {
        myArray.push(i);
    }
    i++;
    if (i == 11) {
        break;
    }
}
while (i <= 11);

console.log(myArray)