const fs = require("fs");

fs.writeFile("test.txt", "Welcome World!", () => {
  fs.readFile("test.txt", "utf8", (err, data) => {
    console.log(data);
  });
});
