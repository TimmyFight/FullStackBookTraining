const mappedEmp = new Map();
mappedEmp.set("Linda", { fullName: "Linda Smith", id: 1 });
mappedEmp.set("John", { fullName: "John Mbape", id: 2 });
mappedEmp.set("Brayan", { fullName: "Brayan Conor", id: 3 });

console.log(mappedEmp);
console.log("Get ", mappedEmp.get("John"));
console.log("Size ", mappedEmp.size);

for (let [key, value] of mappedEmp) {
  console.log("Iterration: ", key, value);
}
