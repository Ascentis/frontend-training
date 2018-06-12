const person = {
  printInfo: function(city, state) {
    return `${this.title} ${this.name} ${city} ${state}`;
  }
};

const personArrow = {
  printInfo: (city, state) => `${this.title} ${this.name} ${city} ${state}`
};

const person1 = {
  title: 'Mr',
  name: 'superman'
};

console.log('call and apply example');
console.log(person.printInfo.apply(person1, ['Jax', 'FL']));
console.log(person.printInfo.call(person1, 'Jax', 'FL'));

// bind() is very similar to call, but the difference is: bind() do not actually invoke a function,
// but instead only "change" the funnction
console.log('bind example');
console.log(person.printInfo.bind(person1)('Jax', 'FL'));
console.log(person.printInfo.bind(person1, 'Jax')('FL'));

// using arrow function will automatically bind "this" to the scope of declaration
// using arrow function is equavalent to person.printInfo.bind(person)
console.log('arrow function example');
console.log(personArrow.printInfo.apply(person1, ['Jax', 'FL']));
console.log(personArrow.printInfo.call(person1, 'Jax', 'FL'));

// more example, which function don't need to be inside a object
function shape() {
  console.log(`this.width: ${this.width}, this.height: ${this.height}`);
}
var square = {
  height: 10,
  width: 10
};

shape.call(square);
