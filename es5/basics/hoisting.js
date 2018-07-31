var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber(); // will be undefined because of hoisting

/**
 * Why it is undefined? Instead of 50 or 100? Very not intuitive
 * The reason is: for JavaScript, there are two stage:
 * 1. creation phase, where all the variables have assigned a memory space (but not value)
 * 2. execution phase, where all the variables value assigned
 *
 * For the example above, in creation stage two things happened:
 * 1. outside the function, "num" variable allocate a memory space
 * 2. inside the function, since we have a new num, the local variable "num" allocate another memory space
 *
 * In the execution stage, when we call console.log(num), it refers to local "num"
 * When the console.log called, local num didn't assign a value yet, so it will be undefined
 */
