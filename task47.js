//Напишите функцию, которая находит все анаграммы слова из списка. В качестве параметра даны слово и массив слов.
// Функция должна возвращать массив всех анаграмм или пустой массив, если анаграмм не обнаружено.

//Например: anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

const anagrams = (str, arr) => arr
    .filter(item=>item.split('').sort((a,b)=>a.codePointAt(0)-b.codePointAt(0)).join('')===str.split('').sort((a,b)=>a.codePointAt(0)-b.codePointAt(0)).join(''))

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
