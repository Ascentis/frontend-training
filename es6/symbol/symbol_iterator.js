const iterable1 = new Object();

console.log("example1 -------------");
iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable1]);
// expected output: Array [1, 2, 3]

console.log("example2 -------------");
function* foo(){
  yield 1;
  yield 2;
}

for (let o of foo()) {
  console.log(o);
  // expected output: 1
  break;
}

console.log("example3 -------------");
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2