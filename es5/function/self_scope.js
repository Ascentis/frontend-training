// use the following approach to avoid confusion of this variable for "function inside an object"

var myCar = {
  color: 'Blue',
  logColor: function() {
    // create a local variable "self" refer to this (which is myCar object)
    var self = this;
    console.log('In logColor - this.color: ' + this.color);
    console.log('In logColor - self.color: ' + self.color);
    (function() {
      console.log('In IIFE - this.color: ' + this.color);
      console.log('In IIFE - self.color: ' + self.color);
    })();
  }
};

myCar.logColor();
