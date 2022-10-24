// Задание 7

let arr2 = [0, 2, 3, 4, 0, null, 'j', ','];
let countOdd = 0;
let countEven = 0;
let countZero = 0;

for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === 'number') {
    if (arr2[i] === 0) {
      countZero += 1;
    } else if (arr2[i] % 2 !== 0) {
      countOdd += 1;
    } else if (arr2[i] % 2 === 0) {
      countEven += 1;
    }
  }
}

console.log(
  `Массив содержит: ${countEven} чётных чисел, ${countOdd} нечётных чисел, ${countZero} нолей.`
);