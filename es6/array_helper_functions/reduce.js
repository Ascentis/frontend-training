var numbers = [1, 2, 3];

var sum = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log("example1 for the number sum", sum);

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

var reducedColor = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log("example1 for reduced numbers", reducedColor);
