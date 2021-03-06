/**
 * JS is based on Prototype based inheritance, which is quite tricky compare to class inheritance
 * But need to aware that in JS class inheritance is just syntax sugar, behind the scene prototype inheritance is still used
 */
function Person(name, ...args) {
  this.name = name;
  this.greeting = function() {
    console.warn("Hi! I'm " + this.name + '.');
  };
}

var person1 = new Person('John');

var person2 = Object.create(person1);

console.log('person1', person1);

console.log('person2', person2);
console.log('person2 fields', person2.name, person2.greeting);
person2.name = 'Jane';
console.log('person2 greeting', person2.greeting());

Person.prototype.printName = function() {
  console.log('Name printed', this.name);
};

var person3 = new Person('person3');
person3.printName();
