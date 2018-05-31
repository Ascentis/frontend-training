class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  static create(name, type) {
    return new Vehicle(name, type);
  }

}
let car = Vehicle.create("Tesla", "car");
console.log(car.getName()); // Tesla
console.log(car.getType()); // car


class Sedan extends Vehicle {
  constructor(name, type, size) {
    super(name, "sedan");
    this.size = size || "small";
  }

  getSize() {
    return this.size;
  }
}
let sedan = new Sedan("Jetta");
console.log(sedan.getName());
console.log(sedan.getType());
console.log(sedan.getSize());
