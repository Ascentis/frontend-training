let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

// slice operation is non-destructive for the origin value
console.log('arr1.slice(0, 1)', arr1.slice(0, 1));
console.log('arr1', arr1);

// splice operation is destructive for the origin value
console.log('arr2.splice(0, 1)', arr2.splice(0, 1));
console.log('arr2', arr2);
