//Даны две строки, которые содержат только буквы от a - z. Ваша задача написать функцию, которая возвращает новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.

//Например:
//longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

const longest = (str1,str2) => Array
    .from(new Set(str1.split('')
    .concat(str2.split(''))))
    .sort((a,b)=> a.localeCompare()-b.localeCompare())
    .join('')


console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))