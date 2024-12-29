function rendomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const firstPromis = new Promise((resolve) =>
  setTimeout(() => resolve("First message"), rendomTime(1000, 5000))
);
const secondPromis = new Promise((resolve) =>
  setTimeout(() => resolve("Second message"), rendomTime(1000, 5000))
);
const thirdPromis = new Promise((resolve) =>
  setTimeout(() => resolve("Third message"), rendomTime(1000, 5000))
);
Promise.race([firstPromis, secondPromis, thirdPromis]).then((result) =>
  console.log(`A ${result} has won`)
);
