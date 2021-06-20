//Напишите функцию, которая возвращает сумму двух наименьших положительных чисел, учитывая массив из минимум 4 положительных чисел.
//Например: [12,423,54,1235,3,15,2,52] => 5

let sumToMinNumber = (arr) => {
    if (arr.length >3 ){
        let result = arr.filter(item => item>0).sort((a,b) => a-b)
        return result[0] + result[1]
    }
return 'в массиве меньше 4-х элементов'
}
console.log(sumToMinNumber([12,423,54,1235,3,15,2,52,-3]))