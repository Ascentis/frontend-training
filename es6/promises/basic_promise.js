const promise1 = new Promise((resolve, reject) => {
  resolve();
});

promise1
  .then(() => {
    console.log('promise resolved');
  })
  .then(() => {
    console.log('run after');
  })
  .catch(() => {
    console.log('promise rejected');
  });

const promise2 = new Promise((resolve, reject) => {
  reject();
});

promise2
  .then(() => {
    console.log('promise resolved');
  })
  .then(() => {
    console.log('run after');
  })
  .catch(() => {
    console.log('promise rejected');
  });
