const fs = require("fs/promises");

(async () => {
  await fs.writeFile("test-promises.txt", "Welcome World, here are Promises.");
  const readContent = await fs.readFile("test-promises.txt", "utf8");
  console.log(readContent);
})();
