const callerObject = {
  name: "John"
}

function checkMyThis(age) {
  console.log(`What is this: ${this}`);
  console.log(`Do you have a name? ${this.name}`);
  this.age = age;
  console.log(`How old are you ${this.age}`);
}

checkMyThis(10);
checkMyThis.call(callerObject, 25);
