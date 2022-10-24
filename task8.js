// Задание 8

let map = new Map();

map.set('str1', 'value1');
map.set(2, 3);
map.set(true, 4);

for (let item of map) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}