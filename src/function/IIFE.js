// IIFE is Immediate Invoked Function Expression

// bad example
function test0(name) {
  console.log(`test1 ${name}`);
} ("john"); // this produce different result in Node and browser, and is WRONG to use


// what if we want to make test0 scenario right?
(function(name) {
  console.log(`test1 ${name}`);
}("john wick")); // notice that the argument "john wick" can be either inside or outside

// always use the following syntax
var test2 = function (name) {
  console.log(`test2 ${name}`);
}("wick");
