// JS has first class function, we can pass functiona aroud just like variables
// This means it's ok to pass function as argument to another function

function checkLimit(testValue, checker) {
  return checker(testValue);
}
console.log("simple example of check value");
console.log(checkLimit(10, (x) => x < 10));
console.log(checkLimit(10, (x) => x > 10));

function mapEach(arr, action) {
  newArr = [];
  for (item in arr) {
    newArr.push(action(item));
  }
  return newArr;
}

console.log("map to each value, very similar to ES6 helper functions");
console.log(mapEach([1, 2, 3], (x) => x * 10));
console.log(mapEach([1, 2, 3], (x) => x > 10));
console.log(mapEach([1, 2, 3], (x) => x < 1));
