namespace OptionaChainingNS {
  interface Wheels {
    count?: number;
  }
  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels){}
  }

  const car: Automobile | null = new Automobile({
    count: undefined,
  });

  console.log("Auto", car);
  console.log("Informations about wheels: ", car?.wheels);
  console.log("Number of wheels: ", car?.wheels?.count);
}
