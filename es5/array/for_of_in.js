const testArray = ['one', 'two', 'three'];
console.log('original array', testArray);

console.log('=========== for...in Array will return indexes ============');
for (let item in testArray) {
  console.log(item);
}

console.log('=========== for...of Array will return each element (value) of Array ============');
for (let item of testArray) {
  console.log(item);
}

/**
 * Notice that Object is not iterable, hence cannot use for...of
 */
const testObject = { '1': 'one', '2': 'two', '3': 'three' };
console.log('original Object', testObject);
console.log('=========== for...in Object will return each object key (instead of value) ========');
for (let item in testObject) {
  console.log(item);
}

console.log('=========== Object is not iterable, hence cannot use for...of ========');

/**
 * for...of loop can be used in string
 */
testStr = 'hello world';
console.log('original string', testStr);

console.log('=========== for...in String will return indexes (just like Array) ========');
for (let item in testStr) {
  console.log(item);
}

console.log('=========== for...of String will return each character of the String ========');
for (let item of testStr) {
  console.log(item);
}
