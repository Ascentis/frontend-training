const arr = [1, 2, 3];

console.log(
  arr.find(function(x) {
    return x > 1;
  })
);

console.log(
  arr.filter(function(x) {
    return x > 1;
  })
);

// The difference between find and filter is: find return the first element matching requirement,
// filter return all elements matching requirement in an array
