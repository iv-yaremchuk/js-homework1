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