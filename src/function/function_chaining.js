function func1(var1) {
  return function(var2) {
    return var1 * var2;
  };
}

console.log('func1(1)(2)', func1(1)(2));

// we can enhance the function to support both func2(var1, var2) and func2(var1)(var2)
function func2(var1, var2) {
  if (var2) {
    return var1 * var2;
  } else {
    return function(var3) {
      return var1 * var3;
    };
  }
}

console.log('func2(1)(2)', func2(1)(2));
console.log('func2(1, 2)', func2(1, 2));
