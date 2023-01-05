const filterItems = [
  { name: 'John', age: 20},
  { name: 'Pamela', age: 68},
  { name: 'John', age: 11},
];

const results = filterItems.filter((item, index) => {
  console.log(index);
  return item.name === 'John';
});

console.log(results);
