//Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

const alphabetize = str => str.split('').sort().join('')


console.log(alphabetize('bcda'))
console.log(alphabetize('Europe'))