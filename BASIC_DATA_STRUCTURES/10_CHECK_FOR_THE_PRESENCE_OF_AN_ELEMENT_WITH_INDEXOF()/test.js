function quickCheck(arr, elem) {
    return arr.indexOf(elem) < 0 ? false : true;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));