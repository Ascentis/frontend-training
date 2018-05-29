function greet() {
  console.log("hello");
};

greet.word = "word";

console.log(greet.word); // word
greet(); // hello

/* function statement, not return a value */
function sayHi() {
  console.log("hi");
};

/* function expression actually return a function and assocaite with the name */
var anonymousSayHi = function () {
  console.log('anonymous hi');
};


sayHi();
anonymousSayHi();
