namespace GenericNamespace {
  interface Wheels {
    count: number;
    diameter: number;
  }

  interface Vehicle<Type> {
    getName(): string;
    getWheelCount(): Type;
  }

  class AutoMobile implements Vehicle<Wheels> {
    constructor(private name: string, private wheels: Wheels){};

    getName(): string {
      return this.name;
    }
    getWheelCount(): Wheels {
      return this.wheels;
    }
  }

  class Chevy extends AutoMobile {
    constructor() {
      super("Chevy", {count: 4, diameter: 18});
    }
  }

  const chevy = new Chevy();
  console.log("Auto name: " + chevy.getName());
  console.log("Wheel informations: " + chevy.getWheelCount());
}
