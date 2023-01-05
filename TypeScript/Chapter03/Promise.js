const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful");
    // reject("Failed");
  }, 500);
});

myPromise
  .then((done) => {
    console.log(done);
  })
  .catch((err) => {
    console.log(err);
  });
