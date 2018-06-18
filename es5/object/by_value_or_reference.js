var a = 2;
var b = a;
b = 3;
console.log(a); // 2, primitive type always pass by value

var c = [1, 2];
var d = c;
d.push(3);
console.log(c); // [1,2,3], mutable type pass by reference

c = [1, 2];
d = c;
d = [1, 2, 3];
console.log(c); // [1,2], re-assignment does not mutate the original reference
