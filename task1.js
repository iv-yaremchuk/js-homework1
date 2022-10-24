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