function getEmployee(id) {
  return {
    name: "John",
    age: "20",
    address: "123 Main",
    country: "Poland",
  };
}

const { name: FullName, age } = getEmployee(100);
console.log(`Employee ${FullName} is ${age} years old`);

function getEmployeeWorkInfo(id) {
  return [id, "22 Avenue", "USA"];
}

const [id, officeAdress] = getEmployeeWorkInfo(100);
console.log(`Employee ${id} work at ${officeAdress}`);
