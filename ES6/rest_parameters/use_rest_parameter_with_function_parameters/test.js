function howMany(...args) {
    return 'You have passed ' + args.length + ' arguments.';
}
console.log(howMany(0, 1, 2));
console.log(howMany('string', null, [1, 2, 3], {}));

/*-----------------------------------------------------------------*/

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(5));
console.log(sum());

/*
Modify the function sum using the rest parameter in such a way that the function sum is able to take
any number of arguments and return their sum.
*/

const sumRestParameter = (...args) => {
    return args.reduce((a, b) => a + b, 0);        
}
console.log('rest parameter', sumRestParameter(0, 1, 2));
console.log('rest parameter', sumRestParameter(1, 2, 3, 4));
console.log('rest parameter', sumRestParameter(5));
console.log('rest parameter', sumRestParameter());
