class Vehicle {
  constructor(protected numberOfWheels: number) {}
  showNumberOfWheels() {
    console.log(`Number of wheels in vehicle: ${this.numberOfWheels}`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
  updateNumberOfWheels(newNumberOfWheels: number) {
    this.numberOfWheels = newNumberOfWheels;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorcycle = new Motorcycle();
motorcycle.showNumberOfWheels();

const auto = new Automobile();
auto.showNumberOfWheels();
