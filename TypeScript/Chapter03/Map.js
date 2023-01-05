var employees = [
    { name: 'John', id: 1 },
    { name: 'Tom', id: 2 },
    { name: 'George', id: 3 },
];
var elements = employees.map(function (item, index) {
    return "<div>".concat(item.id, " - ").concat(item.name, "</div>");
});
console.log(elements);
