async function dleyedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successful");
    }, 500);
  });
}

(async function execAsyncFunc() {
  const result = await dleyedResult();
  console.log(result);
})();
