//Напишите функцию `startsWith()`, которая определяет, начинается ли строка символами другой строки, возвращая, соотвественно, true или false.

String.prototype.startsWith = function(start) {
    return this.split(' ').indexOf(start)===0
}

console.log('abc def ghi jkl mno pqr stu'.startsWith('abc'))