// Задание 1

let input = +prompt('Введите число:');

if (typeof input === 'number' && isNaN(input) === false) {
  if (input % 2 === 0) {
    console.log('Число чётное');
  } else {
    console.log('Число нечётное');
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}

// Задание 2

let x = 12;

switch (typeof x) {
  case 'number':
    console.log('х - число');
    break;
  case 'string':
    console.log('х - строка');
    break;
  case 'boolean':
    console.log('х - логический тип');
    break;
  default:
    console.log('Тип x не определён');
    break;
}

// Задание 3

let str = 'Hello';
let strReversed = [];

for (let i = str.length - 1; i >= 0; --i) {
  strReversed += str[i];
}

console.log(strReversed);

// Задание 4

let min = 0;
let max = 100;
let randNumber = Math.round(Math.random() * (max - min)) + min;

console.log(randNumber);

// Задание 5

let arr = [12, 'st', 10, 7];
let arrCount = arr.length;
console.log('Всего элементов в массиве: ' + arrCount);

for (let i = 0; i < arrCount; i++) {
  console.log(arr[i]);
}

// Задание 6

let arr1 = [1, 1, 1, 1];
let isEqual = true;

for (let i = 0; i < arr1.length - 1; i++) {
  if (arr1[i] !== arr1[i + 1]) {
    isEqual = false;
  }
}

console.log(isEqual);

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

// Задание 8

let map = new Map();

map.set('str1', 'value1');
map.set(2, 3);
map.set(true, 4);

for (let item of map) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}
