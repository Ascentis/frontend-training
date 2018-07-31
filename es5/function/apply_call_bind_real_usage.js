// function borrowing
const person = {
  printInfo: function(city, state) {
    return `${this.firstName} ${this.lastName} ${city} ${state}`;
  }
};

var person2 = {
  firstName: 'John',
  lastName: 'Wick'
};

/**
 * Notice in bind/call/apply, the "this" keyword in printInfo refers to person2
 */

// call is similar to bind, difference is: call invoke the function, but bind not
console.log(person.printInfo.call(person2, 'JAX', 'FL'));
console.log(person.printInfo.bind(person2, 'JAX', 'FL')());

// bind can be used in another flavor:
console.log(person.printInfo.bind(person2)('JAX', 'FL'));

// apply is similar to call, they both invoke functions, but apply will pass an array rather than arguments
console.log(person.printInfo.apply(person2, ['JAX', 'FL']));

/**
 * function currying (by pass parameters) is another usage of bind
 */
function multiply(x, y) {
  return x * y;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(23));
