const randomDelay = (value) => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  randomDelay("Promise 1"),
  randomDelay("Promise 2"),
  randomDelay("Promise 3"),
  randomDelay("Promise 4"),
  randomDelay("Promise 5"),
];

Promise.race(promises).then((result) => {
  console.log(`A ${result} has won`);
});
