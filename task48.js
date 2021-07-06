//задача написать функцию, которая вычисляет время, которое требуется покупателям заплатить за товары.

const queueTime = (arr,kass) => {
    
    let sumTime = arr.reduce((prev,curr)=>prev+curr,0)
    return +(sumTime/kass).toFixed(2)
    
}

console.log(queueTime([1,2,3,4,6,7,8,8,4,3], 3))