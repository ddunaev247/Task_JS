//Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
//Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

const colonOdd = num => String(num)
    .split('')
    .map((item, index, array) => item % 2 && array[index+1] % 2 ? item + ':' : item)
    .join('')

console.log(colonOdd(55639217))