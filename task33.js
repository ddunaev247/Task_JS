//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

const comparison = (str1, str2) => str1.toUpperCase()===str2.toUpperCase()


console.log(comparison('string', 'StRiNg'))
console.log(comparison('string', 'StRiNNNg'))