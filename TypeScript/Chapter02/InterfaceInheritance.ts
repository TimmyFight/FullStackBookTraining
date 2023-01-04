namespace InterfaceNamespace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  interface Vehicle extends Thing {
    numberOfWheels: number;
    updateNumberOfWheels: (newNumberOfWheels: number) => void;
    showNumberOfWheels: () => void;
  }

  class Motorcycle implements Vehicle {
    name: string;
    numberOfWheels: number;
    constructor(name: string){ 
      this.name = name;
    }
    updateNumberOfWheels(newNumberOfWheels: number) {
      this.numberOfWheels = newNumberOfWheels;
      console.log("Number of wheels updated to: " + this.numberOfWheels);
    }
    showNumberOfWheels() {
      console.log("Number of wheels: " + this.numberOfWheels);
    }
    getFullName() {
      return "MC-" + this.name;
    }
  }

  const motor = new Motorcycle("small-motorcycle");
  console.log(motor.getFullName());
}
