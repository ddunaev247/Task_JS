//Напишите функцию capitalizeFirstLetter(str), которая преобразовывает первый символ строки в верхний регистр.

const capitalizeFirstLetter = str => str
    .split('')
    .map((item,index)=>index===0?item.toUpperCase():item)
    .join('')

console.log(capitalizeFirstLetter('пример строки'))