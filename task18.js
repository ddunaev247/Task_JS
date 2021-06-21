//Напишите функцию, которая проверит, является ли строка палиндромом.

const palind = str => str.length>1?str === str.split('').reverse().join(''):'маленькая строка'

console.log(palind('ololo'))