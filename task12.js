//В данной задаче Вам нужно удалить из одного массива все элементы второго массива.
//Например:
//arrayDiff([1,2],[1]) ==> [2]
let arrayDiff = (arr1,arr2) =>{
    let result = arr1.filter(item => !arr2.includes(item))
    return result
}
console.log(arrayDiff([1,2,3,4,5,1,3],[1,3]))