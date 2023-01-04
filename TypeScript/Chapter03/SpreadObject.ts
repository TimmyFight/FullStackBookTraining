namespace SpreadObject {
  class A {
    aname: string = "A";
  }

  class B {
    bname: string = "B";
  }

  const a = new A();
  const b = new B();
  const c = {...a, ...b};
  const d = Object.assign(a, b);

  console.log("By spread operator: ", c);
  console.log("By assign: ", d);

  a.aname = 'a1';
  console.log("After changed a.aname. By spread operator: ", c);
  console.log("After changed a.aname. By assign: ", d);
}
