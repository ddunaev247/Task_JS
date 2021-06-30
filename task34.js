//Создайте метод объекта `String endsWith()`, который сравнивает подстроку str1 с окончанием исходной строки str и определяет,
// заканчивается ли строка символами подстроки.

String.prototype.endsWith = function(end){
    return this.split(' ').reverse().indexOf(end)===0
}

let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";

console.log(str.endsWith(str2))
console.log(str.endsWith(str1))