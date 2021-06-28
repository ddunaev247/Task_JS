//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

const strip = str => str
    .trim()
    .split('')
    .filter((item,index,array)=> item===' ' && array[index+1]===' '?false:item)
    .join('')

console.log(strip(" Paaaaasha  is a good             boy "))