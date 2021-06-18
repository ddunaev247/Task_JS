function invert(arr){
    let invertArr = arr.map(item => item * -1)
    return `[${arr}]==[${invertArr}]`
}

console.log(invert([-1,-2,-4,-5]))
console.log(invert([1,2,4,5]))
console.log(invert([1,-2,4,-5]))