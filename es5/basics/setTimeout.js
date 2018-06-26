function logNumbers() {
  console.log(1);
  let timeout1 = setTimeout(function() {
    console.log(2);
  }, 1000);
  clearTimeout(timeout1);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
}

logNumbers();
