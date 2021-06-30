//Напишите функцию с двумя параметрами, которая создаёт массив элементов, представляющих собой сумму соответствующих элементов заданных массивов.

const sumElemTwoArr = (arr1,arr2) => {
    let result = []
    result = arr1.map((item,index)=> arr2[index]!==undefined?item+arr2[index]:item)
    return result
}

console.log(sumElemTwoArr([1, 2, 3, 4, 5],[4, 5, 6]))