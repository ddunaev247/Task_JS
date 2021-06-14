// В этом небольшом задании вам дана строка чисел, разделенных пробелами, и Вы должны вернуть самое большое и самое маленькое число.
// Например:
// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6") ----> "666 -123"


function findMamMinString(str){
    result = str.split(' ').sort((a,b)=>+a - +b)
    return `${result[result.length-1]} ${result[0]}`
}
console.log(findMamMinString("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"))