let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

/**
 * slice operation is non-destructive for the origin value
 * for slice(), the second arg is the end index
 */
console.log('arr1.slice(1, 2)', arr1.slice(1, 2));
console.log('arr1', arr1);

/**
 * splice operation is destructive for the origin value
 * for splice, the second arg is the number of values to get
 */
console.log('arr2.splice(1, 2)', arr2.splice(1, 2));
console.log('arr2', arr2);
