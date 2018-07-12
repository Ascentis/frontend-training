function greeting(words) {
  return function(name) {
    console.log(`${words} ${name}`);
  };
}

greeting('Hi')('John');

// execution context is still sitting in memory to remember the Hi, which is the key idea of closure
// GC will only clear it when there's no reference to it anymore (similar to Java)
var sayHi = greeting('Hi');
sayHi('Johnson');

// weird part of Closure
function generateFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;
}

var funcFactory = generateFunctions();
console.log('----------------------------- function');
funcFactory[0]();
funcFactory[1]();
funcFactory[2]();

// solve this weird part, we can use ES6 let keyword (instead of var), or we can do following
// This solution will create a new context, so i is no longer refer to the original
function generateFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var funcFactory2 = generateFunctions2();
console.log('----------------------------- function2');
funcFactory2[0]();
funcFactory2[1]();
funcFactory2[2]();
