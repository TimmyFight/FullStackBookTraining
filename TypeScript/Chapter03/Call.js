var callerObject = {
    name: "John"
};
function checkMyThis(age) {
    console.log("What is this: ".concat(this));
    console.log("Do you have a name? ".concat(this.name));
    this.age = age;
    console.log("How old are you ".concat(this.age));
}
checkMyThis(10);
checkMyThis.call(callerObject, 25);
