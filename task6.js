// Задание 6

let arr1 = [1, 1, 1, 1];
let isEqual = true;

for (let i = 0; i < arr1.length - 1; i++) {
  if (arr1[i] !== arr1[i + 1]) {
    isEqual = false;
  }
}

console.log(isEqual);