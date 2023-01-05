const userIds = [1, 2, 1, 3];

const uniqueIds = new Set(userIds);
console.log(uniqueIds);

uniqueIds.add(10);
console.log("After adding 10 ", uniqueIds);

console.log("3 is in Set? ", uniqueIds.has(3));

console.log("How many items is in Set ", uniqueIds.size);

for (let item of uniqueIds) {
  console.log("Iteration: ", item);
}
