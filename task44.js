//задача написать функцию, которая принимает в качестве параметра целое число и возводит в квадрат каждую цифру числа.
// Результат также необходимо вернуть в виде целого числа.
//Например: squareDigits(9119) --> 811181

const squareDigits = num => {
    if (Number.isInteger(num)){
        return +String(num).split('').map(item=>item**2).join('')
    }
    return 'не целое число'
}

console.log(squareDigits(90119))