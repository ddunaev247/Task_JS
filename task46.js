//busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17
const busStops = (arr) => {

    let inBus = arr.flat(2).filter((item,index)=> index%2===0).reduce((sum, current) => sum + current, 0)
    let outBus = arr.flat(2).filter((item,index)=> index%2===1).reduce((sum, current) => sum + current, 0)

return inBus-outBus
}

console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))