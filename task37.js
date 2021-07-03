//Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.

const removeDuplicates = arr => Array.from(new Set(arr))

console.log(removeDuplicates(["php", "php", "css", "css", "script", "script", "html", "html", "java" ]))

//вариант 2
const removeDuplicates2 = arr => arr.filter((item,index,array)=>array.indexOf(item)===array.lastIndexOf(item))

console.log(removeDuplicates2(["php", "php", "css", "css", "script", "script", "html", "html", "java" ]))

// вариант 3

const removeDuplicates3 = arr =>



