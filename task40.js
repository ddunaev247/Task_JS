//Напишите функцию, которая находит наиболее часто используемый элемент массива.

let array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7, 7, 7, 7, 7];


const maxRepElem = arr => {
    
let arrLengthElem = [];
let uniqueArr = Array.from( new Set(arr))

    for (let i=0;i<uniqueArr.length;i++){
        pushElem = arr.filter(item=> item===uniqueArr[i])
        arrLengthElem.push(pushElem.length)
        }   

let maxElem = 0
let indexMaxElem = 0

    for (let i = 0;i<arrLengthElem.length;i++){
        if (maxElem<arrLengthElem[i]){
            maxElem = arrLengthElem[i]
            indexMaxElem = i
        }
    }
return uniqueArr[indexMaxElem]
}

console.log(maxRepElem(array))