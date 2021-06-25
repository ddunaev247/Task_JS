const unique_letters = str => Array.from(new Set(str.split(''))).join('')

console.log(unique_letters('anaconda'))