//Напишите функцию, которая принимает число n (n> 0) и возвращает обратную последовательность от n до 1.
//Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.

let func = (n) => {
    if (n>0){
        let result = [];
        for (n;n>0;n--){
            result.push(n)
        }
        return result.join(',')
    }
    return 'аргумент меньше или равен 0'
}

console.log(func(0))
console.log(func(10))