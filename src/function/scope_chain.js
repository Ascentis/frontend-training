function b() {
  // b's outer reference envrionment is global
  console.log(`myVar in function b(): ${myVar}`);
}

function a() {
  let myVar = 2;
  b();
}

let myVar = 1;
a();

function c() {
  function d() {
    // d's outer reference environemt is c()
    console.log(`my new var in function d() ${myNewVar}`);
  }
  let myNewVar = 2;
  d();
}

let myNewVar = 1;
c();
