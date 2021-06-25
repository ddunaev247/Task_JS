//Напишите функцию isUpperCase(str, character), которая определяет, в каком регистре написан символ строки в указанной позиции.
//Если он написан в верхнем регистре - возвращать true, если в нижнем – false.


const isUpperCase = (str, character) => 0<=character<=str.length?str.split('')[character]===(str.split('')[character]).toUpperCase():'ошибка в позиции'

console.log(isUpperCase('tasks JavaScript', 6))
console.log(isUpperCase('tasks javaScript', 6))
