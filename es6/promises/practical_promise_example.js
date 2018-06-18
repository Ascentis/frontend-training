const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // notice that a single promise can only be used once
    resolve();
  }, 3000);
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

// another example
const promise2 = new Promise((resolve, reject) => {
  var request = new XMLHttpRequest();

  request.onload = () => {
    resolve();
  };
});

promise2
  .then(() => {
    console.log("promise resolved");
  })
  .then(() => {
    console.log("run after");
  })
  .catch(() => {
    console.log("promise rejected");
  });
