class ClassA {
  static typeName: string;
  constructor(){}
  static getFullName() {
    return "ClassA" + ClassA.typeName;
  }
}

const newInstanceOfClassA = new ClassA();
console.log(ClassA.typeName);
