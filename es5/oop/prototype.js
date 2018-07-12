var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

var john = {
  firstName: 'John',
  lastName: 'Wick'
};

// We should never do the following ever, it's just demo
john.__proto__ = person;
console.log(john.getFullName()); // this will work, but this way we have performance issue
console.log(john.__proto__.firstName); // will be john, because it hides the default due to prototype chain

var jane = {
  firstName: 'Jane'
};

jane.__proto__ = person;
console.log(jane.getFullName()); // this will work, but this way we have performance issue

for (let prop in john) {
  console.log(prop + ': ' + john[prop]);
}

console.log('check if it is own property');
for (let prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ': ' + john[prop]);
  }
}
