const widgets = [
  { id: 1, color: "red" },
  { id: 2, color: "green" },
  { id: 3, color: "blue" },
  { id: 4, color: "yellow" },
];

console.log(
  "Do we have some blue element? ",
  widgets.some((item) => {
    return item.color === "blue";
  })
);

console.log(
  "Each element is blue? ",
  widgets.every((item) => {
    return item.color === "blue";
  })
);
