const arr1 = [1, 2, 3];

console.log(
  arr1.forEach(function(x) {
    return x * 2;
  })
);

const arr2 = [1, 2, 3];
console.log(
  arr2.map(function(x) {
    return x * 2;
  })
);

// We can notice the return in foreach not actully return the value for each element (just a runner, not a mutator)
arr1.forEach((num, index) => {
  arr1[index] = num * 2;
  // we can use ```return arr1[index] = num * 2;```, though it is not very necessary
});

console.log("manually set value", arr1);

// Also, map is more efficient way
