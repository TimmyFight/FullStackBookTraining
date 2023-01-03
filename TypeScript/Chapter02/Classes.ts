class Person {
  constructor(private msg: string) {}
  speak(): void {
    console.log(this.msg);
  }
}

const tom = new Person('Hello New Person');
// tom.msg = 'Hello Private';
tom.speak();
