const promise = new Promise((resolve, reject) => {
  // resolve();
  reject();
});

promise
  .then(() => {
    console.log("promise resolved");
  })
  .then(() => {
    console.log("run after");
  })
  .catch(() => {
    console.log("promise rejected");
  });
