namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected numberOfWheels: number) {}
    abstract updateNumberOfWheels(newNumberOfWheels: number): void;
    showNumberOfWheels() {
      console.log(`Number of wheels in the vehicle: ${this.numberOfWheels}`);
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateNumberOfWheels(newNumberOfWheels: number) {
      this.numberOfWheels = newNumberOfWheels;
      console.log(`Motorcycle has: ${this.numberOfWheels} wheels now`);
    }
  }
  
  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateNumberOfWheels(newNumberOfWheels: number) {
      this.numberOfWheels = newNumberOfWheels;
      console.log(`Auto has: ${this.numberOfWheels} wheels now`);
    }
    showNumberOfWheels() {
      console.log(`Number of wheels in the auto: ${this.numberOfWheels}`);
    }
  }
  
  const motorcycle = new Motorcycle();
  motorcycle.updateNumberOfWheels(1);
  
  const auto = new Automobile();
  auto.showNumberOfWheels(); 
  auto.updateNumberOfWheels(3); 
}
