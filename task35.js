//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал.

const copyArr = arr => arr.slice()

let vegetables = ['Капуста', 'Репа', 'Редиска'];
let newArr = copyArr(vegetables)

console.log(newArr)
console.log(vegetables === newArr) // проверка