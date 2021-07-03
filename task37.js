//Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.

const removeDuplicates = arr => Array.from(new Set(arr))

console.log(removeDuplicates(["php", "php", "css", "css", "script", "script", "html", "html", "java" ]))

//вариант 2
const removeDuplicates2 = arr => arr.filter((item,index,array)=>array.indexOf(item)===array.lastIndexOf(item))

console.log(removeDuplicates2(["php", "php", "css", "css", "script", "script", "html", "html", "java" ]))

// вариант 3

const removeDuplicates3 = arr =>{

    let arrLengthElem = [];
    let uniqueArr = Array.from( new Set(arr))

        for (let i=0;i<uniqueArr.length;i++){
            pushElem = arr.filter(item=> item===uniqueArr[i])
            arrLengthElem.push(pushElem.length)
            }   

    let minElem = 1
    let resultArr = []

        for (let i = 0;i<arrLengthElem.length;i++){
            if (minElem>=arrLengthElem[i]){
                resultArr.push(uniqueArr[i])
            }
        }
    return resultArr
}

console.log(removeDuplicates3(["php", "php", "css", "css", "script", "script", "html", "html", "java", 'python' ]))



