const obj1 = {
  '1': 0,
  '1': 1,
  '2': 2,
  '3': 3
};

for (let key in obj1) {
  console.log(`${key} ${obj1[key]}`);
}

sym0 = Symbol('1');
sym1 = Symbol('1');
sym2 = Symbol('2');
sym3 = Symbol('3');
sym4 = Symbol('4');

const obj2 = {
  sym0: 0,
  sym1: 1,
  sym2: 2,
  sym3: 3
};

obj2[sym4] = 4;

for (let key in obj2) {
  console.log(`${key} ${obj2[key]}`);
}

var obj = {};

obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for (var i in obj) {
  console.log(i); // logs "c" and "d"
}
