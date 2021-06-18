//Напишите функцию, которая возвращает минимальное и максимальное значение заданного массива.


function checkMinMaxArr(arr){
    arr.sort((a,b) => a-b)
    return [arr[0], arr[arr.length-1]]
}

console.log(checkMinMaxArr([1, 5, 8, 10, 35, 100]))
console.log(checkMinMaxArr([-5, -7, -2, 5]))