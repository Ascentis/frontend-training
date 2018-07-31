const arr = [1, 2, 3];

console.log(
  arr.every(function(x) {
    return x > 1;
  })
);

console.log(
  arr.some(function(x) {
    return x > 1;
  })
);
