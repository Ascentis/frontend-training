class Vehicle {
  constructor(props) {
    this.name = props.name;
    this.type = props.type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  static create(props) {
    return new Vehicle(props);
  }
}
let car = Vehicle.create({ name: 'Tesla', type: 'car' });
car.haha = 'haha';
console.log(car.name);
console.log(car.haha);
console.log(car.getName()); // Tesla
console.log(car.getType()); // car

class Sedan extends Vehicle {
  constructor(props) {
    super(props);
    this.type = 'sedan';
    this.size = props.size || 'small';
  }

  getSize() {
    return this.size;
  }
}

let sedan = new Sedan({ name: 'Jetta' });
console.log(sedan.getName());
console.log(sedan.getType());
console.log(sedan.getSize());
