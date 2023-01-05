var items = [
    { name: 'John', age: 20 },
    { name: 'Pamela', age: 68 },
    { name: 'John', age: 11 },
];
var john = items.find(function (item) {
    return item.name === 'John';
});
console.log(john);
