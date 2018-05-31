// function borrowing
const person = {
  printInfo: function(city, state) {
    return `${this.firstName} ${this.lastName} ${city} ${state}`;
  }
};

var person2 = {
  firstName: "John",
  lastName: "Wick"
};

console.log(person.printInfo.call(person2, "JAX", "FL"));
console.log(person.printInfo.bind(person2)("JAX", "FL"));
console.log(person.printInfo.apply(person2, ["JAX", "FL"]));

// function currying (by pass parameters)
function multiply(x, y) {
  return x * y;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(23));
