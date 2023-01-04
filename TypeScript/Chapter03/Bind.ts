class A {
  name: string = "A";
  write() {
    console.log("Class A, this.name: ", this.name);
  }
}

class B {
  name: string = "B";
  write() {
    console.log("Class B, this.name: ", this.name);
  }
}

const a =  new A();
a.write();

const b = new B();
b.write = b.write.bind(a);
b.write();
