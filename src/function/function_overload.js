// There no actual overload in JS function
// On the other hand, JS function support optional arguments, which works like overload
function greet(firstName, lastName, ...others) {
  console.log(firstName);
  console.log(lastName);
  console.log(arguments);
  console.log(others);
}

greet('John', 'Wick', 'NYC');
