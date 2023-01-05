const employees = [
  { name: 'John', id: 1 },
  { name: 'Tom', id: 2 },
  { name: 'George', id: 3 },
];

const elements = employees.map((item, index) => {
  return `<div>${item.id} - ${item.name}</div>`;
});

console.log(elements);
