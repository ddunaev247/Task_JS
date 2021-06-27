//Напишите функцию, которая принимает массив и переносит все 0 в конец, не изменяя порядок остальных элементов массива.

const moveZeros = arr => {
    arrZero = arr.filter(item => item===0)
    arr = arr.filter(item => item!==0).concat(arrZero)
    return arr
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))