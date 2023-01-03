class Person {
  name: string;
}

const jill: {name: string} = {
  name: 'Julia',
}

const person: Person = jill;

console.log(person);
