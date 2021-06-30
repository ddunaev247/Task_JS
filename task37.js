//Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.

const removeDuplicates = arr => Array.from(new Set(arr))

console.log(removeDuplicates(["php", "php", "css", "css", "script", "script", "html", "html", "java" ]))

//вариант 2


