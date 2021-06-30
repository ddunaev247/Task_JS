//Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

const expand = arr => arr.flat(Infinity)

console.log(expand([1, [2], [3, [[4]]],[5,6]]))