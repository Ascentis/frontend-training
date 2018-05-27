const person = {
  printInfo: function(city, state) {
    return `${this.title} ${this.name} ${city} ${state}`;
  }
};

const personArrow = {
  printInfo: (city, state) => `${this.title} ${this.name} ${city} ${state}`
};

const person1 = {
  title: "Mr",
  name: "superman"
};

console.log(person.printInfo.apply(person1, ["Jax", "FL"]));
console.log(person.printInfo.call(person1, "Jax", "FL"));

// using arrow function will automatically bind "this" to the scope of declaration
console.log(personArrow.printInfo.apply(person1, ["Jax", "FL"]));
console.log(personArrow.printInfo.call(person1, "Jax", "FL"));
