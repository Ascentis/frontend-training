console.log(this);

function a() {
  console.log(this);
}

var b = function() {
  this.test = 'test';
  console.log(this);
};

a();
b();
console.log(test); // should be test

// for all the example above, ahh the this are attached to global scope

// example for non-global this, now the "this keyword" bind to the object inside scope
var c = {
  name: 'test',
  log: function() {
    this.name = 'new test';
    console.log(this);
  }
};

c.log();

// weird part
// example for non-global this, now the "this keyword" bind to the object inside scope
var d = {
  name: 'test',
  log: function() {
    this.name = 'new test';
    console.log(this); // d scope

    // the inner function scope will bind to global for both declaration or expression
    var setName = function(newName) {
      this.name = newName;
      console.log('this inside', this); // weirdly attach to global!!!
    };
    setName('updated again with new name'); // d scope
    console.log(this);
  }
};

d.log();

// solution to workaround with this situation
var e = {
  name: 'test',
  log: function() {
    var self = this;
    self.name = 'new test';
    console.log(this);

    var setName = function(newName) {
      self.name = newName;
      console.log('this inside the self/this is now', self);
    };
    setName('updated again with new name'); // weirdly attach to global!!!
    console.log(this);
  }
};

e.log();

// nested function example
function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
      function d() {
        console.log(this);
      }
      d();
    }
    c();
  }
  b();
}

a(); // all the this in the nested function refer to global object
