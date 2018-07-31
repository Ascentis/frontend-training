/**
 * The following example is a great practical example to detect if a string has balance parentheses
 */
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === '(') {
      return ++previous;
    }

    if (char === ')') {
      return --previous;
    }

    return previous;
  }, 0);
}

console.log(balancedParens('((())'));
console.log(balancedParens('(()'));
console.log(balancedParens('(("hello"))'));
