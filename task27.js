//Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str все вхождение подстроки find на подстроку replace.

const replaceAll = (find, replace, str) => str.split(' ').map(item => item===find?replace:item).join(' ')

console.log(replaceAll('abc', 'заменил','abc def def lom abc abc def'))