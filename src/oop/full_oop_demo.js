function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function () {
  console.log("Hi! I\'m " + this.name.first + ".");
};

var person1 = new Person("John", "Wick", 40, "Male", "cars");
person1.greeting();

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
};

Teacher.prototype.getSubject = function () {
  console.log("subject is", this.subject);
};

var teacher1 = new Teacher("John", "Wick", 40, "Male", "cars", "combat");
teacher1.getSubject();

// this will not work now, we need something to let teacher access to greeting. teacher1.greeting();
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var teacher2 = new Teacher("John", "Wick", 40, "Male", "cars", "combat");
teacher2.greeting();



