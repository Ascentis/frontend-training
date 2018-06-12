// object key use type coerce, so 1 is equivalent to '1'
var obj = {
  1: 1,
  '1': 2
};

console.log('obj', obj);
console.log('obj[1]', obj[1]);
console.log("obj['1']", obj['1']);

var key1 = { name: 1 };
var key2 = { key: 1 };

var obj2 = {
  [key1]: 1,
  [key2]: 2
};

console.log('obj2', obj2);
