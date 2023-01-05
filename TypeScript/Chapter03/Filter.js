var filterItems = [
    { name: 'John', age: 20 },
    { name: 'Pamela', age: 68 },
    { name: 'John', age: 11 },
];
var results = filterItems.filter(function (item, index) {
    console.log(index);
    return item.name === 'John';
});
console.log(results);
