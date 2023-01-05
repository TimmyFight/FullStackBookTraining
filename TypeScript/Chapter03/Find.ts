const items = [
  { name: 'John', age: 20},
  { name: 'Pamela', age: 68},
  { name: 'John', age: 11},
];

const john = items.find((item) => {
  return item.name === 'John';
});

console.log(john);
