//Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную от слов-дупликатов,
// т.е. каждое слово должно повторяться не более одного раза.

const removeDuplicate = str => Array.from(new Set(str.split(', ')))

console.log(removeDuplicate("вишня, груша, слива, груша"))
