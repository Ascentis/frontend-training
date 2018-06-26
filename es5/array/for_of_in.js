const testArray = ['one', 'two', 'three'];

console.log('original array', testArray);

console.log('=========== for in Array ============');
for (let item in testArray) {
  console.log(item);
}

console.log('=========== for of Array ============');
for (let item of testArray) {
  console.log(item);
}

/**
 * Notice that Object is not iterable, hence cannot use for...of
 */
const testObject = { '1': 'one', '2': 'two', '3': 'three' };
console.log('original Object', testObject);
console.log('=========== for in object, object key will be iterated ========');
for (let item in testObject) {
  console.log(item);
}

/**
 * for...of loop can be used in string
 */
testStr = 'hello world';
for (let item of testStr) {
  console.log(item);
}
