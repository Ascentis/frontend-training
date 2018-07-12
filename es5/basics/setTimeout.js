function logNumbers() {
  console.log(1);
  // we create a setTimeout, and assign it to a variable
  let timeout1 = setTimeout(function() {
    console.log(2);
  }, 1000);

  // we can use variable to refer to the setTimeout, and clear it,
  // after clearTimeout, the callback function inside setTimeout won't be called
  clearTimeout(timeout1);

  // the non-setTimeout statement will always be called first, even when the delay is 0
  setTimeout(function() {
    console.log(3);
  }, 0);

  console.log(4);
}

logNumbers();
