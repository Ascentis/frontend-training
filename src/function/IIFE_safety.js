// notice, this is a safe approach, because the greeting inside is different from the global one
var greeting = "hello";

(function (name) {
  var greeting = "Hola";
  console.log(`${greeting}! ${name}`);
}("John"));

console.log(greeting);

// If we really want to attach to global scope, we can achieve this goal by passing in global (window object)
(function (global, name) {
  global.greeting = "Hola";
  console.log(`${greeting}! ${name}`);
}(window, "John"));

console.log(greeting);
