// Напишите функцию, которая находит факториал 5.

const factorialNum = (num) => {
    let factorial = 1
    for (let i = 1; i<=num;i++){
        factorial *= i
    }
    return factorial
}


console.log(factorialNum(5))