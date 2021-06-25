// Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

const unique_letters = str => Array.from(new Set(str.split(''))).join('')

console.log(unique_letters('anaconda'))